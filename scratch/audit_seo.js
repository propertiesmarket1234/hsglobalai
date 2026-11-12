const fs = require('fs');

const html = fs.readFileSync('.next/server/app/products/ai-digital-human.html', 'utf8');

console.log('=== PRE-DEPLOYMENT AUDIT VALIDATION ===\n');

// 1. Check H1 count
const h1Matches = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)];
console.log(`1. H1 Count: ${h1Matches.length}`);
h1Matches.forEach((m, i) => console.log(`   H1 [${i+1}]: "${m[1].replace(/<[^>]+>/g, '').trim()}"`));

// 2. Title & Meta Description
const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']*)["']/i);
console.log(`\n2. Title (${titleMatch ? titleMatch[1].length : 0} chars): "${titleMatch ? titleMatch[1] : 'MISSING'}"`);
console.log(`   Description (${descMatch ? descMatch[1].length : 0} chars): "${descMatch ? descMatch[1] : 'MISSING'}"`);

// 3. Canonical and Alternates
const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']*)["']/i);
console.log(`\n3. Canonical: ${canonicalMatch ? canonicalMatch[1] : 'MISSING'}`);
const hreflangMatches = [...html.matchAll(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']*)["'][^>]*href=["']([^"']*)["']/gi)];
console.log(`   Hreflang count: ${hreflangMatches.length}`);
hreflangMatches.forEach(m => console.log(`     hreflang="${m[1]}" -> ${m[2]}`));

// 4. JSON-LD scripts
const jsonLdMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
console.log(`\n4. JSON-LD Blocks: ${jsonLdMatches.length}`);
let faqPageEntities = [];
jsonLdMatches.forEach((m, idx) => {
  try {
    const data = JSON.parse(m[1]);
    const type = data['@type'] || (data['@graph'] ? 'Graph' : 'Unknown');
    console.log(`   Block ${idx + 1}: @type = ${type}`);
    if (data['@type'] === 'FAQPage') {
      faqPageEntities = data.mainEntity || [];
    }
  } catch (e) {
    console.error(`   Block ${idx + 1}: JSON PARSE ERROR: ${e.message}`);
  }
});

// 5. FAQ 1:1 Parity
console.log(`\n5. FAQ Schema Entities: ${faqPageEntities.length}`);
faqPageEntities.forEach((item, idx) => {
  const q = item.name;
  const a = item.acceptedAnswer ? item.acceptedAnswer.text : '';
  const qFound = html.includes(q);
  const aFound = html.includes(a.slice(0, 50));
  console.log(`   FAQ ${idx + 1}: "${q}"`);
  console.log(`     Question visible: ${qFound} | Answer visible: ${aFound}`);
});

console.log('\n=== AUDIT VALIDATION COMPLETE ===');
