const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/localizedIndustriesData.ts', 'utf8');
console.log(content.slice(0, 1000));

