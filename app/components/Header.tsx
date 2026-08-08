"use client";

import { useEffect, useState } from "react";
import { company, navLinks } from "../lib/content";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/95 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-background/80"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
        <a href="/#top" className="flex items-baseline gap-2">
          <span
            className={`text-lg font-bold tracking-tight sm:text-xl ${
              scrolled ? "text-stone-950" : "text-white"
            }`}
          >
            ANIRUDH BUILDERS
          </span>
          <span
            className={`text-xs font-medium tracking-widest ${
              scrolled ? "text-clay-600" : "text-white/70"
            }`}
          >
            LTD
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-stone-950/80 hover:text-clay-600"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="rounded-full bg-clay-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-clay-700"
          >
            Get a Quote
          </a>
        </div>

        <button
          type="button"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
          className={`flex h-9 w-9 flex-col items-center justify-center gap-1.5 md:hidden ${
            scrolled ? "text-stone-950" : "text-white"
          }`}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              open ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${
              open ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-background md:hidden">
          <nav className="flex flex-col gap-1 px-5 py-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-stone-950/80 hover:bg-black/5"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-clay-600 px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Get a Quote
            </a>
            <a
              href={`mailto:${company.emails[0]}`}
              className="mt-1 px-3 py-1 text-xs text-stone-950/60"
            >
              {company.emails[0]}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
