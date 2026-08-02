import Image from "next/image";
import { company } from "../lib/content";

export default function About() {
  return (
    <section id="about" className="bg-background py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl lg:aspect-auto">
          <Image
            src="/images/about-cover.jpg"
            alt="A completed residence built by Anirudh Builders Ltd"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>

        <div className="flex flex-col justify-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
            About Us
          </p>
          <h2 className="mt-3 text-3xl font-bold text-stone-950 sm:text-4xl">
            {company.legalName}
          </h2>
          <p className="mt-5 text-base leading-relaxed text-stone-950/70">
            {company.name} is an NCA2-registered building works contractor
            based in Nairobi. Our portfolio spans private residences,
            apartment developments, safari lodges, schools and industrial
            facilities — built for clients who need work done right the
            first time.
          </p>
          <p className="mt-4 text-base leading-relaxed text-stone-950/70">
            From godowns in Lukenya to lodge cottages overlooking Lake
            Nakuru and a private conservancy deep in the Maasai Mara, our
            teams manage every stage of a build — structural work,
            finishes, landscaping and pools — with the same tagline we hold
            ourselves to: {company.tagline}.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-6 border-t border-stone-950/10 pt-8">
            <div>
              <p className="text-2xl font-bold text-stone-950">NCA2</p>
              <p className="mt-1 text-sm text-stone-950/60">
                Registered Contractor
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-950">KRA</p>
              <p className="mt-1 text-sm text-stone-950/60">
                Tax Compliant
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-950">6</p>
              <p className="mt-1 text-sm text-stone-950/60">
                Sectors Served
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold text-stone-950">Nairobi</p>
              <p className="mt-1 text-sm text-stone-950/60">
                &amp; across Kenya
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
