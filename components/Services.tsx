"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Fingerprint, Layers, TrendingUp } from "lucide-react";
import { serviceCards } from "@/lib/pillars";

const icons = {
  brand: Fingerprint,
  build: Layers,
  grow: TrendingUp,
} as const;

const list = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const card = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.2,
      ease: [0.2, 0.8, 0.2, 1] as [number, number, number, number],
    },
  },
};

export function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-t border-white/5 bg-agency-base px-6 py-24 md:px-10 md:py-32"
      aria-labelledby="services-heading"
    >
      {/* Blueprint grid + soft top glow */}
      <div
        className="bg-grid-fine bg-grid-fine-masked pointer-events-none absolute inset-0 opacity-70"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[min(90vw,720px)] -translate-x-1/2 bg-gradient-to-b from-orange-500/15 via-cyan-500/5 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <header className="mb-16 max-w-3xl md:mb-20">
          <div className="mb-6 flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-2 border border-white/10 bg-white/[0.03] px-3 py-1.5 font-sans text-[11px] font-semibold uppercase tracking-[0.25em] text-slate-400">
              <span
                className="h-1.5 w-1.5 bg-orange-500"
                aria-hidden
              />
              Nexus Strategy
            </span>
            <span className="hidden h-px flex-1 min-w-[2rem] bg-gradient-to-r from-white/20 to-transparent sm:block" />
          </div>

          <p className="font-mono text-xs text-slate-500 md:text-sm">
            <span className="text-cyan-500/90">/</span> capabilities
          </p>

          <div className="mt-4 flex flex-col gap-2">
            <h2
              id="services-heading"
              className="font-display max-w-[18ch] text-5xl uppercase leading-[0.95] tracking-tight text-white md:text-6xl lg:text-7xl"
            >
              Services
            </h2>
            <p className="max-w-xl font-sans text-lg leading-relaxed text-slate-300 md:text-xl">
              Three pillars—
              <span className="text-white">brand clarity</span>,{" "}
              <span className="text-white">engineered builds</span>, and{" "}
              <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
                scalable growth
              </span>
              —designed to read as one system.
            </p>
          </div>

          <div
            className="mt-10 h-px w-24 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-500"
            aria-hidden
          />
        </header>

        <motion.ul
          className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-6 lg:gap-8"
          variants={list}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2, margin: "-48px" }}
        >
          {serviceCards.map(
            ({ slug, href, pillar, title, description, bar, iconTint }, index) => {
              const Icon = icons[slug];
              return (
                <motion.li key={slug} variants={card} className="min-w-0">
                  <Link
                    href={href}
                    prefetch
                    className="group block h-full min-w-0 rounded-none outline-none focus-visible:ring-2 focus-visible:ring-cyan-500/60 focus-visible:ring-offset-2 focus-visible:ring-offset-agency-base"
                    aria-label={`Open ${pillar}: ${title}`}
                  >
                    <motion.div
                      className="relative flex h-full min-h-[320px] flex-col overflow-hidden border border-white/5 bg-agency-surface rounded-none transition-colors duration-200 group-hover:border-white/[0.12]"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2, ease: [0.2, 0.8, 0.2, 1] }}
                    >
                      {/* Left accent rail — decorative; must not capture clicks */}
                      <div
                        className={`pointer-events-none absolute bottom-0 left-0 top-0 w-0.5 ${bar}`}
                        aria-hidden
                      />
                      {/* Hover sheen — invisible to pointer events so the whole card stays one link */}
                      <div
                        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/[0.04] via-transparent to-transparent opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        aria-hidden
                      />

                      <div className="relative z-[1] flex flex-1 flex-col p-8 md:p-9 lg:p-10">
                        <div className="mb-8 flex items-start justify-between gap-4 border-b border-white/[0.06] pb-8">
                          <div>
                            <span className="font-mono text-[10px] font-medium uppercase tracking-widest text-slate-500">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                            <p className="mt-2 font-display text-base uppercase tracking-tight text-orange-500/95">
                              {pillar}
                            </p>
                          </div>
                          <div
                            className={`flex h-14 w-14 shrink-0 items-center justify-center border border-white/10 bg-white/[0.03] transition-colors duration-200 group-hover:border-white/20 ${iconTint}`}
                          >
                            <Icon className="h-7 w-7" strokeWidth={1.25} />
                          </div>
                        </div>

                        <h3 className="font-display text-2xl uppercase leading-[1.05] tracking-tight text-white md:text-[1.65rem] lg:text-[1.75rem]">
                          {title}
                        </h3>
                        <p className="mt-5 flex-1 font-sans text-[15px] leading-relaxed text-slate-300/95 md:text-base">
                          {description}
                        </p>

                        <div className="mt-8 flex items-center gap-2 border-t border-white/[0.06] pt-6 font-mono text-[11px] uppercase tracking-[0.2em] text-slate-400 transition-colors duration-200 group-hover:text-cyan-400/90">
                          <span className="h-px w-6 bg-gradient-to-r from-orange-500/80 to-cyan-500/80" />
                          <span className="underline decoration-cyan-500/40 underline-offset-4 transition-colors group-hover:decoration-cyan-400/80">
                            Explore {pillar}
                          </span>
                          <span aria-hidden>→</span>
                        </div>
                      </div>
                    </motion.div>
                  </Link>
                </motion.li>
              );
            },
          )}
        </motion.ul>
      </div>
    </section>
  );
}
