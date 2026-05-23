// src/components/suite-cards.tsx
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SUITES } from "@/lib/content";
import { SectionEyebrow } from "./section-eyebrow";

const BADGE_STYLE = {
  amber: "bg-amber-100 text-amber-800 border-amber-200",
  slate: "bg-slate-100 text-slate-700 border-slate-200",
  emerald: "bg-emerald-100 text-emerald-800 border-emerald-200",
};

export function SuiteCards() {
  return (
    <section className="bg-cream-50 py-20 lg:py-28">
      <div className="container-wide">
        <div className="mx-auto max-w-2xl text-center">
          <SectionEyebrow label="The Platform" />
          <h2 className="mt-3 text-section-h1 text-slate-900">Three suites. One operating system.</h2>
          <p className="mt-4 text-body-lg text-slate-600">
            SkuFx replaces five separate tools with one platform that grows from product research to full ERP.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-3">
          {SUITES.map((suite) => (
            <div
              key={suite.id}
              className="group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:border-amber-300 hover:shadow-2xl hover:shadow-amber-500/15"
            >
              {/* Soft amber rim glow on hover */}
              <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" style={{ background: "radial-gradient(circle at top, rgba(245,158,11,0.08), transparent 60%)" }} aria-hidden="true" />
              <div className="relative flex items-start justify-between gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-amber-100 text-amber-700 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
                  <suite.icon className="h-6 w-6" />
                </div>
                <span className={`rounded-full border px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide ${BADGE_STYLE[suite.badgeColor]}`}>
                  {suite.badge}
                </span>
              </div>

              <h3 className="relative mt-5 text-[22px] font-bold text-slate-900">{suite.name}</h3>
              <p className="relative mt-1.5 text-[14px] font-medium text-slate-500">{suite.tagline}</p>
              <p className="relative mt-4 flex-1 text-[14px] leading-[1.65] text-slate-600">{suite.description}</p>

              <Link
                href={`/features#${suite.id}`}
                className="relative mt-6 inline-flex items-center gap-1.5 text-[14px] font-semibold text-slate-900 group-hover:text-amber-700 transition-colors"
              >
                Learn more
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
