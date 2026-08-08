import { company, navLinks } from "../lib/content";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-stone-950 border-t border-white/10 pt-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <a
          href="/#top"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white"
        >
          Back to top
          <span aria-hidden="true">↑</span>
        </a>

        <div className="mt-8 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-3">
          <div>
            <p className="text-lg font-bold text-white">
              ANIRUDH BUILDERS <span className="text-white/50">LTD</span>
            </p>
            <p className="mt-2 text-sm text-white/50">{company.tagline}</p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Quick Links
            </p>
            <nav className="mt-4 flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Get In Touch
            </p>
            <div className="mt-4 flex flex-col gap-2">
              {company.phones.map((phone) => (
                <a
                  key={phone.tel}
                  href={`tel:${phone.tel}`}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {phone.display}
                </a>
              ))}
              {company.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="text-sm text-white/60 hover:text-white"
                >
                  {email}
                </a>
              ))}
              <p className="text-sm text-white/60">
                {company.address}
                <br />
                {company.poBox}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-10 max-w-6xl border-t border-white/10 px-5 py-6 text-center text-xs text-white/30 lg:px-8">
        © {year} {company.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
