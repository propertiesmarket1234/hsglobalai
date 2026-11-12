const fs = require('fs');

const pClient = fs.readFileSync('D:/WebProjects/hsglobalai/src/app/products/ai-digital-human/[slug]/PlatformClient.tsx', 'utf8');
const lines = pClient.split('\n');

for (let i = 220; i < 260; i++) {
  console.log(`${i+1}: ${lines[i]}`);
}

// Find where overview / description is rendered
lines.forEach((l, idx) => {
  if (l.includes('overview') || l.includes('howItWorks') || l.includes('renderFormattedText')) {
    console.log(`Render line ${idx+1}: ${l.trim()}`);
  }
});

