const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

function extractPost(slug) {
  const target = `slug: "${slug}"`;
  let idx = content.indexOf(target);
  if (idx === -1) {
    const targetSingle = `slug: '${slug}'`;
    idx = content.indexOf(targetSingle);
  }
  if (idx !== -1) {
    console.log('=== ' + slug + ' ===');
    console.log(content.slice(idx, idx + 1000));
  }
}

extractPost('edge-ai-vs-cloud-ai');
extractPost('why-100-offline-ai');

