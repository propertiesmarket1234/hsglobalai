const https = require('https');

function fetchUrl(url, method = 'HEAD') {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request({
      method: method,
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      resolve({ status: res.statusCode, headers: res.headers, location: res.headers['location'] });
    });
    req.on('error', reject);
    req.end();
  });
}

function fetchBody(url) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const req = https.request({
      method: 'GET',
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/120.0.0.0 Safari/537.36'
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, body: data }));
    });
    req.on('error', reject);
    req.end();
  });
}

async function verifyLinks() {
  console.log("Fetching live page body to extract links...");
  const page = await fetchBody('https://www.hsglobalai.com/products/ai-digital-human');
  const hrefRegex = /href=["']([^"'#]+)(?:#[^"']*)?["']/gi;
  const links = new Set();
  let match;
  while ((match = hrefRegex.exec(page.body)) !== null) {
    const raw = match[1].trim();
    if (raw.startsWith('/') || raw.startsWith('https://www.hsglobalai.com')) {
      // Internal link
      const clean = raw.startsWith('https://www.hsglobalai.com') ? raw : 'https://www.hsglobalai.com' + raw;
      // exclude static assets or mailto/tel
      if (!clean.includes('/_next/') && !clean.endsWith('.ico') && !clean.endsWith('.svg') && !clean.endsWith('.png')) {
        links.add(clean);
      }
    }
  }

  console.log(`Found ${links.size} unique internal links on the production page:`);
  let allPassed = true;
  for (const link of Array.from(links).sort()) {
    try {
      const res = await fetchUrl(link, 'GET');
      const ok = res.status >= 200 && res.status < 400;
      console.log(`[${res.status}] ${link} ${ok ? 'OK' : 'FAILED'}`);
      if (!ok) allPassed = false;
    } catch (err) {
      console.log(`[ERR] ${link}: ${err.message}`);
      allPassed = false;
    }
  }

  console.log(`\nAll internal links valid: ${allPassed}`);
}

verifyLinks().catch(console.error);
