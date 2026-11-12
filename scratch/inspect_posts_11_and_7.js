const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

function getFullPost(slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  const start = content.lastIndexOf('{', idx);
  const nextIdx = content.indexOf('slug: "', idx + 20);
  const end = nextIdx !== -1 ? content.lastIndexOf('{', nextIdx) : content.length;
  return content.slice(start, end);
}

console.log('=== POST 11 ===');
const p11 = getFullPost('ai-digital-human-fleet-management');
console.log(p11.slice(0, 3000));

console.log('=== POST 7 ===');
const p7 = getFullPost('why-100-offline-ai');
console.log(p7.slice(0, 3000));

