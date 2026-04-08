export type PillarSlug = "brand" | "build" | "grow";

export type PillarAccent = "orange" | "cyan" | "gradient";

export interface ServiceCard {
  slug: PillarSlug;
  href: string;
  pillar: string;
  title: string;
  description: string;
  bar: string;
  iconTint: string;
}

/** Shared with Services grid — paths and styling tokens */
export const serviceCards: ServiceCard[] = [
  {
    slug: "brand",
    href: "/brand",
    pillar: "Brand",
    title: "Identity & Strategic Direction",
    description:
      "Positioning, voice, and visual systems that anchor every decision—so growth sits on a core foundation that does not drift.",
    bar: "bg-orange-500",
    iconTint: "text-orange-400",
  },
  {
    slug: "build",
    href: "/build",
    pillar: "Build",
    title: "High-Performance Systems",
    description:
      "Engineered delivery across WordPress, Shopify, and custom web engineering—fast, maintainable stacks built for real operations, not demos.",
    bar: "bg-cyan-500",
    iconTint: "text-cyan-400",
  },
  {
    slug: "grow",
    href: "/grow",
    pillar: "Grow",
    title: "Digital Acceleration",
    description:
      "Automation, measurement, and iterative scaling—turning traffic and workflows into compounding leverage over the long term.",
    bar: "bg-gradient-to-b from-orange-500 to-cyan-500",
    iconTint: "text-amber-400",
  },
];

export interface PillarDetail {
  slug: PillarSlug;
  accent: PillarAccent;
  headline: string;
  subhead: string;
  intro: string;
  deliverables: { title: string; body: string }[];
  process: { phase: string; detail: string }[];
  outcomes: string[];
  stack?: { name: string; note: string }[];
  nextPillar: { href: string; label: string };
}

export const pillarDetails: Record<PillarSlug, PillarDetail> = {
  brand: {
    slug: "brand",
    accent: "orange",
    headline: "Brand",
    subhead: "Identity & Strategic Direction",
    intro:
      "We treat brand as infrastructure: a coherent system that makes decisions faster, briefs clearer, and every touchpoint feel intentional—not decorative.",
    deliverables: [
      {
        title: "Positioning & narrative",
        body: "Category, audience, and proof architecture that answers why you, why now, and why it matters.",
      },
      {
        title: "Visual identity system",
        body: "Typography, color, grid, and component rules engineered for scale—web, print, and motion.",
      },
      {
        title: "Voice & messaging",
        body: "Tone ladders, naming guardrails, and copy patterns so teams ship consistent language without bottlenecks.",
      },
      {
        title: "Brand ops",
        body: "Guidelines, templates, and handoff artifacts so marketing, product, and sales stay aligned.",
      },
    ],
    process: [
      {
        phase: "Discover",
        detail: "Stakeholder interviews, competitive mapping, and audit of current touchpoints.",
      },
      {
        phase: "Define",
        detail: "Strategy, positioning, and system principles locked before pixels multiply.",
      },
      {
        phase: "Design",
        detail: "Identity, UI kit, and documentation—built for iteration, not one-off decks.",
      },
      {
        phase: "Deploy",
        detail: "Rollout plan, training, and governance so the system survives real use.",
      },
    ],
    outcomes: [
      "One source of truth for how the brand looks, sounds, and shows up.",
      "Faster approvals and fewer one-off “exceptions” that erode trust.",
      "A foundation that Build and Grow can plug into without rework.",
    ],
    nextPillar: { href: "/build", label: "Build" },
  },
  build: {
    slug: "build",
    accent: "cyan",
    headline: "Build",
    subhead: "High-Performance Systems",
    intro:
      "We ship production-grade web experiences—fast, observable, and maintainable. Whether you need a content engine, commerce, or a custom product surface, the stack is chosen for your operating model, not our resume.",
    deliverables: [
      {
        title: "WordPress",
        body: "Enterprise themes, block systems, performance budgets, and editorial workflows that scale content without chaos.",
      },
      {
        title: "Shopify",
        body: "Storefronts, custom sections, app integrations, and checkout-adjacent flows tuned for conversion and ops.",
      },
      {
        title: "Custom web engineering",
        body: "Next.js, APIs, and integrations—when off-the-shelf stops short of your product, compliance, or data needs.",
      },
      {
        title: "Quality & reliability",
        body: "Testing, monitoring, and release discipline so launches are boring—in the best way.",
      },
    ],
    process: [
      {
        phase: "Architecture",
        detail: "Information architecture, integrations, and non-functional requirements captured up front.",
      },
      {
        phase: "Build",
        detail: "Iterative delivery with demos, staging, and traceability from design to code.",
      },
      {
        phase: "Harden",
        detail: "Performance, accessibility, security, and edge cases—before traffic hits.",
      },
      {
        phase: "Launch",
        detail: "Cutover, runbooks, and handoff so your team can operate with confidence.",
      },
    ],
    outcomes: [
      "Pages that load fast, stay stable, and are easy to extend.",
      "A codebase your team can own—or we can run with you long-term.",
      "Clean handoff to Grow: events, measurement, and experiments land on solid ground.",
    ],
    stack: [
      { name: "WordPress", note: "Headless or classic—matched to editorial and SEO needs." },
      { name: "Shopify", note: "Liquid, Hydrogen, or custom storefronts when needed." },
      { name: "Custom", note: "Next.js, APIs, auth, and data layers as required." },
    ],
    nextPillar: { href: "/grow", label: "Grow" },
  },
  grow: {
    slug: "grow",
    accent: "gradient",
    headline: "Grow",
    subhead: "Digital Acceleration",
    intro:
      "Growth is a system: instrumentation, automation, and iteration. We connect marketing, product, and ops so every experiment teaches you something—and compounding wins replace one-off heroics.",
    deliverables: [
      {
        title: "Measurement & attribution",
        body: "Event models, dashboards, and reporting that align teams on what actually moves the needle.",
      },
      {
        title: "Automation & workflows",
        body: "Lead routing, nurture, CRM sync, and handoffs that remove manual drag from revenue.",
      },
      {
        title: "Conversion & retention",
        body: "Landing pages, tests, and lifecycle programs—prioritized by impact and learning velocity.",
      },
      {
        title: "Scale & governance",
        body: "Playbooks, experimentation cadence, and guardrails so growth doesn’t collapse under its own complexity.",
      },
    ],
    process: [
      {
        phase: "Baseline",
        detail: "Funnels, economics, and tech stack mapped—no vanity metrics.",
      },
      {
        phase: "Instrument",
        detail: "Tracking, audiences, and alerts that make behavior visible.",
      },
      {
        phase: "Automate",
        detail: "High-leverage workflows that free teams to focus on strategy.",
      },
      {
        phase: "Optimize",
        detail: "Test cycles, learning logs, and scaling what works—killing what doesn’t.",
      },
    ],
    outcomes: [
      "Clear line of sight from spend and effort to pipeline and revenue.",
      "More repeatable growth with less manual glue.",
      "A feedback loop that tightens Brand and Build decisions with real data.",
    ],
    nextPillar: { href: "/brand", label: "Brand" },
  },
};

export function getPillar(slug: PillarSlug): PillarDetail {
  return pillarDetails[slug];
}
