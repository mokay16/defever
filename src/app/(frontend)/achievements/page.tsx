import type { Metadata } from "next";
import Achievements from "@/components/Achievements";

export const metadata: Metadata = {
  title: "Education & Qualifications",
};

export default function AchievementsPage() {
  return <Achievements />;
}
