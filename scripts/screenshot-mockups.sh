#!/bin/bash
# Render the 8 dashboard mockups (scripts/mockups-src/*.html) to PNG via headless Chrome.
# Outputs PNGs directly into public/mockups/ (overwrites previous versions).
#
# Usage: ./scripts/screenshot-mockups.sh
#
# Requires Google Chrome installed at the standard macOS path. Override with
# CHROME=/path/to/chrome ./scripts/screenshot-mockups.sh on other systems.

set -e

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
REPO_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"

CHROME="${CHROME:-/Applications/Google Chrome.app/Contents/MacOS/Google Chrome}"
SRC_DIR="$REPO_ROOT/scripts/mockups-src"
OUT_DIR="$REPO_ROOT/public/mockups"

if [ ! -x "$CHROME" ]; then
  echo "Chrome not found at: $CHROME"
  echo "Set CHROME=/path/to/chrome and re-run."
  exit 1
fi

mkdir -p "$OUT_DIR"

# name : width : height
TARGETS=(
  "dashboard-overview:1440:900"
  "keyword-analyzer:1280:800"
  "new-product-pipeline:1280:800"
  "anti-hijacking:1280:800"
  "fba-inventory:1280:800"
  "profit-dashboard:1280:800"
  "seller-monitoring:1280:800"
  "mobile-pwa:750:1334"
)

for t in "${TARGETS[@]}"; do
  IFS=':' read -r name w h <<< "$t"
  src="$SRC_DIR/${name}.html"
  dst="$OUT_DIR/${name}.png"
  if [ ! -f "$src" ]; then
    echo "SKIP $name (no HTML at $src)"
    continue
  fi
  echo "→ $name (${w}x${h})"
  "$CHROME" \
    --headless=new \
    --disable-gpu \
    --hide-scrollbars \
    --force-device-scale-factor=2 \
    --window-size="${w},${h}" \
    --screenshot="$dst" \
    --virtual-time-budget=2000 \
    "file://$src" 2>/dev/null
  if [ -f "$dst" ]; then
    bytes=$(stat -f%z "$dst" 2>/dev/null || stat -c%s "$dst")
    printf "   wrote %s bytes\n" "$bytes"
  fi
done

echo ""
echo "Done. PNGs in $OUT_DIR"
echo "Commit + push to trigger Vercel auto-deploy:"
echo "  git add public/mockups/ && git commit -m 'feat: refresh mockups' && git push"
