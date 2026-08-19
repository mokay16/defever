import type { Metadata } from "next";
import Priorities from "@/components/Priorities";

export const metadata: Metadata = {
  title: "Priorities",
};

export default function PrioritiesPage() {
  return <Priorities />;
}
