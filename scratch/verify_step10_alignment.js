const fs = require('fs');

console.log('--- Checking FAQ alignment between page.tsx and DihuavaClient.tsx ---');
const pageContent = fs.readFileSync('src/app/products/ai-digital-human/page.tsx', 'utf8');
const clientContent = fs.readFileSync('src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');

// Extract FAQ from page.tsx
const faqJsonMatch = pageContent.match(/const faqJsonLd = (\{[\s\S]*?\n\};)/);
if (!faqJsonMatch) {
  console.error('Could not find faqJsonLd in page.tsx');
  process.exit(1);
}

const faqJsonLd = eval('(' + faqJsonMatch[1].replace(/;\s*$/, '') + ')');
console.log('faqJsonLd questions count:', faqJsonLd.mainEntity.length);

// Extract faqs array from DihuavaClient.tsx
const clientFaqMatch = clientContent.match(/const faqs = (\[[\s\S]*?\n\];)/);
if (!clientFaqMatch) {
  console.error('Could not find faqs in DihuavaClient.tsx');
  process.exit(1);
}

const clientFaqs = eval('(' + clientFaqMatch[1].replace(/;\s*$/, '') + ')');
console.log('clientFaqs count:', clientFaqs.length);

if (faqJsonLd.mainEntity.length !== clientFaqs.length) {
  console.error(`Count mismatch: page.tsx has ${faqJsonLd.mainEntity.length}, client has ${clientFaqs.length}`);
  process.exit(1);
}

let mismatches = 0;
for (let i = 0; i < clientFaqs.length; i++) {
  const pageQ = faqJsonLd.mainEntity[i].name;
  const pageA = faqJsonLd.mainEntity[i].acceptedAnswer.text;
  const clientQ = clientFaqs[i].q;
  const clientA = clientFaqs[i].a;

  if (pageQ !== clientQ) {
    console.error(`Mismatch at Q${i+1}:\nPage:   ${pageQ}\nClient: ${clientQ}`);
    mismatches++;
  }
  if (pageA !== clientA) {
    console.error(`Mismatch at A${i+1}:\nPage:   ${pageA}\nClient: ${clientA}`);
    mismatches++;
  }
}

if (mismatches === 0) {
  console.log('SUCCESS: All 11 FAQs match 100% between page.tsx and DihuavaClient.tsx!');
} else {
  console.error(`Found ${mismatches} mismatches!`);
  process.exit(1);
}

// Validate JSON-LD structure in page.tsx
console.log('\n--- Checking Structured Data in page.tsx ---');
const webPageMatch = pageContent.match(/const webPageJsonLd = (\{[\s\S]*?\n\};)/);
const appMatch = pageContent.match(/const jsonLd = (\{[\s\S]*?\n\};)/);
const breadcrumbMatch = pageContent.match(/const breadcrumbJsonLd = (\{[\s\S]*?\n\};)/);

const webPage = eval('(' + webPageMatch[1].replace(/;\s*$/, '') + ')');
const app = eval('(' + appMatch[1].replace(/;\s*$/, '') + ')');
const breadcrumb = eval('(' + breadcrumbMatch[1].replace(/;\s*$/, '') + ')');

console.log('WebPage @id:', webPage['@id']);
console.log('WebPage name:', webPage.name);
console.log('SoftwareApplication name:', app.name, '| alternateNames:', app.alternateName.length);
console.log('SoftwareApplication alternateNames:', app.alternateName);
console.log('Breadcrumb items:', breadcrumb.itemListElement.length);
console.log('Organization provider id:', app.provider['@id']);
console.log('Publisher id:', app.publisher['@id']);
