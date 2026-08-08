import { company, navLinks } from "../lib/content";

function PinIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-5 w-5 shrink-0"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92Z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  const mapSrc =
    "https://www.google.com/maps?q=Parklands+Road,+Starehe,+Nairobi,+Kenya&output=embed";

  return (
    <footer className="border-t border-white/10 bg-stone-950 pt-14">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        <a
          href="/#top"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 hover:text-white"
        >
          Back to top
          <span aria-hidden="true">↑</span>
        </a>

        <div className="mt-8 grid grid-cols-1 gap-10 border-t border-white/10 pt-10 sm:grid-cols-2 lg:grid-cols-12 lg:gap-8">
          {/* Brand + description */}
          <div className="lg:col-span-4">
            <p className="text-lg font-bold text-white">
              ANIRUDH BUILDERS <span className="text-white/50">LTD</span>
            </p>
            <p className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-white/40">
              {company.tagline}
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/60">
              {company.description}
            </p>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
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

          {/* Contact */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Contact Us
            </p>
            <div className="mt-4 space-y-4">
              <div className="flex items-start gap-3 text-white/60">
                <span className="mt-0.5 text-white/40">
                  <PinIcon />
                </span>
                <span className="text-sm leading-relaxed">
                  {company.address}
                  <br />
                  {company.poBox}
                </span>
              </div>
              <div className="flex items-start gap-3 text-white/60">
                <span className="mt-0.5 text-white/40">
                  <MailIcon />
                </span>
                <span className="flex flex-col text-sm">
                  {company.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="hover:text-white"
                    >
                      {email}
                    </a>
                  ))}
                </span>
              </div>
              <div className="flex items-start gap-3 text-white/60">
                <span className="mt-0.5 text-white/40">
                  <PhoneIcon />
                </span>
                <span className="flex flex-col text-sm">
                  {company.phones.map((phone) => (
                    <a
                      key={phone.tel}
                      href={`tel:${phone.tel}`}
                      className="hover:text-white"
                    >
                      {phone.display}
                    </a>
                  ))}
                </span>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="lg:col-span-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-white/40">
              Find Us
            </p>
            <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-white/10">
              <iframe
                src={mapSrc}
                title="Anirudh Builders Ltd location, Nairobi"
                width="100%"
                height="180"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale"
              />
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
