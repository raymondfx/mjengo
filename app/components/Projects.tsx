import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/content";

export default function Projects() {
  return (
    <section id="projects" className="bg-background py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
              Our Work
            </p>
            <h2 className="mt-3 text-3xl font-bold text-stone-950 sm:text-4xl">
              A portfolio built across Kenya
            </h2>
          </div>
          <p className="max-w-sm text-sm text-stone-950/60">
            A selection of completed and ongoing projects for private,
            hospitality, institutional and commercial clients.
          </p>
        </div>

        <div className="mt-16 space-y-16 sm:space-y-24 lg:space-y-28">
          {projects.map((project, index) => {
            const flip = index % 2 === 1;
            return (
              <div
                key={project.slug}
                className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-0"
              >
                {/* Image */}
                <Link
                  href={`/projects/${project.slug}`}
                  className={`group relative block overflow-hidden rounded-xl lg:col-span-8 lg:row-start-1 ${
                    flip ? "lg:col-start-5" : "lg:col-start-1"
                  }`}
                >
                  <div className="relative aspect-[4/3] w-full sm:aspect-[16/10]">
                    <Image
                      src={project.image}
                      alt={`${project.title}, ${project.location}`}
                      fill
                      sizes="(min-width: 1024px) 66vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-stone-950/0 transition-colors duration-500 group-hover:bg-stone-950/10" />
                  </div>
                  <span className="absolute bottom-4 right-4 flex h-11 w-11 translate-x-2 items-center justify-center rounded-full bg-white/85 text-stone-950 opacity-0 shadow-lg backdrop-blur-sm transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-5 w-5"
                      aria-hidden="true"
                    >
                      <path d="M7 17 17 7" />
                      <path d="M7 7h10v10" />
                    </svg>
                  </span>
                </Link>

                {/* Overlapping details card */}
                <div
                  className={`relative z-10 -mt-10 px-4 sm:-mt-16 sm:px-8 lg:col-span-5 lg:row-start-1 lg:-mt-0 lg:px-0 ${
                    flip
                      ? "lg:col-start-1 lg:justify-self-start"
                      : "lg:col-start-8 lg:justify-self-end"
                  }`}
                >
                  <div className="rounded-xl bg-background p-6 shadow-[0_24px_60px_-24px_rgba(13,13,12,0.45)] ring-1 ring-stone-950/10 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-600">
                      Project {String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-3 text-xl font-bold text-stone-950 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-stone-950/50">
                      {project.location}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-stone-950/70">
                      {project.description}
                    </p>
                    <Link
                      href={`/projects/${project.slug}`}
                      className="group mt-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-950 hover:text-clay-600"
                    >
                      View Project
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-stone-950 text-white transition-transform duration-300 group-hover:translate-x-1">
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        >
                          <path d="M5 12h14" />
                          <path d="m12 5 7 7-7 7" />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
