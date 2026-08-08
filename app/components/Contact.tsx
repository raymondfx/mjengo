"use client";

import { useState } from "react";
import { company } from "../lib/content";

// Web3Forms access keys are public by design (safe to expose client-side).
// Env var wins when set; the hardcoded fallback keeps the form working in any
// deployment even if the env var isn't configured at build time.
const ACCESS_KEY =
  process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ||
  "2fba6b99-dffe-459a-aefb-239eebab820b";

type Status = "idle" | "submitting" | "success" | "error";

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

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const phoneDigits = company.phones[0].tel.replace(/[^0-9]/g, "");
  const whatsappHref = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    "Hello Anirudh Builders, I'd like to request a quote for a construction project.",
  )}`;

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
      setErrorMsg(
        "Network error — please try again, or reach us on WhatsApp.",
      );
    }
  }

  const inputClass =
    "mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none";

  return (
    <section id="contact" className="bg-stone-950 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-5 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white/50">
            Get In Touch
          </p>
          <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
            Start your project with us
          </h2>
          <p className="mt-4 max-w-md text-base text-white/60">
            Tell us about your site and scope of work. We&apos;ll follow up to
            discuss next steps — or message us on WhatsApp for a quick reply.
          </p>

          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#0b3d24] transition-opacity hover:opacity-90"
          >
            <WhatsAppIcon />
            Chat on WhatsApp
          </a>

          <dl className="mt-10 space-y-6">
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Phone
              </dt>
              <dd className="mt-1 flex flex-wrap gap-x-4 gap-y-1">
                {company.phones.map((phone) => (
                  <a
                    key={phone.tel}
                    href={`tel:${phone.tel}`}
                    className="text-base font-medium text-white hover:text-white/70"
                  >
                    {phone.display}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Email
              </dt>
              <dd className="mt-1 flex flex-col gap-1">
                {company.emails.map((email) => (
                  <a
                    key={email}
                    href={`mailto:${email}`}
                    className="text-base font-medium text-white hover:text-white/70"
                  >
                    {email}
                  </a>
                ))}
              </dd>
            </div>
            <div>
              <dt className="text-xs font-semibold uppercase tracking-wider text-white/40">
                Location
              </dt>
              <dd className="mt-1 text-base font-medium text-white">
                {company.address}
              </dd>
            </div>
          </dl>
        </div>

        <div className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8">
          {status === "success" ? (
            <div className="flex h-full flex-col items-center justify-center py-10 text-center">
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
                We&apos;ve received your enquiry and will get back to you
                shortly. For anything urgent, reach us on WhatsApp.
              </p>
              <button
                type="button"
                onClick={() => setStatus("idle")}
                className="mt-6 rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} noValidate={false}>
              {/* Web3Forms config */}
              <input type="hidden" name="access_key" value={ACCESS_KEY} />
              <input
                type="hidden"
                name="subject"
                value="New quote request from anirudhbuilders.co.ke"
              />
              <input
                type="hidden"
                name="from_name"
                value="Anirudh Builders Website"
              />
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
                  <label
                    htmlFor="name"
                    className="text-sm font-medium text-white/80"
                  >
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
                  <label
                    htmlFor="phone"
                    className="text-sm font-medium text-white/80"
                  >
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
                  <label
                    htmlFor="email"
                    className="text-sm font-medium text-white/80"
                  >
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
          )}
        </div>
      </div>
    </section>
  );
}
