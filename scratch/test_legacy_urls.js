const https = require('https');

const legacyPaths = [
  '/holographic-ai-avatar/',
  '/contact-us/',
  '/ai-products/',
  '/about-us/',
  '/ai-retail-digital-human-avatars/',
  '/multilingual-ai-global-business/',
  '/digital-human-avatar-ai/',
  '/digital-human/',
  '/faqs/',
  '/spatial-display/',
  '/ai-for-business-ai-avatar-2026/',
  '/ai-product-catalog-smart-selling/',
  '/download-center/',
  '/offline-ai-enterprise-security/',
  '/ai-in-healthcare-digital-assistants/',
  '/privacy-policy/',
  '/ai-business-automation-efficiency/',
  '/edge-ai-vs-cloud-ai-enterprise-applications/',
  '/use-cases/'
];

function checkUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'HEAD', headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      resolve({ url, status: res.statusCode, location: res.headers.location || null });
    });
    req.on('error', (err) => resolve({ url, status: 'ERROR', error: err.message }));
    req.setTimeout(8000, () => {
      req.abort();
      resolve({ url, status: 'TIMEOUT' });
    });
    req.end();
  });
}

async function run() {
  console.log('=== CHECKING WWW & NON-WWW STATUSES ===\n');
  for (const p of legacyPaths) {
    const wwwUrl = `https://www.hsglobalai.com${p}`;
    const nonWwwUrl = `https://hsglobalai.com${p}`;
    const resWww = await checkUrl(wwwUrl);
    const resNonWww = await checkUrl(nonWwwUrl);
    console.log(`Path: ${p}`);
    console.log(`  WWW:     HTTP ${resWww.status} -> ${resWww.location || '(served directly)'}`);
    console.log(`  Non-WWW: HTTP ${resNonWww.status} -> ${resNonWww.location || '(served directly)'}`);
  }
}

run();

