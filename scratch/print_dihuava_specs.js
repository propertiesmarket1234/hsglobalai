const fs = require('fs');
const c = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');
const lines = c.split('\n');
console.log(lines.slice(315, 346).join('\n'));

