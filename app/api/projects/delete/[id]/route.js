import { NextResponse } from "next/server";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "@/app/utils/lib/firebase";

export async function DELETE(req, { params }) {
  const { id: projectId } = params;

  if (!projectId) {
    return NextResponse.json({ message: "Project ID is required" }, { status: 400 });
  }

  try {
    await deleteDoc(doc(db, "projects", projectId));
    return NextResponse.json({ message: "Project deleted successfully", projectId });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json({ message: "Could not delete project" }, { status: 500 });
  }
}
