import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { site } from "@/lib/content";
import { SocialIcon } from "./icons";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Contact" light />

            <Reveal delay={140} className="mt-8">
              <address className="not-italic leading-relaxed text-paper/75">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </Reveal>

            <Reveal delay={200} className="mt-8 flex gap-3">
              {site.social.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-paper/80 transition-colors hover:border-red-light hover:text-red-light"
                >
                  <SocialIcon label={s.label} className="h-4 w-4" />
                </a>
              ))}
            </Reveal>
          </div>

          <Reveal delay={100}>
            <div className="rounded-md bg-paper p-7 sm:p-9">
              <h3 className="font-display text-xl font-semibold uppercase tracking-wide text-ink">
                Send a message
              </h3>
              <p className="mt-1.5 text-sm text-ink-soft">
                Questions, ideas, or want to volunteer? Kathleen would love to
                hear from you.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
