const fs = require('fs');

const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

function findPost(slug) {
  const marker = `slug: "${slug}"`;
  const idx = content.indexOf(marker);
  if (idx === -1) return null;
  const start = content.lastIndexOf('{', idx);
  // find matching end or snippet
  return content.slice(start, start + 3000);
}

['how-ai-in-retail', 'ai-digital-human-fleet-management', 'why-100-offline-ai'].forEach(slug => {
  console.log(`=== POST: ${slug} ===`);
  const postSnippet = findPost(slug);
  if (postSnippet) {
    const lines = postSnippet.split('\n');
    console.log(lines.slice(0, 30).join('\n'));
  } else {
    console.log('Not found');
  }
});

