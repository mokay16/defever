import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import ContactForm from "./ContactForm";
import { InstagramIcon } from "./icons";
import { site } from "@/lib/content";

export default function Contact() {
  return (
    <section id="contact" className="bg-navy-deep py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Breadcrumbs label="Contact" path="/contact" light />
        <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
          <div>
            <SectionHeading eyebrow="Get in Touch" title="Contact" light headingLevel={1} />

            <Reveal delay={140} className="mt-8">
              <address className="not-italic leading-relaxed text-paper/75">
                {site.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex items-center gap-2.5 text-paper/75 transition-colors hover:text-red-light"
              >
                <InstagramIcon className="h-5 w-5" />
                @kathleen_defever
              </a>
            </Reveal>

            <Reveal delay={200} className="mt-10">
              <div className="relative aspect-[4/3] overflow-hidden rounded-md">
                <Image
                  src="/kathleen-barn-portrait.jpg"
                  alt="Portrait of Kathleen Defever outdoors in the sun"
                  fill
                  sizes="(min-width: 1024px) 420px, 100vw"
                  className="object-cover object-[45%_35%]"
                />
              </div>
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
