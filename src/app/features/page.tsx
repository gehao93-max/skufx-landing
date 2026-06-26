// src/app/features/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { AnchorNav } from "@/components/anchor-nav";
import { FeatureShowcase } from "@/components/feature-showcase";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { SUITES } from "@/lib/content";

export const metadata: Metadata = {
  title: "All Features. One Platform.",
  description: "From keyword research to ERP — explore everything SkuFx can do for your Amazon brand.",
};

export default function Features() {
  return (
    <>
      <TopNav />
      <main>
        <section className="bg-cream-50 pt-12 pb-10 lg:pt-16 lg:pb-12">
          <div className="container-wide text-center">
            <SectionEyebrow label="Product Features" />
            <h1 className="mt-3 text-section-h1 text-slate-900 lg:text-[44px]">
              All features. One platform.
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-body-lg text-slate-600">
              From keyword research to ERP — explore what SkuFx can do for your Amazon brand.
            </p>
          </div>
        </section>

        <AnchorNav />

        {SUITES.map((suite) => (
          <section key={suite.id} id={suite.id} className={`py-20 lg:py-24 ${
            suite.id === "operations" ? "bg-white" : "bg-cream-50"
          }`}>
            <div className="container-wide">
              <div className="mx-auto max-w-2xl text-center">
                <SectionEyebrow label={suite.badge} />
                <h2 className="mt-3 text-section-h1 text-slate-900">{suite.name}</h2>
                <p className="mt-3 text-body-lg text-slate-600">{suite.description}</p>
              </div>

              <div className="mt-16 space-y-20 lg:space-y-28">
                {suite.features.map((feature, idx) => (
                  <FeatureShowcase
                    key={feature.name}
                    feature={feature}
                    align={idx % 2 === 0 ? "image-left" : "image-right"}
                  />
                ))}
              </div>
            </div>
          </section>
        ))}

        <section className="bg-slate-900 py-20 lg:py-24">
          <div className="container-narrow text-center">
            <h2 className="text-[32px] font-extrabold tracking-tight text-white">
              Ready to operate at scale?
            </h2>
            <p className="mt-3 text-body-lg text-slate-300">
              We&apos;re onboarding Amazon brands in batches — tell us about yours.
            </p>
            <Link
              href="/#early-access-form"
              className="mt-8 inline-flex h-12 items-center gap-2 rounded-lg bg-amber-500 px-7 text-[15px] font-semibold text-slate-900 hover:bg-amber-600"
            >
              Request early access
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
