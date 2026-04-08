import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Brand — Identity & Strategic Direction",
  description:
    "Positioning, visual identity, and messaging systems that anchor every business decision—Nexus Strategy.",
};

export default function BrandPage() {
  return <PillarPage pillar={getPillar("brand")} />;
}
