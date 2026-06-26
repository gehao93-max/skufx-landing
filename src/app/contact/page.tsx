// src/app/contact/page.tsx
import type { Metadata } from "next";
import { Mail, Calendar } from "lucide-react";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Contact",
  description: "Reach SkuFx — support, sales, privacy, and security inquiries.",
};

const EMAILS = [
  { label: "General / Support", addr: COMPANY.emails.support, note: "Product questions, demos, partnerships" },
  { label: "Privacy", addr: COMPANY.emails.privacy, note: "Data requests, GDPR/CCPA inquiries" },
  { label: "Security", addr: COMPANY.emails.security, note: "Vulnerability reports, security audits" },
];

export default function Contact() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <div className="container-narrow py-20 lg:py-28">
          <SectionEyebrow label="Contact" />
          <h1 className="mt-3 text-section-h1 text-slate-900 lg:text-[44px]">Get in touch.</h1>
          <p className="mt-4 text-body-lg text-slate-600">
            We usually respond within 24 hours on weekdays.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div className="rounded-2xl border border-amber-300 bg-amber-50 p-6">
              <Calendar className="h-6 w-6 text-amber-700" />
              <h3 className="mt-4 text-card-h3 text-slate-900">Book a walkthrough</h3>
              <p className="mt-2 text-[14px] leading-relaxed text-slate-700">
                Want a guided tour of the platform? Email us and we&apos;ll schedule a 30-minute demo
                that fits your calendar.
              </p>
              <a
                href={`mailto:${COMPANY.emails.support}?subject=SkuFx demo request`}
                className="mt-4 inline-flex h-10 items-center rounded-lg bg-slate-900 px-5 text-[14px] font-semibold text-white hover:bg-slate-800"
              >
                Email us to book →
              </a>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-6">
              <Mail className="h-6 w-6 text-slate-700" />
              <h3 className="mt-4 text-card-h3 text-slate-900">Email us directly</h3>
              <ul className="mt-4 space-y-3">
                {EMAILS.map((e) => (
                  <li key={e.addr}>
                    <a href={`mailto:${e.addr}`} className="font-mono text-[13px] font-semibold text-slate-900 hover:text-amber-700">
                      {e.addr}
                    </a>
                    <p className="text-[12px] text-slate-500">{e.note}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-12 text-[12px] text-slate-500">
            {COMPANY.name}
          </p>
        </div>
      </main>
      <Footer />
    </>
  );
}
