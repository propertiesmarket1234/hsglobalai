const fs = require('fs');

console.log('=== STEP 8 BUILD VERIFICATION ===\n');

// 1. Multilingual subpage
const multiHtml = fs.readFileSync('.next/server/app/products/ai-digital-human/multilingual-support.html', 'utf8');
const multiTitle = (multiHtml.match(/<title>([^<]+)<\/title>/i) || [])[1];
const multiDesc = (multiHtml.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) || [])[1];
const multiH1 = (multiHtml.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i) || [])[1]?.replace(/<[^>]+>/g, '').trim();
console.log('--- 1. MULTILINGUAL CAPABILITY SUBPAGE ---');
console.log('Title:      ', multiTitle);
console.log('Description:', multiDesc);
console.log('H1 Heading: ', multiH1);

// 2. Holographic Display
const holoHtml = fs.readFileSync('.next/server/app/products/holographic-display.html', 'utf8');
const holoLinks = [...holoHtml.matchAll(/href=["'](\/products\/ai-digital-human[^"']*)["']/gi)].map(m => m[1]);
console.log('\n--- 2. HOLOGRAPHIC DISPLAY PAGE ---');
console.log('Links to DIHUAVA count:', holoLinks.length, holoLinks);

// 3. Spatial Display
const spatialHtml = fs.readFileSync('.next/server/app/products/spatial-display.html', 'utf8');
const spatialAnchors = [...spatialHtml.matchAll(/<a[^>]*href=["']\/products\/ai-digital-human["'][^>]*>([\s\S]*?)<\/a>/gi)].map(m => m[1].replace(/<[^>]+>/g, '').trim());
console.log('\n--- 3. SPATIAL DISPLAY ANCHOR TEXTS ---');
console.log(spatialAnchors);

// 4. Industry Pages
const industries = ['banking', 'retail', 'corporate', 'healthcare', 'tourism', 'education'];
console.log('\n--- 4. INDUSTRY PAGES DIHUAVA BANNER ---');
industries.forEach(ind => {
  const html = fs.readFileSync(`.next/server/app/industries/${ind}.html`, 'utf8');
  const hasBanner = html.includes('Powered by DIHUAVA Offline AI Digital Human Software');
  const hasLink = html.includes('href="/products/ai-digital-human"');
  console.log(`  /industries/${ind}: Banner = ${hasBanner}, Links to DIHUAVA = ${hasLink}`);
});

// 5. DIHUAVA Kiosk Architecture Strip
const dihuavaHtml = fs.readFileSync('.next/server/app/products/ai-digital-human.html', 'utf8');
const hasKioskArch = dihuavaHtml.includes('Engineered for High-Traffic Public Kiosks');
const hasDualNav = dihuavaHtml.includes('Touch &amp; Voice Dual Navigation') || dihuavaHtml.includes('Touch & Voice Dual Navigation');
const hasGpuCard = dihuavaHtml.includes('Embedded GPU Hardware');
const hasOfflineCard = dihuavaHtml.includes('Autonomous Offline Reliability');
console.log('\n--- 5. DIHUAVA KIOSK DEPLOYMENT SECTION ---');
console.log('  Kiosk Architecture Heading: ', hasKioskArch);
console.log('  Touch & Voice Dual Nav Card:', hasDualNav);
console.log('  Embedded GPU Hardware Card: ', hasGpuCard);
console.log('  Autonomous Offline Card:    ', hasOfflineCard);
