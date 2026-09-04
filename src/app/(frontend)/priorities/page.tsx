import type { Metadata } from "next";
import Priorities from "@/components/Priorities";

export const metadata: Metadata = {
  title: "Priorities",
  description:
    "Kathleen Defever's platform for Tiburon Town Council: traffic on Tiburon Boulevard, fiscal management, housing, senior services, fire prevention, and open space.",
  alternates: { canonical: "/priorities" },
};

export default function PrioritiesPage() {
  return <Priorities />;
}
