"""Generate /public/og/og-default.png + /public/favicon.ico + /public/logo.svg.

Run once. Re-run if branding changes.
"""
import os
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
os.makedirs(os.path.join(PUB, "og"), exist_ok=True)
os.makedirs(os.path.join(PUB, "icons"), exist_ok=True)

# --- og-default.png 1200x630 ---
img = Image.new("RGB", (1200, 630), "#fdfcf8")
d = ImageDraw.Draw(img)
# amber gradient bar top
for x in range(1200):
    r = int(245 + (234 - 245) * x / 1200)
    g = int(158 + (88 - 158) * x / 1200)
    b = int(11 + (12 - 11) * x / 1200)
    d.line([(x, 0), (x, 6)], fill=(r, g, b))

# Fx logo block
d.rounded_rectangle([100, 200, 220, 320], radius=24, fill="#f59e0b")

try:
    font_brand = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 48)
    font_h1 = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 56)
    font_sub = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 24)
except Exception:
    font_brand = font_h1 = font_sub = ImageFont.load_default()

d.text((124, 232), "Fx", fill="#0f172a", font=font_brand)
d.text((100, 360), "SkuFx", fill="#0f172a", font=font_brand)
d.text((100, 420), "The Amazon Operator's Platform", fill="#0f172a", font=font_h1)
d.text((100, 510), "From keyword research to ERP — one unified platform.", fill="#64748b", font=font_sub)
img.save(os.path.join(PUB, "og", "og-default.png"))
print("og/og-default.png")

# --- favicon.ico 32x32 ---
fav = Image.new("RGB", (32, 32), "#f59e0b")
d2 = ImageDraw.Draw(fav)
try:
    fav_font = ImageFont.truetype("/System/Library/Fonts/Helvetica.ttc", 22)
except Exception:
    fav_font = ImageFont.load_default()
d2.text((4, 2), "Fx", fill="#0f172a", font=fav_font)
fav.save(os.path.join(PUB, "favicon.ico"), format="ICO")
print("favicon.ico")

# --- logo.svg ---
svg = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80 80">
  <defs>
    <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#f59e0b"/>
      <stop offset="100%" stop-color="#d97706"/>
    </linearGradient>
  </defs>
  <rect width="80" height="80" rx="16" fill="url(#g)"/>
  <text x="40" y="52" font-family="Helvetica, Arial, sans-serif" font-weight="800" font-size="34" fill="#0f172a" text-anchor="middle">Fx</text>
</svg>
'''
with open(os.path.join(PUB, "logo.svg"), "w") as f:
    f.write(svg)
print("logo.svg")
