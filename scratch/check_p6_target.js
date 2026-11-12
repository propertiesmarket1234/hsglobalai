const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

const p6Idx = content.indexOf('slug: "how-ai-in-retail"');
console.log(content.slice(p6Idx + 500, p6Idx + 1100));

