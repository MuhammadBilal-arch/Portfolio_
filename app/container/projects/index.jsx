import { Heading } from "@/app/components/heading";
import React from "react";
import Image from "next/image"; 
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getProjects(page = 1, limit = 6) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/projects/get?page=${page}&limit=${limit}`,
      { cache: "no-store" }
    );
    if (!res.ok) throw new Error("Failed to fetch projects");
    return await res.json();
  } catch (error) {
    console.error("getProjects Error:", error);
    return { projects: [], totalPages: 0 };
  }
}

export const Projects = async ({ searchParams }) => {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = 6;

  const { projects, totalPages } = await getProjects(page, limit);
  return (
    <div
      id="projects"
      className="bg-gradient-to-b from-purple-standard to-gray-lightmedium page-padding text-center py-24 overflow-hidden text-white z-30"
    >
      <div className="max-w-[1440px] mx-auto space-y-8">
        <div className="space-y-4">
          <Heading title="Projects" />
          <div className="Poppins-Regular text-xs sm:text-sm md:text-base lg:text-lg">
            Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for companies.
          </div>
        </div>
        {
          projects?.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 w-full">
              {projects?.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-extralight p-4 text-gray-normal group overflow-hidden space-y-2 cursor-pointer"
                >
                  {item?.images.length > 0 && (
                    <div className="max-h-48 h-48 overflow-hidden">
                      <Image
                        src={item?.images[0] || ''}
                        alt={item?.title}
                        width={500}
                        height={300}
                        className="w-full min-h-48 object-center object-cover group-hover:scale-105 duration-1000"
                      />
                    </div>
                  )}
                  <div className="text-left">
                    <div className="text-base Poppins-Medium text-purple-primary">
                      {item.title}
                    </div>
                    <p
                      title={item.description}
                      className="text-xs Poppins-Regular text-left h-12 mb-4 line-clamp-2">
                      {item.description}
                    </p>

                      <Link
                        className="btn-purple-normal-filled group-hover:bg-orange-primary hover:text-white text-xs py-2.5 px-3"
                        href='/'
                      >
                        Visit Website
                      </Link>
                  </div>
                </div>
              ))}
            </div>) : (
            <div className="text-center text-gray-primary max-h-[50vh] min-h-[50vh] border border-white-primary rounded-md p-4 w-full flex flex-col items-center justify-center justify-self-center">
              <h1 className="text-xl font-semibold mb-4 text-white">No projects found</h1>
            </div>
          )
        }
        <div className="flex justify-center items-center">
          <Link href="/projects-list">
            <button title="View All Projects"
              className="btn-purple-normal-filled">View All Projects</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
