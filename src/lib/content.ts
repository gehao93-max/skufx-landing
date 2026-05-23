// src/lib/content.ts
import {
  Search, Sparkles, Target,
  Shield, TrendingUp, FileEdit,
  Box, ShoppingBag, BarChart3, Layers,
  type LucideIcon,
} from "lucide-react";

export type FeatureStatus = "available" | "coming";

export interface FeatureItem {
  name: string;
  description: string;
  icon: LucideIcon;
  status: FeatureStatus;
  comingQuarter?: string;     // e.g. "Q3 2026"
  spApiRoles: string[];        // e.g. ["Brand Analytics"]
  mockup: string;              // file in public/mockups/
}

export interface Suite {
  id: "intelligence" | "operations" | "erp";
  name: string;
  tagline: string;
  badge: string;
  badgeColor: "amber" | "slate" | "emerald";
  description: string;
  icon: LucideIcon;
  features: FeatureItem[];
}

export const SUITES: Suite[] = [
  {
    id: "intelligence",
    name: "Product Studio",
    tagline: "From idea to launch-ready listing.",
    badge: "Available Now",
    badgeColor: "amber",
    icon: Sparkles,
    description: "AI-assisted product development: market research, formula generation, listing copy, hero images, A+ content. Built for our own Amazon brands — now yours.",
    features: [
      {
        name: "Keyword Opportunity Analyzer",
        description: "Every week, Amazon sellers sit down to manually export ABA reports, paste them into spreadsheets, and guess which keywords are worth targeting. SkuFx automates this entirely. After you connect your Seller Central account via Login with Amazon, our system retrieves your Brand Analytics reports automatically and computes an opportunity score for each search term — factoring in search frequency rank, click-share concentration, and conversion-share dispersion.",
        icon: Search,
        status: "available",
        spApiRoles: ["Brand Analytics"],
        mockup: "keyword-analyzer.png",
      },
      {
        name: "New Product Development Pipeline",
        description: "SkuFx's 6-step new product pipeline walks you from market idea to launch-ready listing. Step 1 defines the target market; Step 2 identifies competitor reference products; Step 3 uses Amazon's Catalog API to pull authoritative product attributes; Steps 4-5 generate formulation and packaging specs with AI; Step 6 outputs a complete listing draft. The whole process that used to take 2 weeks of manual research now takes 2-3 focused hours.",
        icon: Sparkles,
        status: "available",
        spApiRoles: ["Catalog Items", "Product Listing"],
        mockup: "new-product-pipeline.png",
      },
      {
        name: "Competitor ASIN Intelligence",
        description: "Track every variation, attribute, and category placement of competitor ASINs. Detect category drift, missing variants, and pricing patterns before they affect your launch decisions.",
        icon: Target,
        status: "available",
        spApiRoles: ["Catalog Items"],
        mockup: "anti-hijacking.png",
      },
    ],
  },
  {
    id: "operations",
    name: "Market Intelligence",
    tagline: "Know the market. Protect your brand.",
    badge: "Available Now",
    badgeColor: "amber",
    icon: Search,
    description: "Keyword research, competitor tracking, listing protection. Shared market data. No Amazon authorization required.",
    features: [
      {
        name: "Real-time Listing Protection",
        description: "When a hijacker takes your listing's Buy Box, every minute costs revenue and damages your brand. SkuFx subscribes to Amazon's ANY_OFFER_CHANGED notification via SP-API and delivers an alert within 30 seconds of an unauthorized seller appearing on your listing — including the hijacker's storefront link, price, and Buy Box status. One click starts your IP enforcement workflow.",
        icon: Shield,
        status: "available",
        spApiRoles: ["Notifications"],
        mockup: "anti-hijacking.png",
      },
      {
        name: "Price & BSR Monitor",
        description: "Track price and Best Seller Rank for any ASIN — your own or competitors' — with 4-hour refresh intervals. Set custom thresholds: get alerted when a competitor drops price by more than 10%, or when your own BSR drops outside a target range.",
        icon: TrendingUp,
        status: "available",
        spApiRoles: ["Product Pricing"],
        mockup: "seller-monitoring.png",
      },
      {
        name: "AI-Assisted Listing Publisher",
        description: "SkuFx generates optimized listing copy based on your keyword targets and competitor analysis. Once you approve the content, one click publishes it directly to your Seller Central listing via SP-API — no copy-paste, no format errors, no missed fields.",
        icon: FileEdit,
        status: "coming",
        comingQuarter: "Q3 2026",
        spApiRoles: ["Listings Items"],
        mockup: "fba-inventory.png",
      },
    ],
  },
  {
    id: "erp",
    name: "Business ERP",
    tagline: "Your private store data, fully synced.",
    badge: "Connecting via SP-API",
    badgeColor: "slate",
    icon: Box,
    description: "Sales analytics, FBA inventory, orders, profit dashboard. Your private store data, synced directly from Amazon Seller Central via SP-API.",
    features: [
      {
        name: "FBA Inventory Center",
        description: "See all your FBA inventory in one view: available units, reserved, inbound, and days-of-supply for each SKU. Color-coded alerts for stockout risk (< 30 days) and overstock (> 180 days). Integrated restock quantity calculator based on your 90-day sales velocity.",
        icon: Box,
        status: "coming",
        comingQuarter: "Q3 2026",
        spApiRoles: ["FBA Inventory", "FBA Inbound Eligibility"],
        mockup: "fba-inventory.png",
      },
      {
        name: "Order Management Center",
        description: "A unified order dashboard across all your brands and marketplaces. See daily/weekly/monthly revenue by ASIN, track order defect rates, and drill into regional sales distribution.",
        icon: ShoppingBag,
        status: "coming",
        comingQuarter: "Q4 2026",
        spApiRoles: ["Orders", "Reports"],
        mockup: "profit-dashboard.png",
      },
      {
        name: "Finance & Profit Dashboard",
        description: "Know your true profit per SKU — not just revenue. SkuFx pulls financial events (order revenue, FBA fees, refunds, adjustments) and combines them with your COGS data to show real margin by product, brand, and time period.",
        icon: BarChart3,
        status: "coming",
        comingQuarter: "Q1 2027",
        spApiRoles: ["Finances"],
        mockup: "profit-dashboard.png",
      },
    ],
  },
];

