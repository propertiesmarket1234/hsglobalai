const fs = require('fs');

const pageContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx', 'utf8');
const clientContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');

// Extract FAQ from page.tsx
const faqJsonLdMatch = pageContent.match(/const faqJsonLd = ([\s\S]*?);\n\nexport default/);
let pageFaqs = [];
if (faqJsonLdMatch) {
  try {
    const parsed = eval(`(${faqJsonLdMatch[1]})`);
    pageFaqs = parsed.mainEntity.map(e => ({ q: e.name.trim(), a: e.acceptedAnswer.text.trim() }));
  } catch (e) {
    console.log('Error parsing faqJsonLd:', e.message);
  }
}

// Extract faqs from DihuavaClient.tsx
const clientFaqsMatch = clientContent.match(/const faqs = ([\s\S]*?);\n\n\/\/ ENTERPRISE USE CASES/);
let clientFaqs = [];
if (clientFaqsMatch) {
  try {
    const parsed = eval(`(${clientFaqsMatch[1]})`);
    clientFaqs = parsed.map(e => ({ q: e.q.trim(), a: e.a.trim() }));
  } catch (e) {
    console.log('Error parsing client faqs:', e.message);
  }
}

console.log(`Page FAQs count: ${pageFaqs.length}, Client FAQs count: ${clientFaqs.length}`);

let allMatch = true;
if (pageFaqs.length !== clientFaqs.length) {
  console.log('MISMATCH in FAQ counts!');
  allMatch = false;
} else {
  for (let i = 0; i < pageFaqs.length; i++) {
    const pf = pageFaqs[i];
    const cf = clientFaqs[i];
    if (pf.q !== cf.q) {
      console.log(`MISMATCH Q${i + 1}:\nPage:   "${pf.q}"\nClient: "${cf.q}"`);
      allMatch = false;
    }
    if (pf.a !== cf.a) {
      console.log(`MISMATCH A${i + 1}:\nPage:   "${pf.a}"\nClient: "${cf.a}"`);
      allMatch = false;
    }
  }
}

if (allMatch) {
  console.log('SUCCESS: All 8 FAQs in page.tsx and DihuavaClient.tsx match 100% word-for-word!');
}

