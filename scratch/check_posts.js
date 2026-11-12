const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const regex = /slug:\s*"([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
  console.log(match[1]);
}
