import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/content";

// The campaign's ActBlue contribution page, e.g.
// https://secure.actblue.com/donate/<page-name>. ActBlue's in-page embeds
// are only offered to federal campaigns and nonprofits, so a local race
// links out to its hosted page instead. Donors pay on ActBlue -- no payment
// data ever touches this site. Unset -> "launching soon" placeholder.
const actBlueUrl = process.env.NEXT_PUBLIC_ACTBLUE_URL;

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
              {actBlueUrl ? (
                <>
                  <p className="font-display text-2xl font-semibold uppercase tracking-wide text-white">
                    Support Kathleen&apos;s Campaign
                  </p>
                  <p className="mt-3 leading-relaxed text-paper/70">
                    Contributions are processed securely by ActBlue.
                  </p>
                  <a
                    href={actBlueUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-block w-full rounded-sm bg-red px-8 py-4 text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-light sm:w-auto"
                  >
                    Donate on ActBlue
                  </a>
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
