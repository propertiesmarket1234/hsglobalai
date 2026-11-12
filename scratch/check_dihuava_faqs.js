const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/DihuavaClient.tsx', 'utf8');
const lines = content.split('\n');
console.log(lines.slice(325, 375).join('\n'));

