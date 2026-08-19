import type { Metadata } from "next";
import Journey from "@/components/Journey";

export const metadata: Metadata = {
  title: "Journey",
};

export default function JourneyPage() {
  return <Journey />;
}
