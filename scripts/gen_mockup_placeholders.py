"""Generate 8 mockup placeholder PNGs.

Replace public/mockups/<filename>.png with Figma exports later — same names + sizes.

Run: python3 scripts/gen_mockup_placeholders.py
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
OUT = os.path.join(ROOT, "public", "mockups")
os.makedirs(OUT, exist_ok=True)

MOCKUPS = [
    ("dashboard-overview.png", 1440, 900),
    ("keyword-analyzer.png", 1280, 800),
    ("new-product-pipeline.png", 1280, 800),
    ("anti-hijacking.png", 1280, 800),
    ("fba-inventory.png", 1280, 800),
    ("profit-dashboard.png", 1280, 800),
    ("mobile-pwa.png", 750, 1334),
    ("seller-monitoring.png", 1280, 800),
]

try:
    font_big = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 32)
    font_small = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 20)
except Exception:
    font_big = font_small = ImageFont.load_default()

for fname, w, h in MOCKUPS:
    img = Image.new("RGB", (w, h), "#e2e8f0")
    d = ImageDraw.Draw(img)
    d.rectangle([20, 20, w - 20, h - 20], outline="#94a3b8", width=2)
    # corner ticks
    d.line([(40, 40), (80, 40)], fill="#64748b", width=2)
    d.line([(40, 40), (40, 80)], fill="#64748b", width=2)
    d.line([(w - 40, h - 40), (w - 80, h - 40)], fill="#64748b", width=2)
    d.line([(w - 40, h - 40), (w - 40, h - 80)], fill="#64748b", width=2)
    # center labels
    label1 = fname
    label2 = f"{w} x {h} · Figma export goes here"
    b1 = d.textbbox((0, 0), label1, font=font_big)
    b2 = d.textbbox((0, 0), label2, font=font_small)
    d.text(((w - (b1[2] - b1[0])) // 2, h // 2 - 30), label1, fill="#1e293b", font=font_big)
    d.text(((w - (b2[2] - b2[0])) // 2, h // 2 + 20), label2, fill="#475569", font=font_small)
    img.save(os.path.join(OUT, fname))
    print(f"{fname}  ({w}x{h})")

print(f"\n{len(MOCKUPS)} placeholders in public/mockups/")
print("Replace with Figma exports when ready (keep filenames + dimensions).")
