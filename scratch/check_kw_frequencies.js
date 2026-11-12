const fs = require('fs');

const keywords = [
  'offline AI digital human software',
  'digital human software',
  'AI digital human platform',
  'on-device AI digital human',
  'enterprise digital human software',
  'holographic teacher',
  'AI digital human teacher'
];

const files = [
  'D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/page.tsx',
  'D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx'
];

files.forEach(f => {
  console.log(`\n=== File: ${f} ===`);
  const content = fs.readFileSync(f, 'utf8');
  keywords.forEach(kw => {
    const matches = (content.match(new RegExp(kw, 'gi')) || []).length;
    console.log(`Keyword: "${kw}" -> ${matches} occurrences`);
  });
});

