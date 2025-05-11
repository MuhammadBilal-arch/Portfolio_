import cloudinary from "@/app/utils/lib/cloudinary";
import prisma from "@/app/utils/lib/prisma";
import { NextResponse } from "next/server";

// Handles POST requests to /api
export async function POST(request) {
  const formData = await request.formData();
  console.log(process.env.DATABASE_URL);
  // Get project details
  const projectTitle = formData.get("title");
  const projectDescription = formData.get("description");
  const imageFiles = formData.getAll("images"); 
  const priority = formData.get("priority");
  const link = formData.get("link");
  const type = formData.get("type");
  const tech_stack = formData.get("tech_stack");

  try {
    const uploadPromises = imageFiles.map(async (file) => {
      const buffer = await file.arrayBuffer(); 
      const bufferFile = Buffer.from(buffer); 

      return new Promise((resolve, reject) => {
        const uploadStream = cloudinary.uploader.upload_stream(
          { folder: "projects" },
          (error, result) => {
            if (error) return reject(error);
            resolve(result);
          }
        );
        uploadStream.end(bufferFile); 
      });
    });

    const uploadResults = await Promise.all(uploadPromises);
    const imageUrls = uploadResults
      .filter(result => result) // Filter out any undefined results
      .map(result => result.secure_url);

    // Create the project in the database
    const newProject = await prisma.project.create({
      data: {
        title: projectTitle,
        description: projectDescription,
        link: link,
        type: type,
        priority: Number(priority),
        tech_stack: tech_stack,
        images: imageUrls.length > 0 ? imageUrls : null,
      },
    });

    return NextResponse.json({ message: "Project created successfully", data: newProject });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Could not create project" }, { status: 500 });
  }
}
