const https = require('https');

const testUrls = [
  'https://www.hsglobalai.com/products/ai-digital-human',
  'https://www.hsglobalai.com/blog/what-is-a-digital-human-avatar',
  'https://www.hsglobalai.com/blog/why-100-offline-ai',
  'https://www.hsglobalai.com/industries/retail',
  'https://www.hsglobalai.com/blog/how-ai-in-retail',
  'https://www.hsglobalai.com/products/ai-digital-human/document-intelligence',
  'https://www.hsglobalai.com/products/ai-digital-human/avatar-customization',
  'https://www.hsglobalai.com/products/ai-digital-human/multilingual-support',
  'https://www.hsglobalai.com/products/ai-digital-human/persona-management',
  'https://www.hsglobalai.com/products/ai-digital-human/ai-product-catalog',
  'https://www.hsglobalai.com/blog/ai-digital-human-fleet-management'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36' } }, (res) => {
      let body = '';
      res.on('data', chunk => { if (body.length < 50000) body += chunk; });
      res.on('end', () => {
        const canonicalMatch = body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i);
        const robotsMatch = body.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i);
        const titleMatch = body.match(/<title>([^<]+)<\/title>/i);
        resolve({
          url,
          status: res.statusCode,
          canonical: canonicalMatch ? canonicalMatch[1] : 'NONE',
          robots: robotsMatch ? robotsMatch[1] : 'NOT SET (INDEXABLE)',
          title: titleMatch ? titleMatch[1] : 'NONE'
        });
      });
    });
    req.on('error', err => resolve({ url, status: 'ERROR', error: err.message }));
    req.end();
  });
}

async function run() {
  for (const u of testUrls) {
    const res = await checkUrl(u);
    console.log(`[HTTP ${res.status}] ${res.url}`);
    console.log(`  Canonical: ${res.canonical}`);
    console.log(`  Robots:    ${res.robots}`);
    console.log(`  Title:     ${res.title}`);
  }
}

run();

