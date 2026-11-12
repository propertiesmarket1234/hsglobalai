const fs = require('fs');

console.log('=== VERIFYING ALL 6 INDUSTRY PAGES ===\n');

const industries = [
  'banking',
  'retail',
  'corporate',
  'healthcare',
  'tourism',
  'education'
];

let allPassed = true;

industries.forEach(ind => {
  const filePath = `.next/server/app/industries/${ind}.html`;
  if (!fs.existsSync(filePath)) {
    console.error(`FAIL: ${filePath} does not exist!`);
    allPassed = false;
    return;
  }
  const html = fs.readFileSync(filePath, 'utf8');
  
  const hasCalloutTitle = html.includes('Powered by DIHUAVA Offline AI Digital Human Software');
  const hasCalloutBadge = html.includes('Software Engine Architecture');
  const hasDesc = html.includes('runs on the DIHUAVA platform');
  const hasHref = html.includes('href="/products/ai-digital-human"');
  const hasBtnText = html.includes('Explore DIHUAVA Platform');

  const passed = hasCalloutTitle && hasCalloutBadge && hasDesc && hasHref && hasBtnText;
  if (!passed) allPassed = false;

  console.log(`[${ind.toUpperCase()}]`);
  console.log(`  Callout Heading:  ${hasCalloutTitle ? 'PASS' : 'FAIL'}`);
  console.log(`  Architecture Badge: ${hasCalloutBadge ? 'PASS' : 'FAIL'}`);
  console.log(`  Engine Description: ${hasDesc ? 'PASS' : 'FAIL'}`);
  console.log(`  Canonical Href:   ${hasHref ? 'PASS' : 'FAIL'}`);
  console.log(`  Button Anchor:    ${hasBtnText ? 'PASS' : 'FAIL'}`);
  console.log(`  Result: ${passed ? 'VERIFIED PASS' : 'FAILED'}\n`);
});

console.log('Overall Industry Pages Status:', allPassed ? 'ALL PASS' : 'FAILURES DETECTED');
