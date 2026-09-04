import type { Metadata } from "next";
import Endorsements from "@/components/Endorsements";

export const metadata: Metadata = {
  title: "Endorsements",
  description:
    "See who's endorsing Kathleen Defever for Tiburon Town Council, including local elected officials and civic leaders.",
  alternates: { canonical: "/endorsements" },
};

export default function EndorsementsPage() {
  return <Endorsements standalone />;
}
