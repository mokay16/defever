import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import Reveal from "./Reveal";
import ActBlueLink from "./ActBlueLink";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/content";

// ActBlue can't be shown inside this page: its in-page embeds are only
// offered to federal campaigns and nonprofits, and the hosted form sends
// `frame-ancestors 'none'`, so an iframe is blocked too. Instead, each
// amount opens the campaign's ActBlue form in a pop-up over this page
// (ActBlueLink) with that amount pre-selected (`amount`), tagged
// `refcode=website` so ActBlue reports which donations came from the site.
// Donors pay on ActBlue -- no payment data touches us.

// Mirrors the first amounts on the ActBlue form itself, so each button
// lands on a matching pre-selected option there.
const AMOUNTS = [50, 100, 300, 500, 1000];

function actBlueLink(amount?: number) {
  const url = new URL(site.actBlueUrl);
  url.searchParams.set("refcode", "website");
  if (amount) url.searchParams.set("amount", String(amount));
  return url.toString();
}


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
          {/* On phones the amounts come first; the photo follows. */}
          <Reveal delay={80} className="order-last lg:order-none">
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
            <div className="mx-auto max-w-xl rounded-md bg-navy-deep p-8 sm:p-10 lg:mx-0">
              <p className="font-display text-2xl font-semibold uppercase tracking-wide text-white">
                Choose an amount
              </p>
              <p className="mt-2 leading-relaxed text-paper/70">
                A secure ActBlue window will open right here to complete
                your contribution.
              </p>

              <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {AMOUNTS.map((amount) => (
                  <ActBlueLink
                    key={amount}
                    href={actBlueLink(amount)}
                    className="rounded-sm border border-white/20 bg-white/5 px-4 py-4 text-center font-display text-2xl font-semibold text-white transition-colors hover:border-red hover:bg-red"
                  >
                    ${amount.toLocaleString("en-US")}
                  </ActBlueLink>
                ))}
                <ActBlueLink
                  href={actBlueLink()}
                  className="flex items-center justify-center rounded-sm border border-white/20 bg-white/5 px-4 py-4 text-center text-sm font-semibold uppercase tracking-wide text-white transition-colors hover:border-red hover:bg-red"
                >
                  Other amount
                </ActBlueLink>
              </div>

              <ActBlueLink
                href={actBlueLink()}
                className="mt-6 block w-full rounded-sm bg-red px-8 py-4 text-center text-base font-semibold uppercase tracking-wide text-white transition-colors hover:bg-red-light"
              >
                Donate on ActBlue
              </ActBlueLink>
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
