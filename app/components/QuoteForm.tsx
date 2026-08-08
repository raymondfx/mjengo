"use client";

import { useState } from "react";

// Web3Forms access keys are public by design (safe to expose client-side).
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "2fba6b99-dffe-459a-aefb-239eebab820b";

type Status = "idle" | "submitting" | "success" | "error";

export default function QuoteForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("submitting");
    setErrorMsg("");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { Accept: "application/json" },
        body: new FormData(form),
      });
      const data = await response.json();
      if (data.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
        setErrorMsg(
          data.message ||
            "Something went wrong sending your message. Please try again.",
        );
      }
    } catch {
      setStatus("error");
      setErrorMsg("Network error — please try again, or reach us on WhatsApp.");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none";

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-8 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366]/15 text-[#25D366]">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-7 w-7"
            aria-hidden="true"
          >
            <path d="m20 6-11 11-5-5" />
          </svg>
        </span>
        <h3 className="mt-5 text-xl font-bold text-white">
          Thank you — message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-white/60">
          We&apos;ve received your enquiry and will get back to you shortly. For
          anything urgent, reach us on WhatsApp.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value={ACCESS_KEY} />
      <input
        type="hidden"
        name="subject"
        value="New quote request from anirudhbuilders.co.ke"
      />
      <input type="hidden" name="from_name" value="Anirudh Builders Website" />
      {/* Honeypot spam trap — hidden from real users */}
      <input
        type="checkbox"
        name="botcheck"
        className="hidden"
        style={{ display: "none" }}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="sm:col-span-1">
          <label htmlFor="name" className="text-sm font-medium text-white/80">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className={inputClass}
            placeholder="Your name"
          />
        </div>
        <div className="sm:col-span-1">
          <label htmlFor="phone" className="text-sm font-medium text-white/80">
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            className={inputClass}
            placeholder="07xx xxx xxx"
          />
        </div>
        <div className="sm:col-span-2">
          <label htmlFor="email" className="text-sm font-medium text-white/80">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            className={inputClass}
            placeholder="you@example.com"
          />
        </div>
        <div className="sm:col-span-2">
          <label
            htmlFor="message"
            className="text-sm font-medium text-white/80"
          >
            Project details
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your site, location and scope of work"
          />
        </div>
      </div>

      {status === "error" && (
        <p className="mt-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {errorMsg}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="mt-6 w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-white/90 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>
      <p className="mt-3 text-center text-xs text-white/40">
        We&apos;ll only use your details to respond to this enquiry.
      </p>
    </form>
  );
}
