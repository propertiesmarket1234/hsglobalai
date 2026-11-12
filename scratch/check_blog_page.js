const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/blog/[slug]/page.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(0, 100).join('\n'));

