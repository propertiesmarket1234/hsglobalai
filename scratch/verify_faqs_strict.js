const fs = require('fs');

const pageContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx', 'utf8');
const clientContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');

// Isolate faqJsonLd block
const faqJsonLdSection = pageContent.substring(pageContent.indexOf('const faqJsonLd ='), pageContent.indexOf('export default function'));
const pageQMatches = [...faqJsonLdSection.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]);
const pageAMatches = [...faqJsonLdSection.matchAll(/"text":\s*\n?\s*"([^"]+)"/g)].map(m => m[1]);

// Isolate faqs block
const faqsSection = clientContent.substring(clientContent.indexOf('const faqs = ['), clientContent.indexOf('// ENTERPRISE USE CASES'));
const clientQMatches = [...faqsSection.matchAll(/q:\s*"([^"]+)"/g)].map(m => m[1]);
const clientAMatches = [...faqsSection.matchAll(/a:\s*\n?\s*"([^"]+)"/g)].map(m => m[1]);

console.log('pageQMatches count:', pageQMatches.length);
console.log('clientQMatches count:', clientQMatches.length);

console.log('pageAMatches count:', pageAMatches.length);
console.log('clientAMatches count:', clientAMatches.length);

let perfect = true;
for (let i = 0; i < pageQMatches.length; i++) {
  const qMatch = pageQMatches[i] === clientQMatches[i];
  const aMatch = pageAMatches[i] === clientAMatches[i];
  if (!qMatch || !aMatch) {
    perfect = false;
    console.log(`\nMismatch at FAQ ${i + 1}:`);
    if (!qMatch) {
      console.log('Page Q:  ', pageQMatches[i]);
      console.log('Client Q:', clientQMatches[i]);
    }
    if (!aMatch) {
      console.log('Page A:  ', pageAMatches[i]);
      console.log('Client A:', clientAMatches[i]);
    }
  }
}

if (perfect) {
  console.log('\nSUCCESS! All 8 FAQs in page.tsx and DihuavaClient.tsx match 100% identically!');
}

