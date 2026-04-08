import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Grow — Digital Acceleration",
  description:
    "Measurement, automation, and scaling—digital acceleration from Nexus Strategy.",
};

export default function GrowPage() {
  return <PillarPage pillar={getPillar("grow")} />;
}
