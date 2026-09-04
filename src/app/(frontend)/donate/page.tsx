import type { Metadata } from "next";
import Donate from "@/components/Donate";

export const metadata: Metadata = {
  title: "Donate",
  description:
    "Support Kathleen Defever's campaign for Tiburon Town Council with a secure, one-time contribution.",
  alternates: { canonical: "/donate" },
};

export default function DonatePage() {
  return <Donate />;
}
