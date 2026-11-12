const https = require('https');

function fetchUrl(url, customHeaders = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const headers = {
      'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
      'Cache-Control': 'no-cache',
      ...customHeaders
    };
    const req = https.request({
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    });
    req.on('error', reject);
    req.end();
  });
}

function parseJsonLd(html) {
  const scripts = [];
  const regex = /<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
  let match;
  while ((match = regex.exec(html)) !== null) {
    try {
      scripts.push(JSON.parse(match[1]));
    } catch (e) {
      scripts.push({ parseError: e.message, raw: match[1].slice(0, 100) });
    }
  }
  return scripts;
}

function extractHeadings(html) {
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  const h2s = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map(m => m[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim());
  return { h1s, h2s };
}

function checkKeywords(text, keywords) {
  const results = {};
  const lower = text.toLowerCase();
  for (const kw of keywords) {
    const kwLower = kw.toLowerCase();
    let count = 0;
    let pos = 0;
    while ((pos = lower.indexOf(kwLower, pos)) !== -1) {
      count++;
      pos += kwLower.length;
    }
    results[kw] = count;
  }
  return results;
}

async function run() {
  const ts = Date.now();
  console.log(`=== STEP 7 AUDIT STARTED AT ${new Date().toISOString()} ===\n`);

  // 1. Robots.txt
  console.log('--- 1. ROBOTS.TXT CHECK ---');
  const robotsRes = await fetchUrl('https://www.hsglobalai.com/robots.txt');
  console.log(`Status: ${robotsRes.status}`);
  console.log('Content:\n' + robotsRes.body.trim());

  // 2. Crawler tests with specific User-Agents
  console.log('\n--- 2. BOT CRAWLER ACCESS TESTS ---');
  const bots = [
    { name: 'Googlebot', ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
    { name: 'OAI-SearchBot', ua: 'OAI-SearchBot/1.0; (+https://openai.com/searchbot)' },
    { name: 'ChatGPT-User', ua: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ChatGPT-User/1.0; +https://openai.com/bot)' },
    { name: 'PerplexityBot', ua: 'Mozilla/5.0 (compatible; PerplexityBot/1.0; +https://perplexity.ai/perplexitybot)' },
    { name: 'Bingbot', ua: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)' }
  ];

  for (const bot of bots) {
    const res = await fetchUrl(`https://www.hsglobalai.com/products/ai-digital-human?bot=${bot.name}`, { 'User-Agent': bot.ua });
    console.log(`Bot: ${bot.name.padEnd(15)} | HTTP Status: ${res.status} | x-vercel-cache: ${res.headers['x-vercel-cache'] || 'N/A'}`);
  }

  // 3. Sitemap.xml Check
  console.log('\n--- 3. SITEMAP.XML CHECK ---');
  const sitemapRes = await fetchUrl('https://www.hsglobalai.com/sitemap.xml');
  console.log(`Status: ${sitemapRes.status}`);
  const sitemapUrls = [...sitemapRes.body.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`Total URLs in sitemap: ${sitemapUrls.length}`);
  console.log(`Includes /products/ai-digital-human: ${sitemapUrls.includes('https://www.hsglobalai.com/products/ai-digital-human')}`);
  console.log(`Includes /products: ${sitemapUrls.includes('https://www.hsglobalai.com/products')}`);
  console.log(`Includes /: ${sitemapUrls.includes('https://www.hsglobalai.com/') || sitemapUrls.includes('https://www.hsglobalai.com')}`);

  // Check competing pages in sitemap
  const competingUrls = sitemapUrls.filter(u => u.includes('digital-human') || u.includes('avatar') || u.includes('dihuava'));
  console.log('Digital human / avatar related URLs in sitemap:');
  competingUrls.forEach(u => console.log('  -', u));

  // 4. Detailed Page SEO Checks
  const targetPages = [
    { name: 'Homepage', url: `https://www.hsglobalai.com/?t=${ts}` },
    { name: 'DIHUAVA Product Page', url: `https://www.hsglobalai.com/products/ai-digital-human?t=${ts}` },
    { name: 'Products Overview Page', url: `https://www.hsglobalai.com/products?t=${ts}` }
  ];

  const keywordsToTrack = [
    "offline AI digital human software",
    "digital human software",
    "AI digital human platform",
    "on-device AI digital human",
    "enterprise digital human software"
  ];

  for (const p of targetPages) {
    console.log(`\n--- 4. INSPECTING: ${p.name} (${p.url.split('?')[0]}) ---`);
    const pageRes = await fetchUrl(p.url);
    const html = pageRes.body;

    // Title
    const title = (html.match(/<title>([^<]+)<\/title>/i) || [])[1] || 'N/A';
    // Description
    const metaDesc = (html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/i) || [])[1] || 'N/A';
    // Canonical
    const canonical = (html.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/i) || [])[1] || 'N/A';
    // Robots
    const metaRobots = (html.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/i) || [])[1] || 'N/A';
    // Viewport
    const viewport = (html.match(/<meta[^>]+name=["']viewport["'][^>]+content=["']([^"']+)["']/i) || [])[1] || 'N/A';

    console.log(`  Title (${title.length} chars): ${title}`);
    console.log(`  Meta Description (${metaDesc.length} chars): ${metaDesc}`);
    console.log(`  Canonical: ${canonical}`);
    console.log(`  Meta Robots: ${metaRobots}`);
    console.log(`  Viewport: ${viewport}`);

    const { h1s, h2s } = extractHeadings(html);
    console.log(`  H1 (${h1s.length}):`, h1s);
    console.log(`  H2 (${h2s.length}):`, h2s.slice(0, 8));

    // Keyword analysis in visible/total text
    const textOnly = html.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
    const kwFreq = checkKeywords(textOnly, keywordsToTrack);
    console.log('  Keyword Frequencies:');
    for (const [kw, count] of Object.entries(kwFreq)) {
      console.log(`    - "${kw}": ${count}`);
    }

    // G2 Link Check
    const g2Links = [...html.matchAll(/<a[^>]+href=["'](https:\/\/www\.g2\.com[^"']*)["'][^>]*>([\s\S]*?)<\/a>/gi)];
    console.log(`  G2 External Links (${g2Links.length}):`);
    g2Links.forEach(l => console.log(`    - href: ${l[1]} | text: ${l[2].replace(/<[^>]+>/g, ' ').trim()}`));

    // Structured data
    const schemas = parseJsonLd(html);
    console.log(`  Structured Data: ${schemas.length} JSON-LD blocks found.`);
    schemas.forEach((s, idx) => {
      const type = s['@type'] || (s['@graph'] ? 'Graph (' + s['@graph'].map(g => g['@type']).join(', ') + ')' : 'Unknown');
      const id = s['@id'] || (s['@graph'] ? 'Graph root' : 'N/A');
      console.log(`    Block #${idx + 1}: ${type} [${id}]`);
    });
  }
}

run().catch(console.error);

