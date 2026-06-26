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
        description: "Every week, Amazon sellers manually export ABA reports, paste them into spreadsheets, and guess which keywords are worth targeting. SkuFx automates the analysis: upload your Brand Analytics (Search Query Performance) report and SkuFx computes an opportunity score for each search term — factoring in search frequency rank, click-share concentration, and conversion-share dispersion. No Amazon account connection required.",
        icon: Search,
        status: "available",
        spApiRoles: [],
        mockup: "keyword-analyzer.png",
      },
      {
        name: "New Product Development Pipeline",
        description: "SkuFx's 6-step new product pipeline walks you from market idea to launch-ready listing. Step 1 defines the target market; Step 2 identifies competitor reference products; Step 3 pulls authoritative product attributes from public marketplace data; Steps 4-5 generate formulation and packaging specs with AI; Step 6 outputs a complete listing draft. The whole process that used to take 2 weeks of manual research now takes 2-3 focused hours.",
        icon: Sparkles,
        status: "available",
        spApiRoles: [],
        mockup: "new-product-pipeline.png",
      },
      {
        name: "Competitor & Product Tracking",
        description: "Save any ASIN — a competitor's or your own — to a watchlist and SkuFx tracks its price, Best Seller Rank, rating, and Buy Box over time. Spot category drift, missing variants, and pricing patterns from clear trend charts before they affect your launch decisions.",
        icon: Target,
        status: "available",
        spApiRoles: [],
        mockup: "product-tracking.png",
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
    description: "Competitor & seller monitoring, listing protection, and ad report analysis. Built on shared market data and your own report uploads — no Amazon authorization required.",
    features: [
      {
        name: "Seller & Listing Monitoring",
        description: "Subscribe to any competitor seller and SkuFx watches their catalog — new and delisted ASINs, ratings, and price ranges — while guarding your own listings against hijackers. When an unauthorized seller appears on your Buy Box, you get an alert with their storefront link, price, and Buy Box status so you can start enforcement in one click.",
        icon: Shield,
        status: "available",
        spApiRoles: [],
        mockup: "seller-monitoring.png",
      },
      {
        name: "Ad Report Analysis",
        description: "Forward your Sponsored Products reports to SkuFx by email and it parses them automatically — tracking spend, clicks, CTR, and ACOS across daily, weekly, and monthly periods, with AI-generated diagnostics and trend flags. No Amazon account connection required.",
        icon: TrendingUp,
        status: "available",
        spApiRoles: [],
        mockup: "ad-analysis.png",
      },
      {
        name: "AI-Assisted Listing Publisher",
        description: "SkuFx generates optimized listing copy based on your keyword targets and competitor analysis. Once you approve the content, SkuFx publishes it directly to your Seller Central listing via SP-API — no copy-paste, no format errors, no missed fields.",
        icon: FileEdit,
        status: "coming",
        comingQuarter: "Q3 2026",
        spApiRoles: ["Product Listing"],
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
    description: "Performance dashboard, FBA inventory, orders, and profit. Available today from your uploaded settlement & ad reports — real-time sync via Amazon SP-API coming soon.",
    features: [
      {
        name: "FBA Inventory Center",
        description: "See all your FBA inventory in one view: available units, reserved, inbound, and days-of-supply for each SKU. Color-coded alerts for stockout risk (< 30 days) and overstock (> 180 days). Integrated restock quantity calculator based on your 90-day sales velocity.",
        icon: Box,
        status: "coming",
        comingQuarter: "Q3 2026",
        spApiRoles: ["Inventory & Order Tracking"],
        mockup: "fba-inventory.png",
      },
      {
        name: "Order Management Center",
        description: "A unified order dashboard across all your brands and marketplaces. See daily/weekly/monthly revenue by ASIN, track order defect rates, and drill into regional sales distribution.",
        icon: ShoppingBag,
        status: "coming",
        comingQuarter: "Q4 2026",
        spApiRoles: ["Inventory & Order Tracking", "Selling Partner Insights"],
        mockup: "profit-dashboard.png",
      },
      {
        name: "Finance & Profit Dashboard",
        description: "Know your true profit per SKU — not just revenue. SkuFx pulls financial events (order revenue, FBA fees, refunds, adjustments) and combines them with your COGS data to show real margin by product, brand, and time period.",
        icon: BarChart3,
        status: "coming",
        comingQuarter: "Q1 2027",
        spApiRoles: ["Finance & Accounting"],
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
  { name: "Inventory & Order Tracking", purpose: "Orders, FBA inventory levels & days-of-supply" },
  { name: "Selling Partner Insights", purpose: "Seller account & performance metrics" },
  { name: "Finance & Accounting", purpose: "P&L, settlements & profit reconciliation" },
  { name: "Product Listing", purpose: "Publish approved listings & A+ content (with your approval)" },
];

export const COMPANY = {
  name: "辽阳普维商贸有限公司 (Liaoyang Puwei Trading Co., Ltd.)",
  yearsOnAmazon: "6+",
  modules: 10,
  emails: {
    support: "support@skufx.com",
    privacy: "privacy@skufx.com",
    security: "security@skufx.com",
    dpa: "dpa@skufx.com",
  },
};
