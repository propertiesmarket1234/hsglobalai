const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

const idx = content.indexOf('## What Is AI Digital Human Fleet Management?');
console.log(content.slice(idx, idx + 1200));

