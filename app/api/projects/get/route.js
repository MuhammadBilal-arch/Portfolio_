import prisma from "@/app/utils/lib/prisma";
import { NextResponse } from "next/server";

export async function GET() {
    try {
      const projects = await prisma.project.findMany();
  
      return NextResponse.json(projects);
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Could not fetch projects" }, { status: 500 })
  }
}

  