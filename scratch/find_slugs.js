const fs = require('fs');
const c = fs.readFileSync('src/app/products/ai-digital-human/[slug]/PlatformClient.tsx', 'utf8');
const slugs = [...c.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Slugs:', slugs);
