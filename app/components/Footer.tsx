import { company, navLinks } from "../lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center lg:flex-row lg:items-start lg:justify-between lg:text-left lg:px-8">
        <div>
          <p className="text-lg font-bold text-white">
            ANIRUDH BUILDERS <span className="text-clay-600">LTD</span>
          </p>
          <p className="mt-1 text-sm text-white/50">{company.tagline}</p>
          <p className="mt-3 text-xs text-white/40">
            {company.address} · {company.poBox}
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href={`mailto:${company.email}`}
            className="text-sm text-white/60 hover:text-white"
          >
            {company.email}
          </a>
        </nav>
      </div>

      <div className="mx-auto mt-8 max-w-6xl border-t border-white/10 px-5 pt-6 text-center text-xs text-white/30 lg:px-8">
        © {year} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
