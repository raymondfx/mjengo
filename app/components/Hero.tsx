import Image from "next/image";
import { credentials } from "../lib/content";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/projects/Rosslyn_Project_01.jpeg"
          alt="Contemporary stone-and-glass private residence built by Anirudh Builders Ltd, Rosslyn, Nairobi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        {/* Bottom scrim — anchors the headline, CTAs and credentials */}
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/55 to-stone-950/5" />
        {/* Left scrim — keeps the text side readable, lets the house show on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/85 via-stone-950/25 to-transparent" />
        {/* Top scrim — keeps the header legible over the sky */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-stone-950/60 to-transparent" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl px-5 pb-14 pt-40 sm:pb-16 lg:px-8 lg:pb-20">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/70">
          Building Works Contractor · Nairobi, Kenya
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-[1.1] text-white drop-shadow-sm sm:text-5xl lg:text-6xl">
          Construction built on Quality, Reliability &amp; Durability.
        </h1>
        <p className="mt-5 max-w-xl text-base text-white/80 sm:text-lg">
          From industrial plants and safari lodges to schools and private
          homes, Anirudh Builders Ltd delivers turnkey construction across
          Kenya — structural works through to the final finish.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-stone-950 shadow-lg shadow-black/20 transition-colors hover:bg-white/90"
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
