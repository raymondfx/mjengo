import Image from "next/image";
import { categories } from "../lib/content";

export default function Categories() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
          Explore
        </p>
        <h2 className="mt-3 max-w-lg text-2xl font-bold text-stone-950 sm:text-3xl">
          Discover the sectors we build across
        </h2>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.title}
              href="#services"
              className="group relative aspect-[3/4] overflow-hidden rounded-xl"
            >
              <Image
                src={category.image}
                alt={category.title}
                fill
                sizes="(min-width: 1024px) 25vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/10 to-transparent" />
              <span className="absolute inset-x-0 bottom-0 p-4 text-sm font-semibold text-white">
                {category.title}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
