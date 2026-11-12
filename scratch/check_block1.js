const fs = require('fs');
const html = fs.readFileSync('.next/server/app/products/ai-digital-human.html', 'utf8');
const m = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
console.log('Block 1 content:\n', m[0][1]);
