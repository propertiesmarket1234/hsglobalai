const https = require('https');

const pages = [
  { url: 'https://www.hsglobalai.com/industries/retail', anchor: 'offline AI digital human software platform' },
  { url: 'https://www.hsglobalai.com/blog/how-ai-in-retail', anchor: 'AI digital human software for retail kiosks' },
  { url: 'https://www.hsglobalai.com/blog/ai-digital-human-fleet-management', anchor: 'enterprise digital human software' },
  { url: 'https://www.hsglobalai.com/blog/why-100-offline-ai', anchor: 'on-device AI digital human platform' },
  { url: 'https://www.hsglobalai.com/products/ai-digital-human/document-intelligence', anchor: 'DIHUAVA offline AI digital human software platform' }
];

function checkPage(item) {
  return new Promise((resolve) => {
    https.get(item.url, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let body = '';
      res.on('data', chunk => { if (body.length < 50000) body += chunk; });
      res.on('end', () => {
        resolve({
          url: item.url,
          status: res.statusCode,
          hasTargetLink: body.includes('/products/ai-digital-human'),
          hasAnchor: body.includes(item.anchor)
        });
      });
    }).on('error', err => resolve({ url: item.url, error: err.message }));
  });
}

async function run() {
  for (const p of pages) {
    const res = await checkPage(p);
    console.log(`[HTTP ${res.status}] ${res.url}`);
    console.log(`  -> Has link to /products/ai-digital-human: ${res.hasTargetLink}`);
    console.log(`  -> Has anchor "${p.anchor}": ${res.hasAnchor}`);
  }
}

run();

