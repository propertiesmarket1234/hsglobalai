const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

function getFullPost(slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  const start = content.lastIndexOf('{', idx);
  // find next post start
  const nextIdx = content.indexOf('slug: "', idx + 20);
  const end = nextIdx !== -1 ? content.lastIndexOf('{', nextIdx) : content.length;
  return content.slice(start, end);
}

const post6 = getFullPost('how-ai-in-retail');
console.log('Post 6 content length:', post6.length);
console.log(post6);

