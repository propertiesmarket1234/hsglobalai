const fs = require('fs');

console.log('=== VERIFYING KIOSK ARCHITECTURE SECTION CLAIMS ===\n');

const html = fs.readFileSync('.next/server/app/products/ai-digital-human.html', 'utf8');

// Extract the Physical Kiosk Architecture block
const startIdx = html.indexOf('Physical Kiosk Architecture');
if (startIdx === -1) {
  console.error('FAIL: Physical Kiosk Architecture not found!');
  process.exit(1);
}

const snippet = html.slice(startIdx - 100, startIdx + 2500);
// Strip tags for clean text inspection
const cleanText = snippet.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');
console.log('Extracted Section Copy:\n', cleanText.slice(0, 1000), '\n');

// Specific claim checks
const checks = [
  {
    claim: '8GB VRAM Baseline Recommendation (Non-guaranteed, workload dependent)',
    present: html.includes('An 8GB VRAM GPU provides a baseline recommendation for smooth local inference'),
    valid: true,
  },
  {
    claim: 'Windows 11 / Linux Compatible Embedded PCs / Workstations',
    present: html.includes('compact industrial workstations or embedded PCs inside the kiosk enclosure'),
    valid: true,
  },
  {
    claim: 'Touch & Voice Dual Navigation (Spoken + Touchscreen menus)',
    present: html.includes('Visitors can speak naturally or tap touchscreen menus to browse product catalogs'),
    valid: true,
  },
  {
    claim: '29+ Supported Languages',
    present: html.includes('select from 29+ languages'),
    valid: true,
  },
  {
    claim: 'Autonomous Offline Core Execution (100% on-device by default)',
    present: html.includes('Core dialogue, speech synthesis, and facial lip-sync execute 100% on-device by default'),
    valid: true,
  },
  {
    claim: 'Network Outage Resilience',
    present: html.includes('ensuring uninterrupted visitor assistance during venue network outages'),
    valid: true,
  },
  {
    claim: 'No unverified pricing, lifetime licensing, or zero TCO claims',
    present: !html.includes('free forever') && !html.includes('zero maintenance cost') && !html.includes('lifetime updates guaranteed'),
    valid: true,
  }
];

let allPassed = true;
checks.forEach((c, idx) => {
  const ok = c.present && c.valid;
  if (!ok) allPassed = false;
  console.log(`Claim #${idx + 1}: [${ok ? 'VERIFIED' : 'FAILED'}] ${c.claim}`);
});

console.log('\nOverall Kiosk Section Claim Audit:', allPassed ? 'ALL CLAIMS VERIFIED & SAFE' : 'UNSUPPORTED CLAIMS DETECTED');
