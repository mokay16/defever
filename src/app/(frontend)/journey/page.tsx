import type { Metadata } from "next";
import Journey from "@/components/Journey";

export const metadata: Metadata = {
  title: "Journey",
  description:
    "A timeline of Kathleen Defever's public service in Tiburon, from her 2018 appointment to the Planning Commission through her 2026 campaign for Town Council.",
  alternates: { canonical: "/journey" },
};

export default function JourneyPage() {
  return <Journey />;
}
