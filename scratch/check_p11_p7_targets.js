const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');

const p11Idx = content.indexOf('While software-only chatbots exist entirely in the cloud');
console.log('p11 target:');
console.log(content.slice(p11Idx - 50, p11Idx + 350));

const p7Idx = content.indexOf('DIHUAVA runs 100% offline on-device by default');
console.log('\np7 target:');
console.log(content.slice(p7Idx - 150, p7Idx + 300));

