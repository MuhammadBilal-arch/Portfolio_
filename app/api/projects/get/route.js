import prisma from "@/app/utils/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "6");
  const skip = (page - 1) * limit;

  try {
    const totalProjects = await prisma.project.count();
    const totalPages = Math.ceil(totalProjects / limit);
    console.log(totalPages,"total pages");
    const projects = await prisma.project.findMany({
      skip,
      take: limit,
      orderBy: { createdAt: "desc" },
    });
    console.log(projects,"response projects"); 
    return NextResponse.json({ projects, totalPages });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Could not fetch projects" }, { status: 500 });
  }
}
