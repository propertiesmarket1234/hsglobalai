const fs = require('fs');

const content = fs.readFileSync('src/app/products/ai-digital-human/[slug]/PlatformClient.tsx', 'utf8');

// Find all href matches
const matches = [...content.matchAll(/href=\{lPath\(([^)]+)\)\}/g)].map(m => m[1]);
console.log("Found lPath links in PlatformClient.tsx:", [...new Set(matches)]);

const staticHrefMatches = [...content.matchAll(/href=[\"']([^\"']+)[\"']/g)].map(m => m[1]);
console.log("Found static href links in PlatformClient.tsx:", [...new Set(staticHrefMatches)]);
