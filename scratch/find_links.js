const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');
const lines = content.split('\n');

lines.forEach((line, index) => {
  if (line.includes('/products/ai-digital-human')) {
    console.log(`Line ${index + 1}: ${line.trim().slice(0, 150)}...`);
  }
});
