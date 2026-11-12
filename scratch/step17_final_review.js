const fs = require('fs');

console.log('====================================================');
console.log('       STEP 17 COMPREHENSIVE VALIDATION SCRIPT       ');
console.log('====================================================\n');

// 1. Read compiled HTML for /products/ai-digital-human
const dihuavaHtml = fs.readFileSync('D:/WebProjects/hsglobalai/.next/server/app/products/ai-digital-human.html', 'utf8');

// Title Check
const titleMatch = dihuavaHtml.match(/<title>([^<]+)<\/title>/);
const title = titleMatch ? titleMatch[1] : '';
console.log('1. SEO Title:');
console.log(`   Text:   "${title}"`);
console.log(`   Length: ${title.replace('&amp;', '&').length} chars`);
console.log(`   Valid:  ${title === 'Offline AI Digital Human Software &amp; Platform | DIHUAVA'}\n`);

// Meta Description Check
const descMatch = dihuavaHtml.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/);
const desc = descMatch ? descMatch[1] : '';
console.log('2. Meta Description:');
console.log(`   Text:   "${desc}"`);
console.log(`   Length: ${desc.length} chars`);
console.log(`   Valid:  ${desc === 'DIHUAVA is an on-device, offline AI digital human software platform by HS Global AI. Runs locally on dedicated hardware with local RAG and 29+ languages.'}\n`);

// Canonical Check
const canonMatch = dihuavaHtml.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/);
const canonical = canonMatch ? canonMatch[1] : '';
console.log('3. Canonical URL:');
console.log(`   URL:    "${canonical}"`);
console.log(`   Valid:  ${canonical === 'https://www.hsglobalai.com/products/ai-digital-human'}\n`);

