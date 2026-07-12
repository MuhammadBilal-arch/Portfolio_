import cloudinary from "@/app/utils/lib/cloudinary";
import { NextResponse } from "next/server";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/utils/lib/firebase";

export async function POST(request) {
  const formData = await request.formData();
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
    const imageUrls = uploadResults.filter(Boolean).map((result) => result.secure_url);

    const newProject = {
      title: projectTitle,
      description: projectDescription,
      link,
      type,
      priority: Number(priority),
      tech_stack,
      images: imageUrls.length > 0 ? imageUrls : [],
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    };

    const docRef = await addDoc(collection(db, "projects"), newProject);

    return NextResponse.json({ message: "Project created successfully", data: { id: docRef.id, ...newProject } });
  } catch (error) {
    console.error("Project create failed:", error);
    return NextResponse.json(
      {
        message: "Could not create project",
        error: error?.message || "Unknown error",
      },
      { status: 500 }
    );
  }
}
