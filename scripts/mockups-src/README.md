# Mockup Sources

The 8 dashboard mockups shown on the landing site (`public/mockups/*.png`) are
rendered from the HTML files in this folder via headless Chrome.

## Why HTML (not Figma)?

- **No real data leakage** — all content is hardcoded Demo data (NovaBrand /
  ProVital / PureLife brands, fake ASINs `B0A1X2Y3Z4` etc.)
- **One-shot regeneration** — change a number, re-run the script, all 8 PNGs
  update in seconds
- **Same design tokens as landing site** — `theme.css` mirrors the Bento Light
  palette (cream-50 / amber-500 / slate-900) used in the React components

## Files

| File | Renders to | Dimensions |
|---|---|---|
| `theme.css` | (shared CSS, no PNG) | — |
| `dashboard-overview.html` | `dashboard-overview.png` | 1440×900 |
| `keyword-analyzer.html` | `keyword-analyzer.png` | 1280×800 |
| `new-product-pipeline.html` | `new-product-pipeline.png` | 1280×800 |
| `anti-hijacking.html` | `anti-hijacking.png` | 1280×800 |
| `fba-inventory.html` | `fba-inventory.png` | 1280×800 (Coming Q3 2026 ribbon) |
| `profit-dashboard.html` | `profit-dashboard.png` | 1280×800 (Coming Q1 2027 ribbon) |
| `seller-monitoring.html` | `seller-monitoring.png` | 1280×800 |
| `mobile-pwa.html` | `mobile-pwa.png` | 750×1334 (iOS-style frame) |

## Regenerate

```bash
./scripts/screenshot-mockups.sh
git add public/mockups/
git commit -m "feat: refresh mockups"
git push
```

Vercel auto-redeploys.

## Preview a single mockup in browser

```bash
open scripts/mockups-src/dashboard-overview.html
```

Or use any HTTP server (`python3 -m http.server`, etc.) and open
`http://localhost:8000/scripts/mockups-src/dashboard-overview.html`.

## Customize

- **Brand names / ASINs / numbers** — edit the relevant `.html` directly
- **Colors / fonts / spacing** — edit `theme.css` (changes apply to all 8 mockups)
- **Add a new mockup** — copy an existing HTML as template, add a line to
  `TARGETS` in `scripts/screenshot-mockups.sh`
- **Different output dimensions** — edit the `WIDTH:HEIGHT` in the `TARGETS` array

## Requirements

- Google Chrome installed (macOS default: `/Applications/Google Chrome.app/...`)
- If using a different Chrome path: `CHROME=/path/to/chrome ./scripts/screenshot-mockups.sh`
