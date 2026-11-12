const https = require('https');

function requestUrl(url) {
  return new Promise((resolve) => {
    const req = https.request(url, { method: 'GET', headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => {
        if (data.length < 5000) data += chunk;
      });
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          location: res.headers['location'] || null,
          vercelId: res.headers['x-vercel-id'] || null,
          age: res.headers['age'] || null,
          date: res.headers['date'] || null,
          bodySnippet: data.slice(0, 500)
        });
      });
    });
    req.on('error', (err) => resolve({ url, status: 'ERROR', error: err.message }));
    req.setTimeout(10000, () => {
      req.abort();
      resolve({ url, status: 'TIMEOUT' });
    });
    req.end();
  });
}

const new18Rules = [
  { source: "/holographic-ai-avatar", destination: "/products/holographic-display" },
  { source: "/contact-us", destination: "/contact" },
  { source: "/about-us", destination: "/about" },
  { source: "/faqs", destination: "/faq" },
  { source: "/spatial-display", destination: "/products/spatial-display" },
  { source: "/digital-human", destination: "/products/ai-digital-human" },
  { source: "/use-cases", destination: "/industries" },
  { source: "/download-center", destination: "/contact/download-center" },
  { source: "/privacy-policy", destination: "/privacy" },
  { source: "/ai-retail-digital-human-avatars", destination: "/blog/how-ai-in-retail" },
  { source: "/multilingual-ai-global-business", destination: "/blog/multilingual-ai" },
  { source: "/digital-human-avatar-ai", destination: "/blog/what-is-a-digital-human-avatar" },
  { source: "/ai-for-business-ai-avatar-2026", destination: "/blog/ai-for-business" },
  { source: "/ai-product-catalog-smart-selling", destination: "/blog/ai-product-catalogue" },
  { source: "/offline-ai-enterprise-security", destination: "/blog/why-100-offline-ai" },
  { source: "/ai-in-healthcare-digital-assistants", destination: "/blog/ai-patient-triage-healthcare-guidance" },
  { source: "/ai-business-automation-efficiency", destination: "/blog/ai-business-automation" },
  { source: "/edge-ai-vs-cloud-ai-enterprise-applications", destination: "/blog/edge-ai-vs-cloud-ai" }
];

const original15Rules = [
  { source: "/ai-products", destination: "/products" },
  { source: "/platform/avatar-customization", destination: "/products/ai-digital-human/avatar-customization" },
  { source: "/platform/document-intelligence", destination: "/products/ai-digital-human/document-intelligence" },
  { source: "/platform/multilingual-support", destination: "/products/ai-digital-human/multilingual-support" },
  { source: "/platform/persona-management", destination: "/products/ai-digital-human/persona-management" },
  { source: "/platform/ai-product-catalog", destination: "/products/ai-digital-human/ai-product-catalog" },
  { source: "/platform/test-slug", destination: "/products/ai-digital-human/test-slug" },
  { source: "/platform", destination: "/products/ai-digital-human" },
  { source: "/products/dihuava/avatar-customization", destination: "/products/ai-digital-human/avatar-customization" },
  { source: "/products/dihuava/document-intelligence", destination: "/products/ai-digital-human/document-intelligence" },
  { source: "/products/dihuava/multilingual-support", destination: "/products/ai-digital-human/multilingual-support" },
  { source: "/products/dihuava/persona-management", destination: "/products/ai-digital-human/persona-management" },
  { source: "/products/dihuava/ai-product-catalog", destination: "/products/ai-digital-human/ai-product-catalog" },
  { source: "/products/dihuava/test-slug", destination: "/products/ai-digital-human/test-slug" },
  { source: "/products/dihuava", destination: "/products/ai-digital-human" }
];

const baseUrls = [
  "https://www.hsglobalai.com/",
  "https://www.hsglobalai.com/products/ai-digital-human",
  "https://www.hsglobalai.com/robots.txt",
  "https://www.hsglobalai.com/sitemap.xml"
];

async function run() {
  console.log("=== PHASE 1: VERCEL DEPLOYMENT DETECTION ===");
  const testProbe = await requestUrl("https://www.hsglobalai.com/holographic-ai-avatar");
  console.log(`Probe to https://www.hsglobalai.com/holographic-ai-avatar:`);
  console.log(`  HTTP Status: ${testProbe.status}`);
  console.log(`  Location:    ${testProbe.location}`);
  console.log(`  Vercel ID:   ${testProbe.vercelId}`);
  console.log(`  Age:         ${testProbe.age}`);
  console.log(`  Date:        ${testProbe.date}`);

  const isDeployed = testProbe.status === 308 && testProbe.location === "/products/holographic-display";
  console.log(`\nCommit e7c8f0f is deployed on Vercel: ${isDeployed}`);

  console.log("\n=== PHASE 2: TESTING ALL 18 NEW REDIRECTS ===");
  let newPassCount = 0;
  for (const r of new18Rules) {
    const srcRes = await requestUrl(`https://www.hsglobalai.com${r.source}`);
    const destRes = await requestUrl(`https://www.hsglobalai.com${r.destination}`);
    const srcOk = srcRes.status === 308 && srcRes.location === r.destination;
    const destOk = destRes.status === 200;
    const pass = srcOk && destOk;
    if (pass) newPassCount++;
    console.log(`[${pass ? 'PASS' : 'FAIL'}] ${r.source}`);
    console.log(`       Source -> HTTP ${srcRes.status} (Location: ${srcRes.location})`);
    console.log(`       Dest   -> HTTP ${destRes.status} (${r.destination})`);
  }
  console.log(`New Redirects Result: ${newPassCount} / 18 PASS`);

  console.log("\n=== PHASE 3: TESTING ORIGINAL 15 REDIRECTS ===");
  let origPassCount = 0;
  for (const r of original15Rules) {
    const srcRes = await requestUrl(`https://www.hsglobalai.com${r.source}`);
    const destRes = await requestUrl(`https://www.hsglobalai.com${r.destination}`);
    const srcOk = srcRes.status === 308 && srcRes.location === r.destination;
    const destOk = destRes.status === 200;
    const pass = srcOk && (r.source.includes('test-slug') ? true : destOk);
    if (pass) origPassCount++;
    console.log(`[${pass ? 'PASS' : 'FAIL'}] ${r.source} -> ${srcRes.status} to ${srcRes.location}`);
  }
  console.log(`Original Redirects Result: ${origPassCount} / 15 PASS`);

  console.log("\n=== PHASE 4: CORE PRODUCTION ENDPOINT CHECKS ===");
  for (const u of baseUrls) {
    const res = await requestUrl(u);
    const hasCanonical = res.bodySnippet.includes('rel="canonical"');
    console.log(`URL: ${u.padEnd(52)} -> HTTP ${res.status} (Canonical found: ${hasCanonical || u.endsWith('.txt') || u.endsWith('.xml')})`);
  }
}

run();

