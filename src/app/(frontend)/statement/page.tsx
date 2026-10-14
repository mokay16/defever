import type { Metadata } from "next";
import Statement from "@/components/Statement";

export const metadata: Metadata = {
  title: "A Statement from Kathleen",
  description:
    "Kathleen Defever's candidate statement for Tiburon Town Council, in her own words: her record on the Planning Commission, her work for insurance consumers and wildfire victims, and why she's running.",
  alternates: { canonical: "/statement" },
};

export default function StatementPage() {
  return <Statement />;
}
