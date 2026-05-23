// src/app/cookies/page.tsx
import type { Metadata } from "next";
import { TopNav } from "@/components/top-nav";
import { Footer } from "@/components/footer";
import { COMPANY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: "How SkuFx uses cookies and similar technologies.",
};

export default function Cookies() {
  return (
    <>
      <TopNav />
      <main className="bg-cream-50">
        <article className="prose prose-slate container-narrow py-20 max-w-none lg:py-28">
          <h1 className="text-section-h1 text-slate-900">Cookie Policy</h1>
          <p className="text-[13px] text-slate-500">
            Version 1.0 &bull; Effective date: May 23, 2026 &bull; Last updated: May 23, 2026
          </p>

          <h2>1. What Are Cookies</h2>
          <p>
            Cookies are small text files stored by your browser when you visit a website. They help
            websites remember your preferences, keep you logged in, and collect anonymous usage
            statistics. This policy explains the cookies used on skufx.com and app.skufx.com.
          </p>

          <h2>2. Cookies We Use</h2>
          <p>
            We use only the categories of cookies described below. We do not use advertising cookies
            or cross-site tracking.
          </p>

          <h3>2.1 Strictly Necessary Cookies</h3>
          <p>These cookies are essential for the Service to function. They cannot be disabled.</p>
          <table>
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Purpose</th>
                <th>Duration</th>
                <th>Party</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <code>session</code>
                </td>
                <td>Authenticates your logged-in session</td>
                <td>Session / 30 days (remember me)</td>
                <td>First party</td>
              </tr>
              <tr>
                <td>
                  <code>csrf_token</code>
                </td>
                <td>Prevents cross-site request forgery attacks</td>
                <td>Session</td>
                <td>First party</td>
              </tr>
              <tr>
                <td>
                  <code>theme</code>
                </td>
                <td>Stores your UI theme preference (light/dark)</td>
                <td>1 year</td>
                <td>First party</td>
              </tr>
            </tbody>
          </table>

          <h3>2.2 Performance Cookies</h3>
          <p>
            These collect anonymous, aggregated data to help us understand how the site performs. No
            personally identifiable information is collected or transmitted.
          </p>
          <table>
            <thead>
              <tr>
                <th>Technology</th>
                <th>Purpose</th>
                <th>Provider</th>
                <th>Data Sent</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Vercel Speed Insights</td>
                <td>Measures page load performance (Core Web Vitals)</td>
                <td>Vercel, Inc.</td>
                <td>Anonymous performance metrics — no PII</td>
              </tr>
            </tbody>
          </table>

          <h2>3. Cookies We Do Not Use</h2>
          <p>
            We do <strong>not</strong> use:
          </p>
          <ul>
            <li>Google Analytics or similar behavioral analytics platforms.</li>
            <li>Facebook Pixel, LinkedIn Insight Tag, or other advertising pixels.</li>
            <li>Third-party retargeting or tracking cookies.</li>
            <li>
              Cross-site tracking technologies that identify you across websites you don&apos;t own.
            </li>
          </ul>

          <h2>4. How to Control Cookies</h2>
          <p>You can control cookies through your browser settings. Most browsers allow you to:</p>
          <ul>
            <li>
              Block all cookies (note: blocking necessary cookies will prevent you from logging in to
              the app).
            </li>
            <li>Block third-party cookies only.</li>
            <li>Delete existing cookies.</li>
            <li>Receive a notification before a cookie is stored.</li>
          </ul>
          <p>Browser-specific instructions:</p>
          <ul>
            <li>
              <strong>Chrome:</strong> Settings → Privacy and security → Cookies and other site data
            </li>
            <li>
              <strong>Firefox:</strong> Settings → Privacy &amp; Security → Cookies and Site Data
            </li>
            <li>
              <strong>Safari:</strong> Preferences → Privacy → Manage Website Data
            </li>
            <li>
              <strong>Edge:</strong> Settings → Privacy, search, and services → Cookies
            </li>
          </ul>

          <h2>5. Changes to This Policy</h2>
          <p>
            We may update this Cookie Policy when we add or remove cookies. The &quot;Last
            updated&quot; date at the top will reflect any changes.
          </p>

          <h2>6. Contact</h2>
          <p>
            Questions about our use of cookies? Email{" "}
            <a href={`mailto:${COMPANY.emails.privacy}`}>{COMPANY.emails.privacy}</a>.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
