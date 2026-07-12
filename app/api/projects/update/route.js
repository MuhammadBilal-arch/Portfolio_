import { NextResponse } from "next/server";
import { doc, updateDoc, serverTimestamp } from "firebase/firestore";
import { db } from "@/app/utils/lib/firebase";

export async function PUT(req) {
  const { searchParams } = new URL(req.url);
  const projectId = searchParams.get("id");
  const body = await req.json();
  const { title, description } = body;

  if (!projectId) {
    return NextResponse.json({ message: "Project ID is required" }, { status: 400 });
  }

  try {
    const projectRef = doc(db, "projects", projectId);
    await updateDoc(projectRef, {
      title,
      description,
      updatedAt: serverTimestamp(),
    });

    return NextResponse.json({ id: projectId, title, description });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Could not update project" }, { status: 500 });
  }
}