// OpenGraph & Twitter
const ogTitle = dihuavaHtml.match(/<meta[^>]+property=["']og:title["'][^>]+content=["']([^"']+)["']/)?.[1] || '';
const ogDesc = dihuavaHtml.match(/<meta[^>]+property=["']og:description["'][^>]+content=["']([^"']+)["']/)?.[1] || '';
const twTitle = dihuavaHtml.match(/<meta[^>]+name=["']twitter:title["'][^>]+content=["']([^"']+)["']/)?.[1] || '';
const twDesc = dihuavaHtml.match(/<meta[^>]+name=["']twitter:description["'][^>]+content=["']([^"']+)["']/)?.[1] || '';
console.log('4. Social Metadata:');
console.log(`   og:title:        "${ogTitle}"`);
console.log(`   og:description:  "${ogDesc}"`);
console.log(`   twitter:title:   "${twTitle}"`);
console.log(`   twitter:desc:    "${twDesc}"`);
console.log(`   Valid:           ${ogTitle === title && twTitle === title && ogDesc === desc && twDesc === desc}\n`);

// H1 Validation
const h1Matches = [...dihuavaHtml.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
console.log('5. H1 Heading:');
console.log(`   H1 Count: ${h1Matches.length}`);
h1Matches.forEach((m, idx) => {
  const cleanH1 = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  console.log(`   H1 #${idx+1}: "${cleanH1}"`);
});
console.log(`   Valid:    ${h1Matches.length === 1 && h1Matches[0][1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() === 'Offline AI Digital Human Software &amp; On-Device Platform'}\n`);

// H2 Headings
const h2Matches = [...dihuavaHtml.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/g)];
console.log('6. H2 Headings:');
console.log(`   H2 Count: ${h2Matches.length}`);
h2Matches.forEach((m, idx) => {
  const cleanH2 = m[1].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  console.log(`   H2 #${idx+1}: "${cleanH2}"`);
});

// JSON-LD Scripts Extraction
const jsonLdMatches = [...dihuavaHtml.matchAll(/<script[^>]+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/g)];
console.log(`\n7. JSON-LD Schemas (Found ${jsonLdMatches.length} blocks):`);
let softwareAppSchema = null;
let faqSchema = null;

jsonLdMatches.forEach((m, idx) => {
  try {
    const parsed = JSON.parse(m[1]);
    console.log(`   Block #${idx+1}: @type = "${parsed['@type']}"`);
    if (parsed['@type'] === 'SoftwareApplication') softwareAppSchema = parsed;
    if (parsed['@type'] === 'FAQPage') faqSchema = parsed;
  } catch (e) {
    console.log(`   Block #${idx+1}: JSON parse error: ${e.message}`);
  }
});

// SoftwareApplication details
console.log('\n8. SoftwareApplication Schema Validation:');
if (softwareAppSchema) {
  console.log(`   name:                   "${softwareAppSchema.name}"`);
  console.log(`   applicationCategory:    "${softwareAppSchema.applicationCategory}"`);
  console.log(`   applicationSubCategory: "${softwareAppSchema.applicationSubCategory}"`);
  console.log(`   operatingSystem:        "${softwareAppSchema.operatingSystem}"`);
  console.log(`   softwareRequirements:   "${softwareAppSchema.softwareRequirements}"`);
  console.log(`   publisher.@id:          "${softwareAppSchema.publisher?.['@id']}"`);
  console.log(`   provider.@id:           "${softwareAppSchema.provider?.['@id']}"`);
  console.log(`   alternateName:          ${JSON.stringify(softwareAppSchema.alternateName)}`);
} else {
  console.log('   [ERROR] SoftwareApplication schema NOT FOUND!');
}

// FAQ Comparison: Visible vs Schema
console.log('\n9. FAQ Comparison: Visible Accordion vs FAQPage Schema:');
if (faqSchema) {
  const schemaQuestions = faqSchema.mainEntity || [];
  console.log(`   Schema Questions Count: ${schemaQuestions.length}`);
  
  // Read DihuavaClient.tsx to check visible faqs array
  const clientCode = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');
  const clientFaqs = [];
  const qMatches = [...clientCode.matchAll(/q:\s*"([^"]+)",\s*a:\s*"([^"]+)"/g)];
  qMatches.forEach(m => clientFaqs.push({ q: m[1], a: m[2] }));
  console.log(`   Visible FAQs Count:     ${clientFaqs.length}`);

  let allMatch = clientFaqs.length === schemaQuestions.length;
  clientFaqs.forEach((cf, idx) => {
    const sq = schemaQuestions[idx];
    const qMatch = sq && sq.name === cf.q;
    const aMatch = sq && sq.acceptedAnswer?.text === cf.a;
    if (!qMatch || !aMatch) allMatch = false;
    console.log(`   Q${idx+1}: "${cf.q.slice(0, 40)}..."`);
    console.log(`       Question Match: ${qMatch} | Answer Match: ${aMatch}`);
  });
  console.log(`   All FAQs Perfectly Synchronized: ${allMatch}\n`);
} else {
  console.log('   [ERROR] FAQPage schema NOT FOUND!');
}

// 10. Check all 5 internal links across compiled HTML files
console.log('10. Internal Links Verification Across Compiled HTML:');
const linkAudits = [
  {
    name: 'Retail Industry Page',
    path: 'D:/WebProjects/hsglobalai/.next/server/app/industries/retail.html',
    expectedAnchor: 'offline AI digital human software platform',
    target: '/products/ai-digital-human'
  },
  {
    name: 'Blog Post 6 (Retail)',
    path: 'D:/WebProjects/hsglobalai/.next/server/app/blog/how-ai-in-retail.html',
    expectedAnchor: 'AI digital human software for retail kiosks',
    target: '/products/ai-digital-human'
  },
  {
    name: 'Blog Post 11 (Fleet Management)',
    path: 'D:/WebProjects/hsglobalai/.next/server/app/blog/ai-digital-human-fleet-management.html',
    expectedAnchor: 'enterprise digital human software',
    target: '/products/ai-digital-human'
  },
  {
    name: 'Blog Post 7 (Offline AI)',
    path: 'D:/WebProjects/hsglobalai/.next/server/app/blog/why-100-offline-ai.html',
    expectedAnchor: 'on-device AI digital human platform',
    target: '/products/ai-digital-human'
  },
  {
    name: 'Platform Subpage (Document Intelligence)',
    path: 'D:/WebProjects/hsglobalai/.next/server/app/products/ai-digital-human/document-intelligence.html',
    expectedAnchor: 'DIHUAVA offline AI digital human software platform',
    target: '/products/ai-digital-human'
  }
];

linkAudits.forEach(la => {
  if (fs.existsSync(la.path)) {
    const html = fs.readFileSync(la.path, 'utf8');
    const hasTarget = html.includes(la.target);
    const hasAnchor = html.includes(la.expectedAnchor);
    console.log(`   - ${la.name}:`);
    console.log(`       File exists: true`);
    console.log(`       Contains href="${la.target}": ${hasTarget}`);
    console.log(`       Contains anchor "${la.expectedAnchor}": ${hasAnchor}`);
    console.log(`       Verified Link: ${hasTarget && hasAnchor}`);
  } else {
    console.log(`   - ${la.name}: [ERROR] File ${la.path} not found!`);
  }
});

