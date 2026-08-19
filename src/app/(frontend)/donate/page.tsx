import type { Metadata } from "next";
import Donate from "@/components/Donate";

export const metadata: Metadata = {
  title: "Donate",
};

export default function DonatePage() {
  return <Donate />;
}
