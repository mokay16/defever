import Image from "next/image";
import Script from "next/script";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/content";

// Set once Kathleen's campaign creates an embeddable form in ActBlue
// (Dashboard -> Create form -> Embed form -> Embed Generator tab). Both
// values come from the generated embed code: the <script src="..."> and
// the token in <div data-ab-form="...">. No payment data ever touches
// this site or its database either way -- the form itself lives in
// ActBlue's iframe and submits directly to them.
const scriptUrl = process.env.NEXT_PUBLIC_ACTBLUE_SCRIPT_URL;
const formToken = process.env.NEXT_PUBLIC_ACTBLUE_FORM_TOKEN;

export default function Donate() {
  return (
    <section id="donate" className="bg-paper py-24 lg:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <Breadcrumbs label="Donate" path="/donate" />
        <SectionHeading
          eyebrow="Support the Campaign"
          title="Chip in for Tiburon"
          description="Every contribution goes directly toward reaching Tiburon voters before the election — no amount is too small."
          headingLevel={1}
        />

        <div className="mt-14 grid items-start gap-10 lg:grid-cols-[20rem_1fr] lg:gap-16">
          <Reveal delay={80}>
            <div className="relative mx-auto aspect-[2/3] max-w-xs overflow-hidden rounded-md shadow-sm lg:max-w-none">
              <Image
                src="/kathleen-boots-portrait.jpg"
                alt="Kathleen Defever standing on a tree stump in the woods, wearing her fire boots"
                fill
                sizes="320px"
                className="object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mx-auto max-w-xl rounded-md bg-navy-deep p-8 text-center sm:p-10 lg:mx-0">
              {scriptUrl && formToken ? (
                <>
                  <Script src={scriptUrl} strategy="lazyOnload" />
                  <div data-ab-form={formToken} />
                </>
              ) : (
                <>
                  <p className="font-display text-xl font-semibold uppercase tracking-wide text-white">
                    Online Donations Launching Soon
                  </p>
                  <p className="mt-3 leading-relaxed text-paper/70">
                    Secure donation processing is being set up. Check back
                    shortly, or use the contact form below to ask about other
                    ways to contribute.
                  </p>
                </>
              )}
            </div>

            <p className="mx-auto mt-6 max-w-xl text-center text-xs leading-relaxed text-ink-soft/70 lg:mx-0">
              Contributions are not tax-deductible. Paid for by{" "}
              {site.candidateName} for {site.office} {site.electionYear}.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
