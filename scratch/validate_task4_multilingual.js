const fs = require('fs');

console.log('=== VERIFYING MULTILINGUAL AI AVATAR PAGE ===\n');

const filePath = '.next/server/app/products/ai-digital-human/multilingual-support.html';
const html = fs.readFileSync(filePath, 'utf8');

// Title
const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
const title = titleMatch ? titleMatch[1] : null;

// Description
const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
const desc = descMatch ? descMatch[1] : null;

// H1
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
const rawH1 = h1Match ? h1Match[1] : null;
const cleanH1 = rawH1 ? rawH1.replace(/<[^>]+>/g, '').trim() : null;

// Canonical
const canonicalMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
const canonical = canonicalMatch ? canonicalMatch[1] : null;

// Hreflangs
const hreflangs = [...html.matchAll(/<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi)].map(m => `${m[1]} -> ${m[2]}`);

console.log('1. Metadata:');
console.log('  Title:      ', title);
console.log('  Description:', desc);
console.log('  H1:         ', cleanH1);
console.log('  Canonical:  ', canonical);
console.log('  Hreflang Alternates (Count:', hreflangs.length, '):');
hreflangs.forEach(h => console.log('   ', h));

// Check entity rendering
console.log('\n2. Entity Encoding Check:');
console.log('  Raw H1 in HTML:', rawH1);
const rawH1HasDoubleEscape = rawH1 && rawH1.includes('&amp;amp;');
console.log('  Double escape in H1 (&amp;amp;):', rawH1HasDoubleEscape);

// Check localized subpages
console.log('\n3. Localized Subpage Consistency:');
['zh', 'ru', 'es', 'fr'].forEach(lang => {
  const locPath = `.next/server/app/${lang}/products/ai-digital-human/multilingual-support.html`;
  if (fs.existsSync(locPath)) {
    const locHtml = fs.readFileSync(locPath, 'utf8');
    const locTitle = (locHtml.match(/<title>([^<]+)<\/title>/i) || [])[1];
    const locH1 = (locHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
    console.log(`  [${lang.toUpperCase()}] Title: "${locTitle}", H1: "${locH1}"`);
  } else {
    console.log(`  [${lang.toUpperCase()}] Not pre-rendered at ${locPath}`);
  }
});

// Compare keyword focus: Main DIHUAVA page vs Multilingual Subpage
console.log('\n4. Keyword Differentiation / Cannibalization Check:');
const dihuavaHtml = fs.readFileSync('.next/server/app/products/ai-digital-human.html', 'utf8');
const dihuavaTitle = (dihuavaHtml.match(/<title>([^<]+)<\/title>/i) || [])[1];
const dihuavaH1 = (dihuavaHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
console.log('  Main DIHUAVA Page:');
console.log('    Title: ', dihuavaTitle);
console.log('    H1:    ', dihuavaH1);
console.log('    Primary Intent: offline AI digital human software / platform');
console.log('  Multilingual Subpage:');
console.log('    Title: ', title);
console.log('    H1:    ', cleanH1);
console.log('    Primary Intent: multilingual AI avatar software & speech synthesis');
