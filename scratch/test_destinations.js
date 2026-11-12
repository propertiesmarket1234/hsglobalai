const https = require('https');

const destinations = [
  '/products/holographic-display',
  '/contact',
  '/products',
  '/about',
  '/faq',
  '/blog/how-ai-in-retail',
  '/blog/multilingual-ai',
  '/blog/what-is-a-digital-human-avatar',
  '/products/ai-digital-human',
  '/products/spatial-display',
  '/blog/ai-for-business',
  '/blog/ai-product-catalogue',
  '/contact/download-center',
  '/blog/why-100-offline-ai',
  '/blog/ai-patient-triage-healthcare-guidance',
  '/privacy',
  '/blog/ai-business-automation',
  '/blog/edge-ai-vs-cloud-ai',
  '/industries'
];

function check(p) {
  return new Promise((resolve) => {
    https.get(`https://www.hsglobalai.com${p}`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ path: p, status: res.statusCode });
    }).on('error', (e) => resolve({ path: p, status: 'ERROR: ' + e.message }));
  });
}

async function run() {
  console.log('=== VERIFYING DESTINATION URLS (HTTP 200) ===');
  for (const d of destinations) {
    const r = await check(d);
    console.log(`Destination: ${d.padEnd(45)} -> HTTP ${r.status}`);
  }
}

run();

