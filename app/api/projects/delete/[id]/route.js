import prisma from "@/app/utils/lib/prisma";
import { NextResponse } from "next/server";

export async function DELETE(req, { params }) {
    const { id: projectId } = params; // Access the dynamic id from params

    if (!projectId) {
        return NextResponse.json({ message: "Project ID is required" }, { status: 400 });
    }

    try {
        const project = await prisma.project.delete({
            where: {
                id: Number(projectId) // Convert to number if your ID is numeric
            }
        });

        return NextResponse.json({ message: "Project deleted successfully", project });
    } catch (error) {
        console.error("Error deleting project:", error);
        return NextResponse.json({ message: "Could not delete project" }, { status: 500 });
    }
}
