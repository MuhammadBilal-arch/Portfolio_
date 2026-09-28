"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowRight, FaPause, FaPlay } from "react-icons/fa";

function toGenomeProject(project) {
  const stack = Array.isArray(project.tech_stack)
    ? project.tech_stack
    : String(project.tech_stack || "")
        .split(",")
        .map((technology) => technology.trim())
        .filter(Boolean);
  const searchableText = `${project.title || ""} ${project.description || ""} ${project.type || ""} ${stack.join(" ")}`.toLowerCase();
  const signals = ["product"];

  if (/react|next|node|firebase|prisma|api|full.?stack|database|javascript/.test(searchableText)) {
    signals.push("engineering");
  }
  if (/design|landing|website|brand|visual|\bui\b|\bux\b|frontend/.test(searchableText)) {
    signals.push("experience");
  }

  const projectLink = project.link || project.links || "/projects-list";

  return {
    title: project.title || "Untitled project",
    description: project.description || "Explore this project and its approach.",
    stack,
    signals,
    href: projectLink,
    external: /^https?:\/\//i.test(projectLink),
  };
}

const signals = [
  {
    id: "product",
    number: "01",
    label: "Product thinking",
    detail: "Start with the real user need, then shape the feature set around it.",
    markers: ["Discovery", "Clarity", "Useful outcomes"],
    color: "#E08A1E",
  },
  {
    id: "engineering",
    number: "02",
    label: "Full-stack systems",
    detail: "Connect polished interfaces to dependable data, APIs, and integrations.",
    markers: ["React", "Next.js", "Firebase / Prisma"],
    color: "#9D76AE",
  },
  {
    id: "experience",
    number: "03",
    label: "Visual experience",
    detail: "Give each product a distinct voice without losing usability or momentum.",
    markers: ["Responsive UI", "Visual systems", "Interaction"],
    color: "#C2B1D1",
  },
];

