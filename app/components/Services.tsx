import Image from "next/image";
import Link from "next/link";
import { services } from "../lib/content";
import QuoteButton from "./QuoteButton";

const iconPaths: Record<string, React.ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
      <path d="M9.5 21v-6h5v6" />
    </>
  ),
  lodge: (
    <>
      <path d="M12 3 2 20h20L12 3Z" />
      <path d="M12 8v12" />
      <path d="M8.5 14h7" />
    </>
  ),
  industrial: (
    <>
      <path d="M2 20h20" />
      <path d="M4 20V10l5 3.5V10l5 3.5V10l5 3.5V20" />
      <path d="M7 6V3h2v3" />
    </>
  ),
  education: (
    <>
      <path d="m22 10-10-5L2 10l10 5 10-5Z" />
      <path d="M6 12v5c0 1.1 2.7 2.5 6 2.5s6-1.4 6-2.5v-5" />
      <path d="M22 10v5.5" />
    </>
  ),
  pool: (
    <>
      <path d="M2 7c1.6 1.3 3.4 1.3 5 0s3.4-1.3 5 0 3.4 1.3 5 0 3.4-1.3 5 0" />
      <path d="M2 12c1.6 1.3 3.4 1.3 5 0s3.4-1.3 5 0 3.4 1.3 5 0 3.4-1.3 5 0" />
      <path d="M2 17c1.6 1.3 3.4 1.3 5 0s3.4-1.3 5 0 3.4 1.3 5 0 3.4-1.3 5 0" />
    </>
  ),
  interior: (
    <>
      <path d="M4 12V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v4" />
      <path d="M2 14a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v4H2v-4Z" />
      <path d="M6 18v2" />
      <path d="M18 18v2" />
    </>
  ),
  specialized: (
    <>
      <path d="M12 3 5 6v5c0 4.5 3 7.4 7 9 4-1.6 7-4.5 7-9V6l-7-3Z" />
      <path d="m9 12 2 2 4-4" />
    </>
  ),
};

function ServiceIcon({ name }: { name: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5"
      aria-hidden="true"
    >
      {iconPaths[name] ?? iconPaths.home}
    </svg>
  );
}

export default function Services() {
  return (
    <section id="services" className="bg-stone-950 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            What We Build
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Services across every sector
          </h2>
          <p className="mt-4 text-base text-white/60">
            One contractor, end to end — from foundation to final finish.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group flex flex-col overflow-hidden rounded-2xl bg-white/[0.04] ring-1 ring-white/10 transition-colors duration-300 hover:bg-white/[0.07] hover:ring-white/25"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/85 via-stone-950/15 to-transparent" />
                <span className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-lg bg-stone-950/60 text-white ring-1 ring-white/20 backdrop-blur-sm">
                  <ServiceIcon name={service.icon} />
                </span>
                <span className="absolute right-4 top-4 text-sm font-semibold tabular-nums text-white/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="absolute inset-x-0 bottom-0 px-5 pb-4 text-lg font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <p className="text-sm leading-relaxed text-white/60">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-white transition-colors group-hover:text-brand">
                  View sector
                  <span
                    aria-hidden="true"
                    className="transition-transform group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}

          {/* Closing CTA tile */}
          <QuoteButton className="group flex w-full flex-col justify-between rounded-2xl bg-white p-6 text-left text-stone-950 transition-colors duration-300 hover:bg-white/90 sm:p-7">
            <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-stone-950 text-white">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-6 w-6 transition-transform duration-300 group-hover:translate-x-0.5"
                aria-hidden="true"
              >
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </span>
            <div className="mt-6">
              <h3 className="text-xl font-bold">Have a project in mind?</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-950/70">
                Tell us your site and scope — we&apos;ll come back with a
                free, no-obligation quote.
              </p>
              <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold">
                Request a Quote
                <span aria-hidden="true">→</span>
              </span>
            </div>
          </QuoteButton>
        </div>
      </div>
    </section>
  );
}
