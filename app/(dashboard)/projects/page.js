import { Heading } from "@/app/components/heading";
import Link from "next/link";
import { ProjectsListClient } from "./projects-list-client";

export const dynamic = "force-dynamic";

function getApiBaseUrl() {
  if (process.env.NODE_ENV === "development") {
    return `http://localhost:${process.env.PORT || 3002}`;
  }

  return process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002";
}

async function getProjects(page = 1, limit = 6) {
  try {
    const baseUrl = getApiBaseUrl();
    const res = await fetch(
      `${baseUrl}/api/projects/get?page=${page}&limit=${limit}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch projects");
    return res.json();
  } catch (error) {
    console.error("getProjects Error:", error);
    return { projects: [], totalPages: 0 };
  }
}

export default async function ProjectsPage({ searchParams }) {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = 6;

  const { projects, totalPages } = await getProjects(page, limit);

  return (
    <div className="mx-auto relative overflow-hidden bg-gradient-to-b from-purple-standard to-gray-lightmedium text-white z-30">
      <main className="min-h-screen px-5 sm:px-12 md:px-14 lg:px-20 py-10">
        <div className="max-w-[1440px] mx-auto space-y-8 text-center">
          <div className="space-y-4">
            <Heading title="Projects" />
            <p className="Poppins-Regular text-xs sm:text-sm md:text-base lg:text-lg">
              Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for companies.
            </p>
          </div>

          <ProjectsListClient initialProjects={projects || []} />

          {/* Optional Pagination (add conditionally if needed) */}
          <div className="flex justify-center mt-12 space-x-4">
            <Link
              href={`/projects?page=${page > 1 ? page - 1 : 1}`}
              className={`px-4 py-2 rounded-full text-white border transition ${page === 1
                  ? "bg-transparent border-white text-gray-primary cursor-not-allowed"
                  : "bg-transparent border-white hover:bg-white hover:text-black"
                }`}
            >
              Prev
            </Link>
            {Array.from({ length: totalPages }, (_, i) => (
              <Link
                key={i}
                href={`/projects?page=${i + 1}`}
                className={`px-4 py-2 rounded-full text-black-dark border transition ${i + 1 === page
                    ? "bg-white text-black-dark font-bold"
                    : "bg-transparent border-white hover:bg-white hover:text-black-dark"
                  }`}
              >
                {i + 1} 
              </Link>
            ))}
            <Link
              href={`/projects?page=${page < totalPages ? page + 1 : totalPages}`}
              className={`px-4 py-2 rounded-full text-white border transition ${page === totalPages
                  ? "bg-transparent border-white text-gray-primary cursor-not-allowed"
                  : "bg-transparent border-white hover:bg-white hover:text-black-dark"
                }`}
            >
              Next
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
