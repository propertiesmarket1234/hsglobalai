const fs = require('fs');

const pPath = 'D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx';
const cPath = 'D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx';
const iPath = 'D:/WebProjects/hsglobalai/src/data/industriesData.ts';

const pageContent = fs.readFileSync(pPath, 'utf8');
const clientContent = fs.readFileSync(cPath, 'utf8');
const indContent = fs.readFileSync(iPath, 'utf8');

console.log('=== CHECKING REMOVED PHRASES & OFFERS ===');
const forbiddenStrings = [
  'offers',
  'priceCurrency',
  'triage',
  'zero cloud data leakage',
  'zero data leakage',
  'Universities, K-12 schools, and corporate academies deploy DIHUAVA'
];

forbiddenStrings.forEach(s => {
  const inP = pageContent.includes(s);
  const inC = clientContent.includes(s);
  const inI = indContent.includes(s);
  console.log(`Checking "${s}": in page.tsx=${inP}, in DihuavaClient.tsx=${inC}, in industriesData.ts=${inI}`);
});

console.log('\n=== CHECKING STRICT FAQ MATCHING ===');
const faqJsonLdSection = pageContent.substring(pageContent.indexOf('const faqJsonLd ='), pageContent.indexOf('export default function'));
const pageQMatches = [...faqJsonLdSection.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]);
const pageAMatches = [...faqJsonLdSection.matchAll(/"text":\s*\n?\s*"([^"]+)"/g)].map(m => m[1]);

const faqsSection = clientContent.substring(clientContent.indexOf('const faqs = ['), clientContent.indexOf('// ENTERPRISE USE CASES'));
const clientQMatches = [...faqsSection.matchAll(/q:\s*"([^"]+)"/g)].map(m => m[1]);
const clientAMatches = [...faqsSection.matchAll(/a:\s*\n?\s*"([^"]+)"/g)].map(m => m[1]);

console.log('pageQ count:', pageQMatches.length, 'clientQ count:', clientQMatches.length);
let match = true;
for (let i = 0; i < pageQMatches.length; i++) {
  if (pageQMatches[i] !== clientQMatches[i]) {
    console.log(`MISMATCH Q${i+1}`);
    match = false;
  }
  if (pageAMatches[i] !== clientAMatches[i]) {
    console.log(`MISMATCH A${i+1}`);
    match = false;
  }
}
if (match) {
  console.log('ALL 8 FAQs MATCH 100% IDENTICALLY!');
}

console.log('\n=== CHECKING JSON-LD SYNTAX IN page.tsx ===');
// Extract webPageJsonLd, jsonLd, breadcrumbJsonLd, faqJsonLd
const extractAndParse = (varName) => {
  const match = pageContent.match(new RegExp(`const ${varName} = ([\\s\\S]*?);\\n\\nconst`)) ||
                pageContent.match(new RegExp(`const ${varName} = ([\\s\\S]*?);\\n\\nexport default`));
  if (match) {
    try {
      const obj = eval(`(${match[1]})`);
      console.log(`Parsed ${varName} successfully: @type=${obj['@type']}`);
      return true;
    } catch (e) {
      console.log(`Failed to parse ${varName}:`, e.message);
      return false;
    }
  }
  console.log(`Could not find ${varName}`);
  return false;
};

extractAndParse('webPageJsonLd');
extractAndParse('jsonLd');
extractAndParse('breadcrumbJsonLd');
extractAndParse('faqJsonLd');

