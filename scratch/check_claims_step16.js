const fs = require('fs');
const content = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf8');
const p8Start = content.indexOf('slug: "what-is-a-digital-human-avatar"');
const p9Start = content.indexOf('slug: "ai-patient-triage-healthcare-guidance"');
const p8 = content.substring(p8Start, p9Start);
const lines = p8.split('\n');
lines.forEach((l, i) => {
  if (l.toLowerCase().includes('cloud') || l.toLowerCase().includes('device') || l.toLowerCase().includes('offline') || l.toLowerCase().includes('privacy') || l.toLowerCase().includes('dihuava')) {
    console.log(`${i + 1}: ${l.trim()}`);
  }
});

