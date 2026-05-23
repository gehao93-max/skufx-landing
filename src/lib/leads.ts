// src/lib/leads.ts

export interface LeadFormData {
  name: string;
  email: string;
  store_url?: string;
  company?: string;
  message?: string;
  website?: string; // honeypot
}

export interface LeadSubmitResult {
  ok: boolean;
  lead_id?: number;
  error?: string;
}

export async function submitLead(data: LeadFormData): Promise<LeadSubmitResult> {
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  if (!apiUrl) {
    return { ok: false, error: "API URL not configured" };
  }
  try {
    const res = await fetch(`${apiUrl}/api/landing/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.status === 429) {
      return { ok: false, error: "Too many requests. Please try again in an hour." };
    }
    if (!res.ok) {
      let detail = "Submission failed";
      try {
        const body = await res.json();
        detail = body.detail || detail;
      } catch {}
      return { ok: false, error: detail };
    }
    const body = (await res.json()) as { ok: boolean; lead_id: number };
    return { ok: true, lead_id: body.lead_id };
  } catch (e) {
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Network error",
    };
  }
}
