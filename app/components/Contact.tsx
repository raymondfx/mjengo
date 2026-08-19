import { company } from "../lib/content";
import QuoteForm from "./QuoteForm";
import WhatsAppIcon from "./icons/WhatsAppIcon";

export default function Contact() {
  const phoneDigits = company.phones[0].tel.replace(/[^0-9]/g, "");
  const whatsappHref = `https://wa.me/${phoneDigits}?text=${encodeURIComponent(
    "Hello Anirudh Builders, I'd like to request a quote for a construction project.",
  )}`;

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
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
