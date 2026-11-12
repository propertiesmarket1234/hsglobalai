const fs = require('fs');
const path = require('path');

const manifestPath = path.join(__dirname, '..', '.next', 'routes-manifest.json');
if (!fs.existsSync(manifestPath)) {
  console.log('routes-manifest.json not found!');
  process.exit(1);
}

const manifest = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));
const redirects = manifest.redirects || [];

console.log(`Total Compiled Redirects in routes-manifest.json: ${redirects.length}`);

console.log('\n--- COMPILED REDIRECTS AUDIT ---');
redirects.forEach((r, idx) => {
  console.log(`${idx + 1}. Source: ${r.source.padEnd(48)} Destination: ${r.destination.padEnd(48)} StatusCode: ${r.statusCode}`);
});

// Verify all 18 approved new rules are present
const approvedSources = [
  "/holographic-ai-avatar",
  "/contact-us",
  "/about-us",
  "/faqs",
  "/spatial-display",
  "/digital-human",
  "/use-cases",
  "/download-center",
  "/privacy-policy",
  "/ai-retail-digital-human-avatars",
  "/multilingual-ai-global-business",
  "/digital-human-avatar-ai",
  "/ai-for-business-ai-avatar-2026",
  "/ai-product-catalog-smart-selling",
  "/offline-ai-enterprise-security",
  "/ai-in-healthcare-digital-assistants",
  "/ai-business-automation-efficiency",
  "/edge-ai-vs-cloud-ai-enterprise-applications"
];

console.log('\n--- VERIFYING 18 APPROVED SOURCES ---');
let allPresent = true;
approvedSources.forEach(s => {
  const found = redirects.find(r => r.source === s || r.source.replace('(?:/)?', '') === s);
  if (found) {
    console.log(`PASS: ${s.padEnd(48)} -> ${found.destination} (${found.statusCode})`);
  } else {
    console.log(`FAIL: Missing ${s}`);
    allPresent = false;
  }
});

console.log(`\nAll 18 approved rules present and verified: ${allPresent}`);

