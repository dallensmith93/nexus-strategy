import type { Metadata } from "next";
import { PillarPage } from "@/components/PillarPage";
import { getPillar } from "@/lib/pillars";

export const metadata: Metadata = {
  title: "Build — High-Performance Systems",
  description:
    "WordPress, Shopify, and custom web engineering—production-grade systems from Nexus Strategy.",
};

export default function BuildPage() {
  return <PillarPage pillar={getPillar("build")} />;
}
