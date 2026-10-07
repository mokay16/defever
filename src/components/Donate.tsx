import Image from "next/image";
import Breadcrumbs from "./Breadcrumbs";
import DonateForm from "./DonateForm";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/content";

// ActBlue can't be shown inside this page: its in-page embeds are only
// offered to federal campaigns and nonprofits, and the hosted form sends
// `frame-ancestors 'none'`, so an iframe is blocked too. DonateForm mirrors
// the ActBlue form's look for choosing an amount, then opens the real form
// in a pop-up over this page. Donors pay on ActBlue -- no payment data
// touches this site.
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
          {/* On phones the form comes first; the photo follows. */}
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
            <div className="mx-auto max-w-xl lg:mx-0">
              <DonateForm />
              <p className="mt-6 text-center text-xs leading-relaxed text-ink-soft/70">
                Contributions are not tax-deductible. Paid for by{" "}
                {site.candidateName} for {site.office} {site.electionYear}.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
