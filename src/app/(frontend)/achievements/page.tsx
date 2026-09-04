import type { Metadata } from "next";
import Achievements from "@/components/Achievements";

export const metadata: Metadata = {
  title: "Education & Qualifications",
  description:
    "Kathleen Defever's education, qualifications, and professional memberships.",
  alternates: { canonical: "/achievements" },
};

export default function AchievementsPage() {
  return <Achievements />;
}
