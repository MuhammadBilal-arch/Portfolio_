import { NextResponse } from "next/server";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "@/app/utils/lib/firebase";

export async function GET(req) {
  const { searchParams } = new URL(req.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limitSize = parseInt(searchParams.get("limit") || "6");
  const skip = (page - 1) * limitSize;

  try {
    if (!db) {
      return NextResponse.json({ projects: [], totalPages: 0 });
    }

    const projectsRef = collection(db, "projects");
    const snapshot = await getDocs(query(projectsRef, orderBy("createdAt", "desc")));
    const allProjects = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

    const sortedProjects = [...allProjects].sort((a, b) => {
      const priorityA = Number(a.priority || 0);
      const priorityB = Number(b.priority || 0);

      if (priorityA !== priorityB) {
        return priorityB - priorityA;
      }

      const createdAtA = a.createdAt?.seconds || 0;
      const createdAtB = b.createdAt?.seconds || 0;
      return createdAtB - createdAtA;
    });

    const totalProjects = sortedProjects.length;
    const totalPages = Math.max(1, Math.ceil(totalProjects / limitSize));
    const projects = sortedProjects.slice(skip, skip + limitSize);

    return NextResponse.json({ projects, totalPages });
  } catch (error) {
    console.error("Project fetch failed:", error);
    return NextResponse.json({ projects: [], totalPages: 0 });
  }
}
