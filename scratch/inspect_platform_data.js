const fs = require('fs');

const content = fs.readFileSync('src/app/products/ai-digital-human/[slug]/PlatformClient.tsx', 'utf8');

// Find all keys in platformData
const keyMatches = [...content.matchAll(/\"([a-z0-9-]+)\":\s*\{\s*slug:\s*\"([^\"]+)\"/g)];
console.log("Found platformData entries:", keyMatches.map(m => m[1]));

for (const match of keyMatches) {
  const slug = match[1];
  const startIdx = match.index;
  // find next slug match
  const endIdx = content.indexOf('};', startIdx + 100);
  const chunk = content.slice(startIdx, endIdx);
  const title = chunk.match(/title:\s*\"([^\"]+)\"/)?.[1];
  const nextSlug = chunk.match(/nextFeatureSlug:\s*\"([^\"]+)\"/)?.[1];
  const nextName = chunk.match(/nextFeatureName:\s*\"([^\"]+)\"/)?.[1];
  console.log(`[${slug}] -> Next: ${nextName} (${nextSlug})`);
}
