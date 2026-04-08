import Link from "next/link";
import type { PillarDetail } from "@/lib/pillars";

function accentBarClass(accent: PillarDetail["accent"]) {
  switch (accent) {
    case "orange":
      return "bg-orange-500";
    case "cyan":
      return "bg-cyan-500";
    default:
      return "bg-gradient-to-b from-orange-500 to-cyan-500";
  }
}

function pillarLabelColor(accent: PillarDetail["accent"]) {
  switch (accent) {
    case "orange":
      return "text-orange-500";
    case "cyan":
      return "text-cyan-500";
    default:
      return "text-amber-400";
  }
}

function outcomeDotClass(accent: PillarDetail["accent"]) {
  switch (accent) {
    case "orange":
      return "bg-orange-500";
    case "cyan":
      return "bg-cyan-500";
    default:
      return "bg-gradient-to-br from-orange-500 to-cyan-500";
  }
}

export function PillarPage({ pillar }: { pillar: PillarDetail }) {
  const bar = accentBarClass(pillar.accent);
  const labelColor = pillarLabelColor(pillar.accent);
  const outcomeDot = outcomeDotClass(pillar.accent);

  return (
    <div className="flex min-h-full flex-1 flex-col bg-agency-base">
      <article>
        {/* Hero */}
        <section
          className="relative overflow-hidden border-b border-white/5 px-6 py-16 md:px-10 md:py-24"
          aria-labelledby="pillar-title"
        >
          <div
            className="bg-grid-fine bg-grid-fine-masked pointer-events-none absolute inset-0 opacity-50"
            aria-hidden
          />
          <div
            className="pointer-events-none absolute -top-24 right-0 h-56 w-56 bg-gradient-to-tl from-orange-500/15 to-transparent blur-3xl md:h-72 md:w-72"
            aria-hidden
          />

          <div className="relative mx-auto max-w-7xl">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <Link
                href="/"
                className="font-mono text-xs uppercase tracking-[0.2em] text-slate-500 transition-colors duration-200 hover:text-slate-300"
              >
                ← Home
              </Link>
              <span className="font-mono text-slate-600" aria-hidden>
                /
              </span>
              <span className={`font-mono text-xs uppercase tracking-[0.2em] ${labelColor}`}>
                {pillar.headline}
              </span>
            </div>

            <div className="relative mt-10 max-w-4xl">
              <div
                className={`absolute bottom-0 left-0 top-0 w-0.5 ${bar}`}
                aria-hidden
              />
              <div className="pl-6 md:pl-8">
                <p
                  id="pillar-title"
                  className={`font-display text-5xl uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl`}
                >
                  {pillar.headline}
                </p>
                <p className="mt-4 font-sans text-xl text-slate-300 md:text-2xl">
                  {pillar.subhead}
                </p>
                <p className="mt-8 max-w-2xl font-sans text-base leading-relaxed text-slate-300 md:text-lg">
                  {pillar.intro}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Deliverables */}
        <section
          className="border-b border-white/5 px-6 py-16 md:px-10 md:py-20"
          aria-labelledby="deliverables-heading"
        >
          <div className="mx-auto max-w-7xl">
            <div className="mb-10 flex items-end justify-between gap-4 border-b border-white/[0.06] pb-6">
              <h2
                id="deliverables-heading"
                className="font-display text-3xl uppercase tracking-tight text-white md:text-4xl"
              >
                What we deliver
              </h2>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                Scope
              </span>
            </div>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {pillar.deliverables.map((d) => (
                <li
                  key={d.title}
                  className="border border-white/5 bg-agency-surface p-8 rounded-none"
                >
                  <h3 className="font-display text-xl uppercase tracking-tight text-white">
                    {d.title}
                  </h3>
                  <p className="mt-4 font-sans text-[15px] leading-relaxed text-slate-300 md:text-base">
                    {d.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Stack (Build only) */}
        {pillar.stack && pillar.stack.length > 0 && (
          <section
            className="border-b border-white/5 px-6 py-16 md:px-10 md:py-20"
            aria-labelledby="stack-heading"
          >
            <div className="mx-auto max-w-7xl">
              <h2
                id="stack-heading"
                className="font-display mb-10 border-b border-white/[0.06] pb-6 text-3xl uppercase tracking-tight text-white md:text-4xl"
              >
                Platforms & stacks
              </h2>
              <ul className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {pillar.stack.map((s) => (
                  <li
                    key={s.name}
                    className="border border-white/5 bg-agency-base px-6 py-6 rounded-none"
                  >
                    <p className="font-display text-lg uppercase tracking-tight text-cyan-400/90">
                      {s.name}
                    </p>
                    <p className="mt-3 font-sans text-sm leading-relaxed text-slate-300">
                      {s.note}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* Process */}
        <section
          className="border-b border-white/5 px-6 py-16 md:px-10 md:py-20"
          aria-labelledby="process-heading"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="process-heading"
              className="font-display mb-12 border-b border-white/[0.06] pb-6 text-3xl uppercase tracking-tight text-white md:text-4xl"
            >
              How we work
            </h2>
            <ol className="space-y-10">
              {pillar.process.map((step, i) => (
                <li
                  key={step.phase}
                  className="flex gap-6 border-b border-white/5 pb-10 last:border-b-0 last:pb-0 md:gap-10"
                >
                  <span
                    className="font-mono text-sm tabular-nums text-slate-500 shrink-0 w-9 pt-0.5"
                    aria-hidden
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0 flex-1">
                    <p className="font-display text-lg uppercase tracking-tight text-white">
                      {step.phase}
                    </p>
                    <p className="mt-3 max-w-2xl font-sans text-base leading-relaxed text-slate-300">
                      {step.detail}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Outcomes */}
        <section
          className="border-b border-white/5 px-6 py-16 md:px-10 md:py-20"
          aria-labelledby="outcomes-heading"
        >
          <div className="mx-auto max-w-7xl">
            <h2
              id="outcomes-heading"
              className="font-display mb-10 border-b border-white/[0.06] pb-6 text-3xl uppercase tracking-tight text-white md:text-4xl"
            >
              Outcomes
            </h2>
            <ul className="space-y-4">
              {pillar.outcomes.map((line) => (
                <li
                  key={line}
                  className="flex gap-4 border border-white/5 bg-agency-surface px-6 py-4 font-sans text-slate-300 rounded-none md:px-8 md:py-5"
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 shrink-0 ${outcomeDot}`}
                    aria-hidden
                  />
                  <span>{line}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Next pillar */}
        <section className="px-6 py-16 md:px-10 md:py-24">
          <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 border border-white/10 bg-white/[0.02] px-8 py-10 md:flex-row md:items-center md:px-12 md:py-12 rounded-none">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-slate-500">
                Next in the system
              </p>
              <p className="mt-2 font-display text-2xl uppercase tracking-tight text-white md:text-3xl">
                Continue to {pillar.nextPillar.label}
              </p>
            </div>
            <Link
              href={pillar.nextPillar.href}
              className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-cyan-500/40 hover:bg-white/[0.09]"
            >
              {pillar.nextPillar.label} →
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