export default function GenomeExperience() {
  const [selectedSignal, setSelectedSignal] = useState("product");
  const [projectFilter, setProjectFilter] = useState("all");
  const [motionEnabled, setMotionEnabled] = useState(true);
  const [projects, setProjects] = useState([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [projectSyncError, setProjectSyncError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadProjects = async () => {
      try {
        const firstResponse = await fetch("/api/projects/get?page=1&limit=100", {
          cache: "no-store",
        });
        if (!firstResponse.ok) throw new Error("Project request failed");

        const firstPage = await firstResponse.json();
        const allProjects = Array.isArray(firstPage.projects) ? [...firstPage.projects] : [];
        const totalPages = Number(firstPage.totalPages) || 1;

        for (let page = 2; page <= totalPages; page += 1) {
          const response = await fetch(`/api/projects/get?page=${page}&limit=100`, {
            cache: "no-store",
          });
          if (!response.ok) throw new Error("Project request failed");
          const data = await response.json();
          if (Array.isArray(data.projects)) allProjects.push(...data.projects);
        }

        if (isMounted) {
          setProjects(allProjects.map(toGenomeProject));
          setProjectSyncError(false);
        }
      } catch {
        if (isMounted) setProjectSyncError(true);
      } finally {
        if (isMounted) setProjectsLoading(false);
      }
    };

    const refreshWhenVisible = () => {
      if (document.visibilityState === "visible") loadProjects();
    };

    loadProjects();
    const intervalId = window.setInterval(refreshWhenVisible, 30_000);
    window.addEventListener("focus", refreshWhenVisible);
    document.addEventListener("visibilitychange", refreshWhenVisible);

    return () => {
      isMounted = false;
      window.clearInterval(intervalId);
      window.removeEventListener("focus", refreshWhenVisible);
      document.removeEventListener("visibilitychange", refreshWhenVisible);
    };
  }, []);

  const activeSignal = signals.find((signal) => signal.id === selectedSignal);
  const visibleProjects = projects.filter((project) =>
    projectFilter === "all" ? true : project.signals.includes(projectFilter)
  );

  const selectSignal = (signalId) => {
    setSelectedSignal(signalId);
    setProjectFilter(signalId);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-[#100024] text-[#F6F3FA]">
      <div className="pointer-events-none absolute right-[-8rem] top-24 h-80 w-80 rounded-full border border-[#9D76AE]/10" />
      <div className="pointer-events-none absolute right-[-4rem] top-40 h-64 w-64 rounded-full border border-[#E08A1E]/10" />

      <div className="relative mx-auto max-w-7xl px-5 pb-16 pt-7 sm:px-8 lg:px-12">
        <header className="flex items-center justify-between border-b border-white/15 pb-5">
          <Link href="/" className="text-sm text-white/70 transition hover:text-[#E08A1E]">
            <span aria-hidden="true">←</span> Back to portfolio
          </Link>
          <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#9D76AE]">
            MB / Genome DNA
          </span>
        </header>

        <section className="grid gap-12 pb-20 pt-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-20 lg:pb-28 lg:pt-24">
          <div>
            <p className="mb-5 flex items-center gap-3 font-mono text-xs uppercase tracking-[0.2em] text-[#E08A1E]">
              <span className="h-px w-9 bg-[#E08A1E]" /> Project archive
            </p>
            <h1 className="max-w-2xl text-5xl font-semibold leading-[1.06] sm:text-6xl lg:text-7xl">
              Projects,
              <br />
              <span className="font-normal text-[#9D76AE]">decoded.</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              A project-first look at the ideas, technologies, and experiences behind the work.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/15 pt-5 font-mono text-xs uppercase tracking-[0.13em] text-white/55">
              <span><strong className="mr-2 text-[#F6F3FA]">04+</strong> years building</span>
              <span><strong className="mr-2 text-[#F6F3FA]">{String(projects.length).padStart(2, "0")}</strong> projects indexed</span>
              <span><strong className="mr-2 text-[#F6F3FA]">01</strong> connected process</span>
            </div>
          </div>

          <section aria-labelledby="signal-title" className="relative border-y border-white/15 py-6">
            <div className="mb-6 flex items-center justify-between gap-4">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">Explore a signal</p>
                <h2 id="signal-title" className="mt-1 text-xl font-medium">The work, in three strands</h2>
              </div>
              <button
                type="button"
                onClick={() => setMotionEnabled((enabled) => !enabled)}
                aria-label={motionEnabled ? "Pause strand animation" : "Play strand animation"}
                aria-pressed={motionEnabled}
                className="flex h-10 w-10 items-center justify-center border border-white/20 text-[#9D76AE] transition hover:border-[#9D76AE] hover:text-white"
              >
                {motionEnabled ? <FaPause aria-hidden="true" size={12} /> : <FaPlay aria-hidden="true" size={12} />}
              </button>
            </div>

            <div className="grid grid-cols-[1fr_38px] gap-x-4">
              <div className="space-y-2">
                {signals.map((signal, index) => {
                  const selected = selectedSignal === signal.id;

                  return (
                    <button
                      key={signal.id}
                      type="button"
                      onClick={() => selectSignal(signal.id)}
                      aria-pressed={selected}
                      className={`group flex w-full items-center gap-4 border px-4 py-4 text-left transition sm:px-5 ${
                        selected
                          ? "border-[#9D76AE]/70 bg-white/[0.07]"
                          : "border-white/10 hover:border-white/35"
                      }`}
                    >
                      <span className="font-mono text-xs text-white/35">{signal.number}</span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-sm font-medium sm:text-base">{signal.label}</span>
                        <span className="mt-1 block truncate text-xs text-white/45">{signal.markers.join(" · ")}</span>
                      </span>
                      <span
                        className={`h-3 w-3 shrink-0 rounded-full ${motionEnabled ? "animate-pulse" : ""}`}
                        style={{ backgroundColor: signal.color, animationDelay: `${index * 250}ms` }}
                      />
                    </button>
                  );
                })}
              </div>
              <div className="relative flex items-center justify-center" aria-hidden="true">
                <div className="absolute h-[86%] w-px bg-gradient-to-b from-[#E08A1E]/10 via-[#9D76AE] to-[#E08A1E]/10" />
                <div className={`relative flex h-4/5 flex-col justify-around ${motionEnabled ? "animate-pulse" : ""}`}>
                  {signals.map((signal) => (
                    <span
                      key={signal.id}
                      className="block h-2 w-8 -translate-x-3 rounded-full border border-white/30 bg-[#14221F]"
                      style={{ borderColor: signal.color }}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-5 min-h-32 border-l-2 pl-5" style={{ borderColor: activeSignal.color }} aria-live="polite">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/45">{activeSignal.number} / {activeSignal.label}</p>
              <p className="mt-2 max-w-lg text-sm leading-6 text-white/80">{activeSignal.detail}</p>
              <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1">
                {activeSignal.markers.map((marker) => (
                  <span key={marker} className="font-mono text-[10px] uppercase tracking-[0.1em]" style={{ color: activeSignal.color }}>
                    {marker}
                  </span>
                ))}
              </div>
            </div>
          </section>
        </section>

        <section aria-labelledby="projects-title" className="border-t border-white/15 pt-8">
          <div className="mb-7 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.2em] text-[#E08A1E]">Proof in the work</p>
              <h2 id="projects-title" className="mt-2 text-3xl font-medium">Projects connected to this signal</h2>
            </div>
            <div className="flex flex-wrap gap-2" aria-label="Filter projects">
              {[{ id: "all", label: "All" }, ...signals.map(({ id, label }) => ({ id, label: label.split(" ")[0] }))].map((filter) => (
                <button
                  key={filter.id}
                  type="button"
                  onClick={() => {
                    setProjectFilter(filter.id);
                    if (filter.id !== "all") setSelectedSignal(filter.id);
                  }}
                  aria-pressed={projectFilter === filter.id}
                  className={`border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.1em] transition ${
                    projectFilter === filter.id
                      ? "border-[#F2A66A] bg-[#F2A66A] text-[#14221F]"
                      : "border-white/20 text-white/65 hover:border-white/60 hover:text-white"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {projectSyncError && (
            <p className="mb-4 text-sm text-[#E08A1E]" role="status">
              Project sync is unavailable. Showing the last loaded projects.
            </p>
          )}
          <div className="grid gap-px border border-white/15 bg-white/15 md:grid-cols-3">
            {projectsLoading && projects.length === 0 ? (
              <p className="col-span-full bg-[#100024] p-8 text-sm text-white/60" role="status">
                Loading projects...
              </p>
            ) : visibleProjects.length === 0 ? (
              <p className="col-span-full bg-[#100024] p-8 text-sm text-white/60" role="status">
                {projects.length === 0 ? "No projects have been added yet." : "No projects match this signal yet."}
              </p>
            ) : visibleProjects.map((project, index) => {
              const ProjectLink = project.external ? "a" : Link;
              return (
                <ProjectLink
                  key={project.title}
                  href={project.href}
                  {...(project.external ? { target: "_blank", rel: "noreferrer" } : {})}
                  className="group flex min-h-64 flex-col bg-[#100024] p-5 transition-colors hover:bg-[#29203B] sm:p-6"
                >
                  <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-white/40">
                    <span>Case study / 0{index + 1}</span>
                    <FaArrowRight aria-hidden="true" className="text-[#E08A1E] transition-transform group-hover:translate-x-1" />
                  </div>
                  <h3 className="mt-9 text-2xl font-medium">{project.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-6 text-white/60">{project.description}</p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.stack.map((technology) => (
                      <span key={technology} className="border border-white/15 px-2 py-1 font-mono text-[10px] text-[#9D76AE]">
                        {technology}
                      </span>
                    ))}
                  </div>
                </ProjectLink>
              );
            })}
          </div>
        </section>

        <footer className="mt-16 flex flex-col gap-4 border-t border-white/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-lg text-sm text-white/60">Have a product in mind? Let’s connect the right pieces and build it.</p>
          <Link href="/#contact" className="inline-flex items-center gap-3 self-start text-sm font-medium text-[#E08A1E] transition hover:text-white sm:self-auto">
            Start a conversation <FaArrowRight aria-hidden="true" size={12} />
          </Link>
        </footer>
      </div>
    </main>
  );
}