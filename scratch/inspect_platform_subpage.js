const fs = require('fs');

const pClient = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/[slug]/PlatformClient.tsx', 'utf8');
const pPage = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/[slug]/page.tsx', 'utf8');

console.log('pPage length:', pPage.length);
console.log('pClient length:', pClient.length);

// Search for links back to /products/ai-digital-human in PlatformClient.tsx
const lines = pClient.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('/products/ai-digital-human') && !l.includes('[slug]')) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});

