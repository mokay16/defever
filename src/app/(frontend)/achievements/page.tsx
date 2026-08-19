import type { Metadata } from "next";
import Achievements from "@/components/Achievements";

export const metadata: Metadata = {
  title: "Achievements",
};

export default function AchievementsPage() {
  return <Achievements />;
}
