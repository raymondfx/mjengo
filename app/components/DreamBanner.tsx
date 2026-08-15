import Image from "next/image";
import QuoteButton from "./QuoteButton";

export default function DreamBanner() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden">
      <Image
        src="/images/projects/Masai_Mara_Private_Conservancy_Exterior_Dusk_02.jpeg"
        alt="Completed safari lodge at dusk, built by Anirudh Builders Ltd"
        fill
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-stone-950/60" />

      <div className="relative mx-auto max-w-2xl px-5 py-24 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
          Your next project starts here.
        </h2>
        <p className="mt-4 text-base text-white/70 sm:text-lg">
          Step into a build where careful planning and lasting quality meet —
          from the first site visit to final handover.
        </p>
        <QuoteButton className="mt-8 inline-block rounded-full bg-white px-7 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-white/90">
          Request a Quote
        </QuoteButton>
      </div>
    </section>
  );
}
