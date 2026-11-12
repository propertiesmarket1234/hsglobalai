const fs = require('fs');

const contentWithBlank = `### Advanced Capability

Enterprise solutions like the [DIHUAVA AI digital human platform](/products/ai-digital-human) offer:
- 100% on-device processing
- Zero cloud dependency
- High data privacy
- Faster response times`;

const blocks = contentWithBlank.split('\n\n');
console.log('Number of blocks:', blocks.length);
blocks.forEach((b, i) => {
  console.log(`Block ${i + 1}:`);
  console.log('  startsWith ###:', b.trim().startsWith('### '));
  console.log('  includes \\n- :', b.trim().includes('\n- '));
  console.log('  content:\n', b);
});

