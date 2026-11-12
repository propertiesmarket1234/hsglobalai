const fs = require('fs');

const pageContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx', 'utf8');
const clientContent = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');

// Match all questions and answers in page.tsx
const pageQMatches = [...pageContent.matchAll(/"name":\s*"([^"]+)"/g)].map(m => m[1]);
const pageAMatches = [...pageContent.matchAll(/"text":\s*\n?\s*"([^"]+)"/g)].map(m => m[1]);

// Match in DihuavaClient.tsx
const clientQMatches = [...clientContent.matchAll(/q:\s*"([^"]+)"/g)].map(m => m[1]);
const clientAMatches = [...clientContent.matchAll(/a:\s*\n?\s*"([^"]+)"/g)].map(m => m[1]);

console.log('pageQMatches count:', pageQMatches.length);
console.log('clientQMatches count:', clientQMatches.length);

console.log('pageAMatches count:', pageAMatches.length);
console.log('clientAMatches count:', clientAMatches.length);

for (let i = 0; i < pageQMatches.length; i++) {
  console.log(`\nFAQ ${i + 1}:`);
  console.log('Q match:', pageQMatches[i] === clientQMatches[i]);
  if (pageQMatches[i] !== clientQMatches[i]) {
    console.log('Page Q:  ', pageQMatches[i]);
    console.log('Client Q:', clientQMatches[i]);
  }
  console.log('A match:', pageAMatches[i] === clientAMatches[i]);
  if (pageAMatches[i] !== clientAMatches[i]) {
    console.log('Page A:  ', pageAMatches[i]);
    console.log('Client A:', clientAMatches[i]);
  }
}

