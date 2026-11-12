const fs = require('fs');

console.log('=== TASK 6: HTML, CANONICAL, & STRUCTURED DATA AUDIT ===\n');

const routes = [
  { url: '/products/ai-digital-human', file: '.next/server/app/products/ai-digital-human.html' },
  { url: '/products/ai-digital-human/multilingual-support', file: '.next/server/app/products/ai-digital-human/multilingual-support.html' },
  { url: '/products/holographic-display', file: '.next/server/app/products/holographic-display.html' },
  { url: '/products/spatial-display', file: '.next/server/app/products/spatial-display.html' },
  { url: '/industries/retail', file: '.next/server/app/industries/retail.html' }
];

routes.forEach(r => {
  const html = fs.readFileSync(r.file, 'utf8');
  console.log(`[ROUTE: ${r.url}]`);
  
  // Title
  const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1];
  console.log('  Title:      ', title);

  // Description
  const desc = (html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) || [])[1];
  console.log('  Description:', desc ? desc.slice(0, 100) + '...' : 'NONE');

  // H1s
  const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim().replace(/\s+/g, ' '));
  console.log(`  H1 Count:    ${h1Matches.length} -> "${h1Matches.join(' | ')}"`);

  // Canonical
  const canon = (html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) || [])[1];
  console.log('  Canonical:  ', canon);

  // JSON-LD blocks
  const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`  JSON-LD:     ${jsonLdMatches.length} blocks found`);
  jsonLdMatches.forEach((b, idx) => {
    try {
      const parsed = JSON.parse(b[1]);
      const types = Array.isArray(parsed) ? parsed.map(p => p['@type']).join(', ') : parsed['@type'];
      console.log(`    Block #${idx + 1}: @type = ${types}`);
    } catch(e) {
      console.error(`    Block #${idx + 1}: JSON PARSE ERROR!`);
    }
  });

  console.log('');
});
