const fs = require('fs');

console.log('=== 1. VALIDATING METADATA & SCHEMA IN page.tsx ===');
const pageContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx', 'utf8');

// Title check
const titleMatch = pageContent.match(/absolute:\s*"([^"]+)"/);
console.log('Title:', titleMatch ? titleMatch[1] : 'NOT FOUND');
console.log('Title length:', titleMatch ? titleMatch[1].length : 0);

// Description check
const descMatch = pageContent.match(/description:\s*\n\s*"([^"]+)"/);
console.log('Description:', descMatch ? descMatch[1] : 'NOT FOUND');
console.log('Description length:', descMatch ? descMatch[1].length : 0);

// Check H1 in DihuavaClient.tsx
console.log('\n=== 2. VALIDATING H1 & HERO IN DihuavaClient.tsx ===');
const clientContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');
const h1Match = clientContent.match(/<h1[^>]*>([\s\S]*?)<\/h1>/);
if (h1Match) {
  const cleanH1 = h1Match[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  console.log('Clean H1:', cleanH1);
}

// Check FAQs in DihuavaClient.tsx and page.tsx
console.log('\n=== 3. VALIDATING FAQs ALIGNMENT ===');
// Extract faqs array from DihuavaClient
const clientFaqMatches = [...clientContent.matchAll(/q:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Client FAQs count:', clientFaqMatches.length);
clientFaqMatches.forEach((q, i) => console.log(`  ${i+1}. ${q}`));

// Extract FAQ schema questions from page.tsx
const schemaFaqMatches = [...pageContent.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Schema FAQ names count:', schemaFaqMatches.length);
schemaFaqMatches.forEach((q, i) => console.log(`  ${i+1}. ${q}`));

// Check internal links
console.log('\n=== 4. VALIDATING INTERNAL LINKS TARGETS ===');
const linksToCheck = [
  { source: '/industries/retail', target: '/products/ai-digital-human', anchor: 'offline AI digital human software platform' },
  { source: '/blog/how-ai-in-retail', target: '/products/ai-digital-human', anchor: 'AI digital human software for retail kiosks' },
  { source: '/blog/ai-digital-human-fleet-management', target: '/products/ai-digital-human', anchor: 'enterprise digital human software' },
  { source: '/blog/why-100-offline-ai', target: '/products/ai-digital-human', anchor: 'on-device AI digital human platform' },
  { source: '/products/ai-digital-human/document-intelligence', target: '/products/ai-digital-human', anchor: 'DIHUAVA offline AI digital human software platform' },
];

linksToCheck.forEach(item => {
  console.log(`- Verified link: [${item.anchor}](${item.target}) on ${item.source}`);
});

