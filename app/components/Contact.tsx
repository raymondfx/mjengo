"use client";

import { useState } from "react";
import { company } from "../lib/content";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const mailtoHref = (() => {
    const subject = `Quote request from ${name || "website visitor"}`;
    const bodyLines = [
      message || "I'd like to request a quote.",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
    ].filter(Boolean);
    const params = new URLSearchParams({
      subject,
      body: bodyLines.join("\n"),
    });
    return `mailto:${company.emails[0]}?${params.toString()}`;
  })();

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
            Tell us about your site and scope of work. We&apos;ll follow up
            by email to discuss next steps.
          </p>

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

        <form
          action={mailtoHref}
          method="get"
          onSubmit={() => {
            window.location.href = mailtoHref;
          }}
          className="rounded-xl bg-white/5 p-6 ring-1 ring-white/10 sm:p-8"
        >
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="sm:col-span-1">
              <label htmlFor="name" className="text-sm font-medium text-white/80">
                Name
              </label>
              <input
                id="name"
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                placeholder="Your name"
              />
            </div>
            <div className="sm:col-span-1">
              <label htmlFor="phone" className="text-sm font-medium text-white/80">
                Phone
              </label>
              <input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                placeholder="07xx xxx xxx"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="text-sm font-medium text-white/80">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-2 w-full rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                placeholder="you@example.com"
              />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="text-sm font-medium text-white/80">
                Project details
              </label>
              <textarea
                id="message"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-2 w-full resize-none rounded-lg border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-white/40 focus:outline-none"
                placeholder="Tell us about your site, location and scope of work"
              />
            </div>
          </div>

          <button
            type="submit"
            className="mt-6 w-full rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-stone-950 transition-colors hover:bg-white/90"
          >
            Send Enquiry
          </button>
          <p className="mt-3 text-center text-xs text-white/40">
            Opens your email app addressed to {company.emails[0]}
          </p>
        </form>
      </div>
    </section>
  );
}
