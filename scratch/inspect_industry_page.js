const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/industries/[slug]/page.tsx', 'utf8');
const lines = content.split('\n');
lines.forEach((l, idx) => {
  if (l.includes('heroOverview') || l.includes('ai-digital-human') || l.includes('DIHUAVA') || l.includes('products')) {
    console.log(`Line ${idx+1}: ${l.trim()}`);
  }
});

