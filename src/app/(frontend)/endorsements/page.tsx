import type { Metadata } from "next";
import EndorsementForm from "@/components/EndorsementForm";
import Endorsements from "@/components/Endorsements";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Endorsements",
  description:
    "See who's endorsing Kathleen Defever for Tiburon Town Council, including local elected officials and civic leaders, and add your own endorsement.",
  alternates: { canonical: "/endorsements" },
};

export default function EndorsementsPage() {
  return (
    <>
      <Endorsements standalone />

      <section id="endorse" className="scroll-mt-24 bg-navy-deep py-24 lg:py-32">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid gap-14 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            <SectionHeading
              eyebrow="Join Them"
              title="Add Your Endorsement"
              description="Stand with Kathleen for Tiburon Town Council. Share a few words about why you're supporting her, and let us know how you'd like to help."
              light
            />

            <Reveal delay={100}>
              <div className="rounded-md bg-paper p-7 sm:p-9">
                <EndorsementForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
