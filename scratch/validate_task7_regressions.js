const fs = require('fs');

console.log('=== REGRESSION AUDIT: DUPLICATE IDS & HEADING HIERARCHY ===\n');

const files = [
  '.next/server/app/products/ai-digital-human.html',
  '.next/server/app/products/ai-digital-human/multilingual-support.html',
  '.next/server/app/products/holographic-display.html',
  '.next/server/app/products/spatial-display.html',
  '.next/server/app/industries/banking.html',
  '.next/server/app/industries/retail.html',
  '.next/server/app/industries/corporate.html',
  '.next/server/app/industries/healthcare.html',
  '.next/server/app/industries/tourism.html',
  '.next/server/app/industries/education.html'
];

let allPassed = true;

files.forEach(f => {
  const html = fs.readFileSync(f, 'utf8');
  
  // Check H1 count
  const h1Count = (html.match(/<h1[^>]*>/gi) || []).length;

  // Check duplicate IDs
  const idMatches = [...html.matchAll(/\sid=["']([^"']+)["']/gi)].map(m => m[1]);
  const idCounts = {};
  const duplicateIds = [];
  idMatches.forEach(id => {
    idCounts[id] = (idCounts[id] || 0) + 1;
    if (idCounts[id] === 2) duplicateIds.push(id);
  });

  const ok = (h1Count === 1) && (duplicateIds.length === 0);
  if (!ok) allPassed = false;

  console.log(`[${f.replace('.next/server/app/', '')}]`);
  console.log(`  H1 Count: ${h1Count} ${h1Count === 1 ? 'PASS' : 'FAIL'}`);
  console.log(`  Duplicate IDs: ${duplicateIds.length === 0 ? 'NONE (PASS)' : duplicateIds.join(', ') + ' (FAIL)'}`);
  console.log(`  Status: ${ok ? 'VERIFIED PASS' : 'ISSUES DETECTED'}\n`);
});

console.log('Overall Regression Audit:', allPassed ? 'ALL PASS' : 'ISSUES DETECTED');
