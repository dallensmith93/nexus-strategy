import Link from "next/link";

export function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-white/5 px-6 py-20 md:px-10 md:py-28 lg:py-32"
      aria-labelledby="hero-heading"
    >
      <div
        className="bg-grid-fine bg-grid-fine-masked pointer-events-none absolute inset-0 opacity-60"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-[min(95vw,800px)] -translate-x-1/2 bg-gradient-to-b from-orange-500/20 via-cyan-500/10 to-transparent blur-3xl"
        aria-hidden
      />

      <div className="relative mx-auto max-w-7xl">
        <p className="font-mono text-xs text-slate-500 md:text-sm">
          <span className="text-cyan-500/90">/</span> agency blueprint
        </p>
        <h1
          id="hero-heading"
          className="mt-4 max-w-4xl font-display text-5xl uppercase leading-[0.92] tracking-tight text-white md:text-7xl lg:text-8xl"
        >
          We engineer{" "}
          <span className="bg-gradient-to-r from-orange-400 to-cyan-400 bg-clip-text text-transparent">
            business growth
          </span>
        </h1>
        <p className="mt-8 max-w-2xl font-sans text-lg leading-relaxed text-slate-300 md:text-xl">
          Brand, build, and grow as one system—clear positioning, production-grade
          web, and measurable acceleration. No fluff. No template theater.
        </p>
        <div className="mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="#services"
            className="inline-flex items-center gap-2 border border-white/15 bg-white/[0.06] px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-white transition-colors duration-200 hover:border-white/25 hover:bg-white/[0.1]"
          >
            View capabilities
          </Link>
          <Link
            href="/brand"
            className="font-mono text-xs uppercase tracking-[0.2em] text-slate-400 transition-colors duration-200 hover:text-cyan-400/90"
          >
            Start with Brand →
          </Link>
        </div>
        <div
          className="mt-14 h-px w-32 bg-gradient-to-r from-orange-500 via-amber-400 to-cyan-500"
          aria-hidden
        />
      </div>
    </section>
  );
}
