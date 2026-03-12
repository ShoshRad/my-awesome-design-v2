#!/bin/bash
set -e

REPO_NAME="my-awesome-design"
BASE="/$REPO_NAME"
SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PLAYGROUND_DIR="$SCRIPT_DIR/playground"
OUT_DIR="$PLAYGROUND_DIR/out"

echo "=== Step 1: Build static export ==="
cd "$PLAYGROUND_DIR"

# Temporarily set config for GH Pages build
cat > next.config.ts << 'CONF'
import type { NextConfig } from "next";
const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-awesome-design',
  trailingSlash: true,
  images: { unoptimized: true },
};
export default nextConfig;
CONF

npx next build

# Restore original config
cat > next.config.ts << 'CONF'
import type { NextConfig } from "next";
const nextConfig: NextConfig = {};
export default nextConfig;
CONF

echo "=== Step 2: Fix ALL asset paths ==="
cd "$OUT_DIR"

# Fix every possible pattern of /assets/ references:
# 1. "/assets/  (double-quoted, in JS props and HTML attributes)
# 2. '/assets/  (single-quoted)
# 3. url(/assets/  (CSS background-image without quotes)
# 4. url("/assets/  (CSS background-image with double quotes)
# 5. url('/assets/  (CSS background-image with single quotes)
# 6. url(&#x27;/assets/  (HTML-encoded single quote)
# 7. url(&#39;/assets/  (another HTML encoding of single quote)

find . \( -name "*.html" -o -name "*.js" -o -name "*.txt" -o -name "*.css" \) -exec sed -i '' \
  -e "s|\"\/assets\/|\"/my-awesome-design/assets/|g" \
  -e "s|'\/assets\/|'/my-awesome-design/assets/|g" \
  -e "s|url(\/assets\/|url(/my-awesome-design/assets/|g" \
  -e "s|url(\"\/assets\/|url(\"/my-awesome-design/assets/|g" \
  -e "s|url('\/assets\/|url('/my-awesome-design/assets/|g" \
  -e "s|url(&#x27;\/assets\/|url(\&#x27;/my-awesome-design/assets/|g" \
  -e "s|url(&#39;\/assets\/|url(\&#39;/my-awesome-design/assets/|g" \
  {} +

echo "=== Step 3: Fix navigation links ==="
# Fix sidebar links (href:"/path" -> href:"/base/path/")
find . -name "*.js" -exec sed -i '' \
  -e 's|href:"/preview"|href:"/my-awesome-design/preview/"|g' \
  -e 's|href:"/business-insider"|href:"/my-awesome-design/business-insider/"|g' \
  -e 's|href:"/business-insider-current"|href:"/my-awesome-design/business-insider-current/"|g' \
  -e 's|href:"/"|href:"/my-awesome-design/"|g' \
  {} +

echo "=== Step 4: Verify no broken paths remain ==="
BROKEN=0
for f in $(find . \( -name "*.html" -o -name "*.js" \)); do
  # Remove all correctly prefixed paths, then check for remaining /assets/
  count=$(sed "s|$REPO_NAME/assets/|FIXED/|g" "$f" | grep -c '/assets/' || true)
  if [ "$count" -gt 0 ]; then
    echo "WARNING: $f has $count unfixed /assets/ references"
    sed "s|$REPO_NAME/assets/|FIXED/|g" "$f" | grep -o '.\{20\}/assets/.\{20\}' | head -3
    BROKEN=1
  fi
done

if [ "$BROKEN" -eq 0 ]; then
  echo "All paths verified clean!"
fi

echo "=== Step 5: Copy to repo root ==="
cd "$SCRIPT_DIR"

# Save original demo
[ -f demo-original.html ] || cp index.html demo-original.html 2>/dev/null || true

# Clean old deployment
rm -rf _next _not-found 404 404.html __next.* business-insider business-insider-current preview index.html index.txt

# Copy everything from build output
cp -r "$OUT_DIR"/* .

echo "=== Step 6: Ensure assets are complete ==="
cp -r playground/public/assets/business-insider assets/ 2>/dev/null || true
cp -r playground/public/assets/logos assets/ 2>/dev/null || true
cp playground/public/assets/images/ext-*.jpg assets/images/ 2>/dev/null || true

# Ensure .nojekyll exists
touch .nojekyll

echo "=== Done! Ready to commit and push ==="
