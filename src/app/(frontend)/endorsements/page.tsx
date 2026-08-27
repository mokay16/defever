import type { Metadata } from "next";
import Endorsements from "@/components/Endorsements";

export const metadata: Metadata = {
  title: "Endorsements",
};

export default function EndorsementsPage() {
  return <Endorsements />;
}
