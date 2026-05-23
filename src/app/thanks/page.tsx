// src/app/thanks/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";

export const metadata: Metadata = {
  title: "Thank you",
  robots: { index: false, follow: false },
};

export default function Thanks() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <div className="container-narrow py-24 lg:py-32">
          <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
            <div className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-600">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h1 className="mt-6 text-section-h1 text-slate-900">Thanks for reaching out.</h1>
            <p className="mt-4 text-body-lg text-slate-600">
              We&apos;ll get back to you within 24 hours. Check your inbox for a confirmation email.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={process.env.NEXT_PUBLIC_CALENDLY_URL || "/"}
                className="inline-flex h-11 items-center justify-center rounded-lg bg-slate-900 px-6 text-[15px] font-semibold text-white hover:bg-slate-800"
              >
                Book a demo now →
              </Link>
              <Link
                href="/"
                className="inline-flex h-11 items-center justify-center rounded-lg border border-slate-200 bg-white px-6 text-[15px] font-semibold text-slate-900 hover:border-slate-300"
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
