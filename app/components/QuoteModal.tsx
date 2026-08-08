"use client";

import { useEffect, useState } from "react";
import { OPEN_QUOTE_EVENT } from "../lib/quote";
import QuoteForm from "./QuoteForm";

export default function QuoteModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const openHandler = () => setOpen(true);
    window.addEventListener(OPEN_QUOTE_EVENT, openHandler);
    return () => window.removeEventListener(OPEN_QUOTE_EVENT, openHandler);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label="Request a quote"
    >
      <div
        className="absolute inset-0 bg-stone-950/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      <div className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-stone-950 p-6 shadow-2xl ring-1 ring-white/15 sm:p-8">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Get In Touch
            </p>
            <h2 className="mt-1 text-xl font-bold text-white">
              Request a Quote
            </h2>
          </div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="-mr-2 -mt-2 flex h-10 w-10 items-center justify-center rounded-full text-white/60 transition-colors hover:bg-white/10 hover:text-white"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-5 w-5"
              aria-hidden="true"
            >
              <path d="M18 6 6 18" />
              <path d="m6 6 12 12" />
            </svg>
          </button>
        </div>

        <div className="mt-5">
          <QuoteForm />
        </div>
      </div>
    </div>
  );
}
