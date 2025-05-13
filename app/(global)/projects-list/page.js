import { Heading } from "@/app/components/heading";
import Image from "next/image";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function getProjects(page = 1, limit = 6) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/projects/get?page=${page}&limit=${limit}`,
    { cache: "no-store" }
  );
  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export default async function ProjectsPage({ searchParams }) {
  const page = parseInt(searchParams?.page || "1", 10);
  const limit = 10;

  const { projects, totalPages } = await getProjects(page, limit);

  return (
    <div className="mx-auto relative overflow-hidden bg-gradient-to-b from-purple-standard to-gray-lightmedium text-white z-30">
      <main className="min-h-screen px-5 sm:px-12 md:px-14 lg:px-20 py-10">
        <div className="mx-auto space-y-8 text-center">
          <div className="flex justify-end">
          <Link href="/">
            <button className="bg-orange-primary text-white px-5 py-1.5 rounded-md">Back</button>
          </Link>
          </div>
          <div className="space-y-4">
            <Heading title="Projects" />
            <p className="Poppins-Regular text-xs sm:text-sm md:text-base lg:text-lg">
              Listed below are some of the most representative projects I've worked on. They range from basic web design for presentation sites to advanced web development for companies.
            </p>
          </div>

          {
            projects?.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 w-full">
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
                      <p className="text-xs Poppins-Regular text-left h-12 mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      <a
                        className="btn-purple-normal-filled group-hover:bg-orange-primary hover:text-white text-xs"
                        href={item.links}
                        target="_blank"
                      >
                        Visit Website
                      </a>
                    </div>
                  </div>
                ))}
              </div>) : (
              <div className="text-center text-gray-primary max-h-[50vh] min-h-[50vh] border border-white-primary rounded-md p-4 w-full flex flex-col items-center justify-center justify-self-center">
                <h1 className="text-xl font-semibold mb-4 text-white">No projects found</h1>
                <Link href="/projects/add">
                  <button className="btn-purple-normal-filled">Add Project</button>
                </Link>
              </div>
            )
          }


          {/* Optional Pagination (add conditionally if needed) */}
          <div className="flex justify-center mt-12 space-x-4">
            <Link
              href={`/projects-list?page=${page > 1 ? page - 1 : 1}`}
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
                href={`/projects-list?page=${i + 1}`}
                className={`px-4 py-2 rounded-full text-black-dark border transition ${i + 1 === page
                  ? "bg-white text-black-dark font-bold"
                  : "bg-transparent border-white hover:bg-white hover:text-black-dark"
                  }`}
              >
                {i + 1}
              </Link>
            ))}
            <Link
              href={`/projects-list?page=${page < totalPages ? page + 1 : totalPages}`}
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
