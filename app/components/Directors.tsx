import { directors } from "../lib/content";

export default function Directors() {
  return (
    <section className="bg-background pb-20 sm:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 border-t border-stone-950/10 pt-14 sm:grid-cols-[auto_1fr] sm:items-baseline sm:gap-16">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-clay-600">
            Leadership
          </p>
          <div className="flex flex-wrap gap-x-12 gap-y-4">
            {directors.map((director) => (
              <div key={director.name}>
                <p className="text-lg font-semibold text-stone-950">
                  {director.name}
                </p>
                <p className="mt-1 text-sm text-stone-950/50">
                  {director.title}
                </p>
                {director.bio && (
                  <p className="mt-1 text-sm text-stone-950/50">
                    {director.bio}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
