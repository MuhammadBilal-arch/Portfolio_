import Link from "next/link";

export const dynamic = "force-dynamic";

async function getGenomeSummary(projects) {
  try {
    const response = await fetch("http://localhost:3000/api/genome", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ projects }),
    });

    const data = await response.json();
    return data.summary || "This portfolio reflects a builder with a strong mix of launch readiness, visual storytelling, and cross-functional execution.";
  } catch (error) {
    console.error("Genome summary failed:", error);
    return "This portfolio reflects a builder with a strong mix of launch readiness, visual storytelling, and cross-functional execution.";
  }
}

export const metadata = {
  title: "Genome DNA | Muhammad Bilal",
  description: "A dedicated genome DNA experience page for Muhammad Bilal's portfolio.",
};

export default async function GenomeDnaPage() {
  const projects = [
    { title: "Qcast", description: "AI-powered video engagement platform", tech_stack: "React, Next.js, Firebase", type: "Full Stack", link: "https://qcast.io/" },
    { title: "Alien Fitness", description: "Fitness brand experience", tech_stack: "React, Tailwind", type: "Web App" },
    { title: "Ganjago", description: "Marketplace experience", tech_stack: "Next.js, Prisma", type: "Web App" },
  ];
  const summary = await getGenomeSummary(projects);

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-standard to-gray-lightmedium text-white">
      <main className="mx-auto flex min-h-screen max-w-6xl flex-col px-6 py-12 sm:px-10 lg:px-16">
        <div className="mb-8 flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold text-orange-primary hover:text-white">
            ← Back to Portfolio
          </Link>
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs uppercase tracking-[0.3em] text-gray-200">
            Genome DNA
          </span>
        </div>

        <section className="grid gap-8 rounded-3xl border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-sm lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-orange-primary">
              Interactive Profile
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
              Genome DNA
            </h1>
            <p className="text-base leading-8 text-gray-200 sm:text-lg">
              {summary}
            </p>

            <div className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-300">Projects analyzed</p>
                <p className="mt-2 text-3xl font-semibold text-white">Live data</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                <p className="text-xs uppercase tracking-[0.25em] text-gray-300">Live launch paths</p>
                <p className="mt-2 text-3xl font-semibold text-white">Ready</p>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
              <p className="mb-3 text-sm font-semibold text-white">Core strengths</p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-orange-primary/40 bg-orange-primary/10 px-3 py-1 text-xs text-orange-primary">Launch-ready delivery</span>
                <span className="rounded-full border border-orange-primary/40 bg-orange-primary/10 px-3 py-1 text-xs text-orange-primary">Visual storytelling</span>
                <span className="rounded-full border border-orange-primary/40 bg-orange-primary/10 px-3 py-1 text-xs text-orange-primary">Cross-domain thinking</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href="/projects-list" className="rounded-full bg-purple-primary px-5 py-3 text-sm font-semibold text-white hover:bg-orange-primary">
                Explore Projects
              </Link>
              <Link href="/contact" className="rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white hover:border-orange-primary hover:text-orange-primary">
                Contact Me
              </Link>
            </div>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-xl font-semibold">DNA Signals</h2>
                <span className="text-xs uppercase tracking-[0.25em] text-gray-300">Live</span>
              </div>
              <div className="mb-4 rounded-2xl border border-white/10 bg-gradient-to-br from-purple-500/20 to-orange-500/10 p-4">
                <div className="relative mx-auto flex h-40 w-40 items-center justify-center">
                  <div className="absolute h-28 w-28 rounded-full border border-orange-primary/40 bg-orange-primary/10 blur-2xl animate-pulse" />
                  <div className="absolute left-4 top-5 h-12 w-12 rounded-full border border-white/20 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-pulse" />
                  <div className="absolute right-4 top-5 h-12 w-12 rounded-full border border-white/20 bg-white/10 shadow-[0_0_20px_rgba(255,255,255,0.15)] animate-pulse" />
                  <div className="absolute bottom-6 left-8 h-10 w-10 rounded-full border border-white/20 bg-white/10 shadow-[0_0_16px_rgba(255,255,255,0.12)] animate-pulse" />
                  <div className="absolute bottom-6 right-8 h-10 w-10 rounded-full border border-white/20 bg-white/10 shadow-[0_0_16px_rgba(255,255,255,0.12)] animate-pulse" />
                  <div className="absolute h-24 w-24 rounded-[2rem] border border-white/20" />
                  <div className="absolute h-20 w-20 rounded-[1.5rem] border border-purple-primary/30" />
                  <div className="absolute h-16 w-16 rounded-full border border-orange-primary/30" />
                  <div className="absolute h-2 w-16 rounded-full bg-gradient-to-r from-purple-primary to-orange-primary" style={{ transform: "rotate(-20deg) translateX(10px)" }} />
                  <div className="absolute h-2 w-16 rounded-full bg-gradient-to-r from-purple-primary to-orange-primary" style={{ transform: "rotate(20deg) translateX(-10px)" }} />
                </div>
                <p className="mt-3 text-center text-xs uppercase tracking-[0.25em] text-gray-300">Neural Map</p>
              </div>
              <div className="space-y-3">
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-gray-300">
                    <span>Projects</span>
                    <span>100%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-purple-primary to-orange-primary" style={{ width: "100%" }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-gray-300">
                    <span>Launches</span>
                    <span>80%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-purple-primary to-orange-primary" style={{ width: "80%" }} />
                  </div>
                </div>
                <div>
                  <div className="mb-1 flex items-center justify-between text-xs text-gray-300">
                    <span>Visuals</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 rounded-full bg-white/10">
                    <div className="h-2 rounded-full bg-gradient-to-r from-purple-primary to-orange-primary" style={{ width: "75%" }} />
                  </div>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-3 text-xl font-semibold">Signature Stack</h2>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-200">Next.js</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-200">React</span>
                <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-gray-200">Firebase</span>
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 bg-black/20 p-5">
              <h2 className="mb-3 text-xl font-semibold">Project Types</h2>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-purple-primary/30 bg-purple-primary/10 px-3 py-1 text-xs text-purple-100">Full Stack</span>
                <span className="rounded-full border border-purple-primary/30 bg-purple-primary/10 px-3 py-1 text-xs text-purple-100">Web Apps</span>
                <span className="rounded-full border border-purple-primary/30 bg-purple-primary/10 px-3 py-1 text-xs text-purple-100">Product Design</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