export const ROADMAP_PHASES = [
  {
    quarter: "Now",
    label: "Available",
    items: [
      "Product Studio (New Product Dev)",
      "Hero Image & Mockup",
      "Keyword Research & Competitors",
      "Listing Protection",
    ],
  },
  {
    quarter: "Q3 2026",
    label: "In Development",
    items: [
      "ERP Dashboard (FBA + Orders)",
      "FBA Inventory Center",
      "AI Listing Publisher",
    ],
  },
  {
    quarter: "Q4 2026",
    label: "Planned",
    items: [
      "Order Management Center",
      "Sales Performance Reports",
      "Restock Planner",
    ],
  },
  {
    quarter: "Q1 2027",
    label: "Planned",
    items: [
      "Finance & Profit Dashboard",
      "Settlement Reconciliation",
      "Multi-store ERP",
    ],
  },
];

export const SP_API_ROLES = [
  { name: "FBA Inventory", purpose: "stock levels, days-of-supply, alerts" },
  { name: "Orders", purpose: "daily count, revenue, regional breakdown" },
  { name: "Sales Reports", purpose: "traffic, conversion, BSR trends" },
  { name: "Finances", purpose: "fees, settlement, true per-SKU profit" },
];

export const COMPANY = {
  name: "Liaoyang Puwei Trading Co., Ltd.",
  yearsOnAmazon: "6+",
  modules: 10,
  abaKeywords: "350k+",
  emails: {
    support: "support@skufx.com",
    privacy: "privacy@skufx.com",
    security: "security@skufx.com",
    dpa: "dpa@skufx.com",
  },
};
