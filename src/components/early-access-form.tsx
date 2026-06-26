// src/components/early-access-form.tsx
"use client";

import { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Loader2 } from "lucide-react";
import { submitLead } from "@/lib/leads";
import { SectionEyebrow } from "./section-eyebrow";

export function EarlyAccessForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    const fd = new FormData(e.currentTarget);
    const res = await submitLead({
      name: String(fd.get("name") || "").trim(),
      email: String(fd.get("email") || "").trim(),
      store_url: String(fd.get("store_url") || "").trim() || undefined,
      company: String(fd.get("company") || "").trim() || undefined,
      message: String(fd.get("message") || "").trim() || undefined,
      website: String(fd.get("website") || ""),
    });
    if (res.ok) {
      router.push("/thanks");
    } else {
      setError(res.error || "Submission failed");
      setSubmitting(false);
    }
  }

  return (
    <section id="early-access-form" className="bg-cream-50 py-20 lg:py-28">
      <div className="container-narrow">
        <div className="rounded-2xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">
          <div className="text-center">
            <SectionEyebrow label="Early Access" />
            <h2 className="mt-3 text-section-h1 text-slate-900">Request early access.</h2>
            <p className="mt-3 text-body-lg text-slate-600">
              We&apos;re onboarding Amazon brands in batches. Tell us about yours and we&apos;ll be in touch — typically within 24 hours.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px] h-0 w-0"
              aria-hidden="true"
            />

            <div>
              <Label htmlFor="name" className="text-[13px] font-medium">Your name *</Label>
              <Input id="name" name="name" required maxLength={120} className="mt-1.5 h-11 bg-cream-50" />
            </div>
            <div>
              <Label htmlFor="email" className="text-[13px] font-medium">Work email *</Label>
              <Input id="email" name="email" type="email" required maxLength={200} className="mt-1.5 h-11 bg-cream-50" />
            </div>
            <div>
              <Label htmlFor="company" className="text-[13px] font-medium">Company</Label>
              <Input id="company" name="company" maxLength={200} className="mt-1.5 h-11 bg-cream-50" />
            </div>
            <div>
              <Label htmlFor="store_url" className="text-[13px] font-medium">Amazon store URL</Label>
              <Input id="store_url" name="store_url" type="url" maxLength={500} placeholder="https://amazon.com/shops/..." className="mt-1.5 h-11 bg-cream-50" />
            </div>
            <div className="md:col-span-2">
              <Label htmlFor="message" className="text-[13px] font-medium">What are you hoping to use SkuFx for?</Label>
              <Textarea id="message" name="message" rows={4} maxLength={4000} className="mt-1.5 bg-cream-50" />
            </div>

            {error && (
              <div className="md:col-span-2 rounded-lg border border-red-200 bg-red-50 p-3 text-[13px] text-red-700">
                {error}
              </div>
            )}

            <div className="md:col-span-2 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
              <p className="text-[12px] text-slate-500">
                Prefer email? Write to{" "}
                <a href="mailto:support@skufx.com" className="font-semibold text-slate-900 underline hover:text-amber-700">support@skufx.com</a>.
              </p>
              <Button
                type="submit"
                disabled={submitting}
                className="h-11 bg-slate-900 px-7 text-[15px] font-semibold text-white hover:bg-slate-800 disabled:opacity-60"
              >
                {submitting && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                Request early access
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
