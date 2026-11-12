const path = require('path');
const fs = require('fs');

// We can load next.config.ts or parse it
const content = fs.readFileSync(path.join(__dirname, '..', 'next.config.ts'), 'utf8');

const sourceMatches = [...content.matchAll(/source:\s*"([^"]+)"/g)].map(m => m[1]);
const destMatches = [...content.matchAll(/destination:\s*"([^"]+)"/g)].map(m => m[1]);

console.log('Total sources found:', sourceMatches.length);
console.log('Total destinations found:', destMatches.length);

console.log('\n--- ALL REDIRECT RULES ---');
sourceMatches.forEach((src, idx) => {
  console.log(`${idx + 1}. ${src.padEnd(48)} -> ${destMatches[idx]}`);
});

