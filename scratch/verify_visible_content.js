const fs = require('fs');

const html = fs.readFileSync('.next/server/app/products/ai-digital-human.html', 'utf8');

console.log('--- HEADINGS & CONTENT VERIFICATION ---');

// H1
const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
if (h1Match) {
  console.log('H1:', h1Match[1].replace(/<[^>]+>/g, '').trim());
}

// H2s
const h2Matches = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)];
console.log(`\nH2s (${h2Matches.length}):`);
h2Matches.forEach((m, idx) => {
  console.log(`  ${idx + 1}. ${m[1].replace(/<[^>]+>/g, '').trim()}`);
});

// Definition copy check
const defText = "Offline AI digital human software enables a digital human or conversational avatar to perform supported AI interactions locally";
console.log('\nDefinition copy present:', html.includes(defText));

// Target commercial keyword counts in rendered HTML
const keywords = [
  'offline AI digital human software',
  'digital human software',
  'AI digital human platform',
  'offline digital human platform',
  'on-device AI digital human',
  'enterprise digital human software',
  'multilingual AI avatar software',
  'AI digital human for kiosks',
  'offline conversational AI avatar',
  'What Is Offline AI Digital Human Software?'
];

console.log('\nCommercial Query Occurrences in Rendered HTML:');
keywords.forEach(kw => {
  const count = (html.match(new RegExp(kw, 'gi')) || []).length;
  console.log(`  "${kw}": ${count} match(es)`);
});
