// src/components/hero.tsx
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { COMPANY } from "@/lib/content";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream-50 pt-12 pb-20 lg:pt-20 lg:pb-28">
      <div className="container-wide">
        {/* eyebrow pill */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white py-1 pl-1 pr-3.5 text-[12px] font-semibold text-slate-600 shadow-sm">
            <span className="rounded-full bg-amber-500 px-2 py-0.5 text-[11px] font-extrabold text-slate-900">NEW</span>
            SP-API Integration Coming
          </div>
        </div>

        {/* hero h1 */}
        <h1 className="mt-6 text-center font-extrabold tracking-tight text-slate-900 text-[40px] leading-[1.1] sm:text-[48px] lg:text-[56px]">
          The Amazon <span className="gradient-text">Operator&apos;s</span><br className="hidden sm:block" /> Platform
        </h1>

        {/* sub */}
        <p className="mx-auto mt-5 max-w-2xl text-center text-[17px] leading-[1.55] text-slate-600 lg:text-[18px]">
          From keyword research to ERP — everything your Amazon brand needs to scale, on one unified platform.
        </p>

        {/* CTAs */}
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row" id="request-access">
          <Link
            href="#early-access-form"
            className="inline-flex h-12 items-center justify-center rounded-lg bg-slate-900 px-7 text-[15px] font-semibold text-white shadow-sm hover:bg-slate-800 transition-colors"
          >
            Request Early Access
          </Link>
          <Link
            href="/features"
            className="group inline-flex h-12 items-center justify-center gap-1.5 rounded-lg border border-slate-200 bg-white px-6 text-[15px] font-semibold text-slate-900 hover:border-slate-300 transition-colors"
          >
            See the Platform
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>

        {/* Bento stats grid */}
        <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-2 sm:grid-cols-3">
          <BentoCell num={COMPANY.modules.toString()} label="Integrated modules" />
          <BentoCell num={COMPANY.yearsOnAmazon} label="Years on Amazon" accent />
          <BentoCell num={COMPANY.abaKeywords} label="ABA keywords indexed" />
        </div>

        {/* hero mockup */}
        <div className="mx-auto mt-14 max-w-5xl">
          <div className="relative rounded-xl border border-slate-200 bg-white p-1.5 shadow-2xl shadow-amber-500/5">
            <Image
              src="/mockups/dashboard-overview.png"
              width={1440}
              height={900}
              alt="SkuFx Dashboard overview — 10 modules including keyword analyzer, anti-hijacking, FBA inventory, and profit dashboard"
              className="w-full rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function BentoCell({ num, label, accent = false }: { num: string; label: string; accent?: boolean }) {
  return (
    <div className={`rounded-xl border p-4 text-left ${accent ? "border-amber-300 bg-amber-100" : "border-slate-200 bg-white"}`}>
      <span className="block font-mono text-[26px] font-extrabold leading-none text-slate-900">{num}</span>
      <span className="mt-1.5 block text-[12px] font-medium text-slate-600">{label}</span>
    </div>
  );
}
