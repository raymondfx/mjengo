import Image from "next/image";
import { company, credentials } from "../lib/content";
import QuoteButton from "./QuoteButton";

function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5"
      aria-hidden="true"
    >
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.76-1.66-2.06-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.88 1.22 3.08.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.19 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.7.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.4 9.4 0 0 1-4.79-1.31l-.34-.2-3.56.93.95-3.47-.22-.36a9.38 9.38 0 0 1-1.44-5.01c0-5.18 4.22-9.4 9.41-9.4 2.51 0 4.87.98 6.64 2.76a9.35 9.35 0 0 1 2.75 6.65c-.01 5.18-4.22 9.4-9.4 9.4zM20.52 3.48A11.76 11.76 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.15 1.59 5.96L.06 24l6.3-1.65a11.85 11.85 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.9-11.9a11.8 11.8 0 0 0-3.43-8.42z" />
    </svg>
  );
}

export default function Hero() {
  const whatsappHref = `https://wa.me/${company.phones[0].tel.replace(
    /[^0-9]/g,
    "",
  )}?text=${encodeURIComponent(
    "Hello Anirudh Builders, I'd like to request a quote for a construction project.",
  )}`;

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
          <QuoteButton className="rounded-full border border-white/30 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur transition-colors hover:bg-white/15">
            Request a Quote
          </QuoteButton>
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#25D366] px-7 py-3.5 text-sm font-semibold text-[#0b3d24] shadow-lg shadow-black/20 transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
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
