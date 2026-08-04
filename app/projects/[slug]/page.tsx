import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import { projects, company } from "../../lib/content";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.title} | ${company.name}`,
    description: `${project.title}, ${project.location} — ${project.description}`,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const project = projects[index];
  const nextProject = projects[(index + 1) % projects.length];
  const galleryImages = project.images.slice(1);

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[65vh] items-end">
          <div className="absolute inset-0">
            <Image
              src={project.images[0]}
              alt={`${project.title}, ${project.location}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/10" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-40 lg:px-8">
            <Link
              href="/#projects"
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              ← All Projects
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              {project.location}
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {project.title}
            </h1>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <p className="text-lg leading-relaxed text-stone-950/70">
              {project.detail}
            </p>
            <a
              href="/#contact"
              className="mt-8 inline-block rounded-full bg-clay-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-clay-700"
            >
              Request a Quote
            </a>
          </div>

          {galleryImages.length > 0 && (
            <div className="mx-auto mt-16 max-w-6xl px-5 lg:px-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {galleryImages.map((image) => (
                  <div
                    key={image}
                    className="relative aspect-[4/3] w-full overflow-hidden rounded-xl"
                  >
                    <Image
                      src={image}
                      alt={project.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        <Link
          href={`/projects/${nextProject.slug}`}
          className="group block border-t border-stone-950/10 bg-background py-14"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-600">
                Next Project
              </p>
              <p className="mt-2 text-2xl font-bold text-stone-950 transition-colors group-hover:text-clay-600">
                {nextProject.title}
              </p>
            </div>
            <span className="text-2xl text-stone-950/40 transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>
        </Link>
      </main>
      <Footer />
    </>
  );
}
