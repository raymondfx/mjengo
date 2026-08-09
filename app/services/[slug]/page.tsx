import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import QuoteButton from "../../components/QuoteButton";
import { services, company } from "../../lib/content";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.title} | ${company.name}`,
    description: service.description,
  };
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const index = services.findIndex((s) => s.slug === slug);
  if (index === -1) notFound();

  const service = services[index];
  const nextService = services[(index + 1) % services.length];
  const galleryImages = service.images.slice(1);

  return (
    <>
      <Header />
      <main>
        <section className="relative flex min-h-[60vh] items-end">
          <div className="absolute inset-0">
            <Image
              src={service.images[0]}
              alt={service.title}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-stone-950/10" />
          </div>

          <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-40 lg:px-8">
            <Link
              href="/#services"
              className="text-sm font-medium text-white/70 hover:text-white"
            >
              ← All Services
            </Link>
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
              What We Build
            </p>
            <h1 className="mt-3 max-w-2xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              {service.title}
            </h1>
          </div>
        </section>

        <section className="bg-background py-16 sm:py-20">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <p className="text-lg leading-relaxed text-stone-950/70">
              {service.detail}
            </p>
            <QuoteButton className="mt-8 inline-block rounded-full bg-clay-600 px-7 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-clay-700">
              Request a Quote
            </QuoteButton>
          </div>

          {galleryImages.length > 0 && (
            <div className="mx-auto mt-16 max-w-6xl px-5 lg:px-8">
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                {galleryImages.map((image, i) => {
                  const isLastOdd =
                    galleryImages.length % 2 === 1 &&
                    i === galleryImages.length - 1;
                  return (
                    <div
                      key={image}
                      className={`relative aspect-[4/3] w-full overflow-hidden rounded-xl ${
                        isLastOdd ? "sm:col-span-2 sm:aspect-[16/7]" : ""
                      }`}
                    >
                      <Image
                        src={image}
                        alt={service.title}
                        fill
                        sizes={
                          isLastOdd
                            ? "100vw"
                            : "(min-width: 640px) 50vw, 100vw"
                        }
                        className="object-cover"
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </section>

        <Link
          href={`/services/${nextService.slug}`}
          className="group block border-t border-stone-950/10 bg-background py-14"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between px-5 lg:px-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay-600">
                Next Service
              </p>
              <p className="mt-2 text-2xl font-bold text-stone-950 transition-colors group-hover:text-clay-600">
                {nextService.title}
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
