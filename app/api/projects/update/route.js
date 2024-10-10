import prisma from "@/app/utils/lib/prisma";
import { NextResponse } from "next/server";

export async function PUT({ params, body }) {
    const projectId = params.id;
    const { title, description } = body;

    try {
        const updatedProject = await prisma.project.update({
            where: {
                id: projectId
            },
            data: {
                title,
                description
                // Add other fields to update as needed
            }
        });

        return NextResponse.json(updatedProject);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Could not update project" }, { status: 500 });
    }
}
