import Image from "next/image";
import Link from "next/link";
import { projects } from "../lib/content";

export default function Projects() {
  const [feature, ...rest] = projects;

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

        <Link
          href={`/projects/${feature.slug}`}
          className="group relative mt-12 block aspect-[16/9] w-full overflow-hidden rounded-xl sm:aspect-[21/9]"
        >
          <Image
            src={feature.image}
            alt={`${feature.title}, ${feature.location}`}
            fill
            sizes="100vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/20 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              Featured Project
            </p>
            <h3 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              {feature.title}
            </h3>
            <p className="mt-1 text-sm text-white/70">
              {feature.location} — {feature.description}
            </p>
          </div>
        </Link>

        <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group relative overflow-hidden rounded-xl"
            >
              <div className="relative aspect-[4/3] w-full">
                <Image
                  src={project.image}
                  alt={`${project.title}, ${project.location}`}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/10 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="text-base font-semibold text-white">
                  {project.title}
                </h3>
                <p className="mt-1 text-xs text-white/70">
                  {project.location}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
