const fs = require('fs');

const html = fs.readFileSync('.next/server/app/blog/what-is-a-digital-human-avatar.html', 'utf8');

// Look for DIHUAVA in the blog HTML
const idx = html.indexOf('DIHUAVA, our offline AI digital human software platform');
console.log('Found "DIHUAVA, our offline AI digital human software platform":', idx !== -1);

const idx2 = html.indexOf('DIHUAVA AI digital human platform');
console.log('Found "DIHUAVA AI digital human platform":', idx2 !== -1);

// Find surrounding snippet of idx
if (idx !== -1) {
  console.log('\nSnippet 1:');
  console.log(html.slice(idx - 60, idx + 120));
}

if (idx2 !== -1) {
  console.log('\nSnippet 2:');
  console.log(html.slice(idx2 - 60, idx2 + 100));
}

