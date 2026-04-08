import Link from "next/link";

const nav = [
  { href: "/", label: "Home" },
  { href: "/brand", label: "Brand" },
  { href: "/build", label: "Build" },
  { href: "/grow", label: "Grow" },
] as const;

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-agency-base/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-4 md:px-10">
        <Link
          href="/"
          className="group flex items-center gap-3 font-display text-xl uppercase tracking-tight text-white transition-colors duration-200 hover:text-cyan-400/90"
        >
          <span
            className="h-2 w-2 bg-orange-500 transition-transform duration-200 group-hover:scale-110"
            aria-hidden
          />
          Nexus Strategy
        </Link>
        <nav
          className="flex flex-wrap items-center justify-end gap-1 sm:gap-2"
          aria-label="Primary"
        >
          {nav.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-mono text-[11px] uppercase tracking-[0.15em] text-slate-400 transition-colors duration-200 hover:text-white px-2 py-2 sm:px-3"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
