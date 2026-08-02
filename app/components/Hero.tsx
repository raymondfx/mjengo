import Image from "next/image";
import { credentials } from "../lib/content";

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-screen items-end">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-rosslyn.jpg"
          alt="Private residence and pool built by Anirudh Builders Ltd, Rosslyn, Nairobi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-stone-950/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-16 pt-40 sm:pb-20 lg:px-8 lg:pb-24">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
          NCA2 Registered Building Works Contractor
        </p>
        <h1 className="mt-4 max-w-2xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
          Construction built on Quality, Reliability &amp; Durability.
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
          Anirudh Builders Ltd delivers homes, safari lodges, schools and
          industrial facilities across Kenya — from Nairobi to the Maasai
          Mara.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-clay-600 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-clay-600/20 transition-colors hover:bg-clay-700"
          >
            View Our Projects
          </a>
          <a
            href="#contact"
            className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15"
          >
            Request a Quote
          </a>
        </div>

        <dl className="mt-14 grid grid-cols-2 gap-x-6 gap-y-6 border-t border-white/15 pt-8 sm:grid-cols-4">
          {credentials.map((c) => (
            <div key={c.label}>
              <dt className="text-sm font-semibold text-white">{c.label}</dt>
              <dd className="mt-1 text-xs text-white/60">{c.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
