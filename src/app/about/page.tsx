// src/app/about/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description: "SkuFx is built by Amazon brand owners for Amazon brand owners. 6+ years operating in health supplements, now opening the platform to other sellers.",
};

export default function About() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <article className="container-narrow py-20 lg:py-28">
          <SectionEyebrow label="About SkuFx" />
          <h1 className="mt-3 text-section-h1 text-slate-900 lg:text-[44px]">
            Built by Amazon operators, for Amazon operators.
          </h1>

          <div className="prose prose-slate mt-10 max-w-none text-[16px] leading-[1.75] text-slate-700">
            <p>
              SkuFx grew out of {COMPANY.yearsOnAmazon} years operating health supplement brands on Amazon US. We built the platform internally because no single tool handled the work end-to-end — keyword research lived in spreadsheets, listing protection lived in a chat group, FBA inventory lived in another tab, and finance lived in QuickBooks.
            </p>
            <p>
              By 2025 we had stitched together {COMPANY.modules} integrated modules that ran our entire operation. In 2026 we&apos;re opening it to other Amazon brand owners who&apos;d rather not rebuild this themselves.
            </p>
            <p>
              We&apos;re a small team based in Liaoning, China. Our day job is still running our own Amazon brands — which means every feature in SkuFx is something we use daily. If a feature stops being useful to us, it gets killed; if a feature is useful to us, you can bet it&apos;s been polished.
            </p>

            <h3 className="mt-12 text-card-h3">Company</h3>
            <p className="text-[14px]">
              {COMPANY.name}<br/>
              Room 1002, 1st Floor, Building D, No. 36-4 Tianfu Road,<br/>
              Wensheng District, Liaoyang City, Liaoning Province,<br/>
              People&apos;s Republic of China<br/>
              Established 2020 · Amazon US seller<br/>
              Business License No.: 91211003MAEPU5QJ3B
            </p>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
