// src/app/page.tsx
import { TopNav } from "@/components/top-nav";
import { Hero } from "@/components/hero";
import { TrustBar } from "@/components/trust-bar";
import { SuiteCards } from "@/components/suite-cards";
import { FeatureShowcase } from "@/components/feature-showcase";
import { RoadmapTimeline } from "@/components/roadmap-timeline";
import { SpApiIntegration } from "@/components/spapi-integration";
import { SecuritySection } from "@/components/security-section";
import { EarlyAccessForm } from "@/components/early-access-form";
import { Footer } from "@/components/footer";
import { SUITES } from "@/lib/content";
import { SectionEyebrow } from "@/components/section-eyebrow";

const HOMEPAGE_SHOWCASE = [
  SUITES[0].features[0],   // Keyword Analyzer
  SUITES[1].features[0],   // Real-time Listing Protection
];

export default function Home() {
  return (
    <>
      <TopNav />
      <main>
        <Hero />
        <TrustBar />
        <SuiteCards />

        <section className="bg-white py-20 lg:py-28">
          <div className="container-wide">
            <div className="mx-auto max-w-2xl text-center">
              <SectionEyebrow label="In Action" />
              <h2 className="mt-3 text-section-h1 text-slate-900">See what your team can ship in a week.</h2>
            </div>
            <div className="mt-16 space-y-20 lg:space-y-28">
              <FeatureShowcase feature={HOMEPAGE_SHOWCASE[0]} align="image-left" />
              <FeatureShowcase feature={HOMEPAGE_SHOWCASE[1]} align="image-right" />
            </div>
          </div>
        </section>

        <RoadmapTimeline />
        <SpApiIntegration />
        <SecuritySection />
        <EarlyAccessForm />
      </main>
      <Footer />
    </>
  );
}
