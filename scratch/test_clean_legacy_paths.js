const https = require('https');

const legacyPaths = [
  '/holographic-ai-avatar',
  '/contact-us',
  '/ai-products',
  '/about-us',
  '/ai-retail-digital-human-avatars',
  '/multilingual-ai-global-business',
  '/digital-human-avatar-ai',
  '/digital-human',
  '/faqs',
  '/spatial-display',
  '/ai-for-business-ai-avatar-2026',
  '/ai-product-catalog-smart-selling',
  '/download-center',
  '/offline-ai-enterprise-security',
  '/ai-in-healthcare-digital-assistants',
  '/privacy-policy',
  '/ai-business-automation-efficiency',
  '/edge-ai-vs-cloud-ai-enterprise-applications',
  '/use-cases'
];

function checkPath(p) {
  return new Promise((resolve) => {
    const url = `https://www.hsglobalai.com${p}`;
    const req = https.request(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ path: p, status: res.statusCode, location: res.headers.location || null });
    });
    req.on('error', (err) => resolve({ path: p, status: 'ERROR', error: err.message }));
    req.setTimeout(8000, () => {
      req.abort();
      resolve({ path: p, status: 'TIMEOUT' });
    });
    req.end();
  });
}

async function run() {
  console.log('=== CHECKING STATUS CODES FOR WWW PATHS (WITHOUT TRAILING SLASH) ===\n');
  for (const p of legacyPaths) {
    const res = await checkPath(p);
    console.log(`Path: ${p.padEnd(45)} -> HTTP ${res.status} ${res.location ? '-> ' + res.location : ''}`);
  }
}

run();

