const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

const slugIdx = content.indexOf('what-is-a-digital-human-avatar');
const start = content.lastIndexOf('{', slugIdx);
const nextPostIdx = content.indexOf('\n  {\n    id: "9"', slugIdx);
const postContent = content.slice(start, nextPostIdx !== -1 ? nextPostIdx : start + 10000);

console.log('Post length:', postContent.length);

// Find all occurrences of ai-digital-human in this post
const lines = postContent.split('\n');
lines.forEach((l, i) => {
  if (l.includes('ai-digital-human') || l.includes('DIHUAVA') || l.includes('Enterprise solutions')) {
    console.log(`Line ${i+1}: ${l.trim()}`);
  }
});

