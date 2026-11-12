const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

const idx = content.indexOf('slug: "ai-digital-human-fleet-management"');
const sub = content.slice(idx, idx + 4000);
console.log(sub.slice(1200, 2800));

