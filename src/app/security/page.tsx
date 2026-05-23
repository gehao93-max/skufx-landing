// src/app/security/page.tsx
import type { Metadata } from "next";
import { Lock, ShieldCheck, KeyRound, AlertCircle, Eye, Server } from "lucide-react";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { SectionEyebrow } from "@/components/section-eyebrow";

export const metadata: Metadata = {
  title: "Security",
  description: "How SkuFx protects seller data — encryption, access control, breach notification, audited annually.",
};

const CONTROLS = [
  { icon: Lock, title: "Encryption at Rest", detail: "All Amazon seller data encrypted with AES-256-GCM. Database disks encrypted with LUKS." },
  { icon: ShieldCheck, title: "Encryption in Transit", detail: "TLS 1.3 enforced on every endpoint. HSTS preload pending. Legacy SSL disabled." },
  { icon: KeyRound, title: "Access Control", detail: "MFA required for all internal accounts (TOTP). No password-only access. Role-based permissions audited monthly." },
  { icon: Server, title: "Infrastructure Isolation", detail: "Production database not accessible from public internet. Bastion-only SSH, key-based only, no passwords." },
  { icon: Eye, title: "Audit Logging", detail: "Every data access logged with user, timestamp, and IP. Logs retained 90 days minimum (1 year for admin actions)." },
  { icon: AlertCircle, title: "Breach Notification", detail: "Committed under Amazon DPP to notify within 24 hours of confirmed breach." },
];

export default function Security() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <div className="container-narrow py-20 lg:py-28">
          <SectionEyebrow label="Security" />
          <h1 className="mt-3 text-section-h1 text-slate-900 lg:text-[44px]">Security &amp; Compliance</h1>
          <p className="mt-4 text-body-lg text-slate-600">
            SkuFx is built to meet Amazon&apos;s Data Protection Policy (DPP) for Selling Partner API. Below are the technical controls we maintain.
          </p>

          <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">
            {CONTROLS.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="rounded-2xl border border-slate-200 bg-white p-6">
                <Icon className="h-6 w-6 text-amber-600" />
                <h3 className="mt-4 text-card-h3 text-slate-900">{title}</h3>
                <p className="mt-2 text-[14px] leading-relaxed text-slate-600">{detail}</p>
              </div>
            ))}
          </div>

          <section className="mt-16 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-[22px] font-bold text-slate-900">Data retention</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              SP-API data (Brand Analytics reports, Pricing, FBA inventory, Orders, Finances) is retained for as long as your active subscription. Upon revocation of SP-API access or account deletion, all SP-API data is permanently deleted within 24 hours.
            </p>
          </section>

          <section className="mt-6 rounded-2xl border border-slate-200 bg-white p-8">
            <h2 className="text-[22px] font-bold text-slate-900">Vulnerability disclosure</h2>
            <p className="mt-3 text-[14px] leading-relaxed text-slate-600">
              If you discover a security vulnerability, please email <a href="mailto:security@skufx.com" className="font-mono font-semibold text-amber-700 hover:underline">security@skufx.com</a> with details. We acknowledge within 24 hours and aim to remediate critical issues within 7 days.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
