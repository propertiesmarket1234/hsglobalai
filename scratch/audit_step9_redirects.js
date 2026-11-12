const fs = require('fs');
const path = require('path');

const configPath = path.join(__dirname, '..', 'next.config.ts');
const configContent = fs.readFileSync(configPath, 'utf8');

const sourceMatches = [...configContent.matchAll(/source:\s*"([^"]+)"/g)].map(m => m[1]);
const destMatches = [...configContent.matchAll(/destination:\s*"([^"]+)"/g)].map(m => m[1]);

console.log('=== REDIRECT RULES IN NEXT.CONFIG.TS ===');
console.log(`Total rules in file: ${sourceMatches.length}`);

// Check duplicates
const seen = new Set();
const duplicates = [];
sourceMatches.forEach(s => {
  if (seen.has(s)) duplicates.push(s);
  seen.add(s);
});
console.log('Duplicates in next.config.ts:', duplicates.length > 0 ? duplicates : 'NONE');

// Original 15 rules
const original15 = [
  { s: "/ai-products", d: "/products" },
  { s: "/platform/avatar-customization", d: "/products/ai-digital-human/avatar-customization" },
  { s: "/platform/document-intelligence", d: "/products/ai-digital-human/document-intelligence" },
  { s: "/platform/multilingual-support", d: "/products/ai-digital-human/multilingual-support" },
  { s: "/platform/persona-management", d: "/products/ai-digital-human/persona-management" },
  { s: "/platform/ai-product-catalog", d: "/products/ai-digital-human/ai-product-catalog" },
  { s: "/platform/:slug*", d: "/products/ai-digital-human/:slug*" },
  { s: "/platform", d: "/products/ai-digital-human" },
  { s: "/products/dihuava/avatar-customization", d: "/products/ai-digital-human/avatar-customization" },
  { s: "/products/dihuava/document-intelligence", d: "/products/ai-digital-human/document-intelligence" },
  { s: "/products/dihuava/multilingual-support", d: "/products/ai-digital-human/multilingual-support" },
  { s: "/products/dihuava/persona-management", d: "/products/ai-digital-human/persona-management" },
  { s: "/products/dihuava/ai-product-catalog", d: "/products/ai-digital-human/ai-product-catalog" },
  { s: "/products/dihuava/:slug*", d: "/products/ai-digital-human/:slug*" },
  { s: "/products/dihuava", d: "/products/ai-digital-human" },
];

console.log('\n--- VERIFYING ORIGINAL 15 RULES ---');
let origPass = true;
original15.forEach((r, idx) => {
  const match = sourceMatches[idx] === r.s && destMatches[idx] === r.d;
  if (!match) origPass = false;
  console.log(`${idx + 1}. [${match ? 'PASS' : 'FAIL'}] ${r.s} -> ${r.d}`);
});
console.log('Original 15 rules preserved exactly in place:', origPass);

// New 18 rules
const new18 = [
  { s: "/holographic-ai-avatar", d: "/products/holographic-display" },
  { s: "/contact-us", d: "/contact" },
  { s: "/about-us", d: "/about" },
  { s: "/faqs", d: "/faq" },
  { s: "/spatial-display", d: "/products/spatial-display" },
  { s: "/digital-human", d: "/products/ai-digital-human" },
  { s: "/use-cases", d: "/industries" },
  { s: "/download-center", d: "/contact/download-center" },
  { s: "/privacy-policy", d: "/privacy" },
  { s: "/ai-retail-digital-human-avatars", d: "/blog/how-ai-in-retail" },
  { s: "/multilingual-ai-global-business", d: "/blog/multilingual-ai" },
  { s: "/digital-human-avatar-ai", d: "/blog/what-is-a-digital-human-avatar" },
  { s: "/ai-for-business-ai-avatar-2026", d: "/blog/ai-for-business" },
  { s: "/ai-product-catalog-smart-selling", d: "/blog/ai-product-catalogue" },
  { s: "/offline-ai-enterprise-security", d: "/blog/why-100-offline-ai" },
  { s: "/ai-in-healthcare-digital-assistants", d: "/blog/ai-patient-triage-healthcare-guidance" },
  { s: "/ai-business-automation-efficiency", d: "/blog/ai-business-automation" },
  { s: "/edge-ai-vs-cloud-ai-enterprise-applications", d: "/blog/edge-ai-vs-cloud-ai" },
];

console.log('\n--- VERIFYING 18 NEW RULES ---');
let newPass = true;
new18.forEach((r, idx) => {
  const actualIdx = idx + 15;
  const match = sourceMatches[actualIdx] === r.s && destMatches[actualIdx] === r.d;
  if (!match) newPass = false;
  console.log(`${idx + 1}. [${match ? 'PASS' : 'FAIL'}] ${r.s} -> ${r.d}`);
});
console.log('All 18 new rules present exactly as planned:', newPass);

// Check routes-manifest.json
const manifest = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '.next', 'routes-manifest.json'), 'utf8'));
const redirects = manifest.redirects;
console.log('\n--- ROUTES MANIFEST COMPILED STATUS CODES ---');
let all308 = true;
redirects.forEach(r => {
  if (r.statusCode !== 308) all308 = false;
});
console.log(`Total redirects compiled: ${redirects.length}`);
console.log(`All redirects configured with StatusCode 308: ${all308}`);

