const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

const p7Start = content.indexOf('slug: "why-100-offline-ai"');
console.log(content.slice(p7Start, p7Start + 2000));

