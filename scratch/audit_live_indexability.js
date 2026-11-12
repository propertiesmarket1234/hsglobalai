const https = require('https');
const http = require('http');

function fetchUrl(url, options = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const client = parsed.protocol === 'https:' ? https : http;
    const req = client.request({
      method: options.method || 'GET',
      hostname: parsed.hostname,
      port: parsed.port || (parsed.protocol === 'https:' ? 443 : 80),
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': options.userAgent || 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache',
        ...(options.headers || {})
      }
    }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        status: res.statusCode,
        headers: res.headers,
        body: data,
        url
      }));
    });
    req.on('error', reject);
    req.end();
  });
}

async function runAudit() {
  console.log("=================================================================");
  console.log("LIVE INDEXABILITY & AI CRAWLER ACCESSIBILITY AUDIT");
  console.log("=================================================================\n");

  // 1. Robots.txt
  console.log("--- 1. ROBOTS.TXT CHECK ---");
  const robotsRes = await fetchUrl("https://www.hsglobalai.com/robots.txt");
  console.log(`Status: ${robotsRes.status}`);
  console.log(`Content-Type: ${robotsRes.headers['content-type']}`);
  console.log(`X-Robots-Tag: ${robotsRes.headers['x-robots-tag'] || 'None'}`);
  console.log(`Body:\n${robotsRes.body.trim()}\n`);

  // 2. Sitemap.xml
  console.log("--- 2. SITEMAP.XML CHECK ---");
  const sitemapRes = await fetchUrl("https://www.hsglobalai.com/sitemap.xml");
  console.log(`Status: ${sitemapRes.status}`);
  console.log(`Content-Type: ${sitemapRes.headers['content-type']}`);
  const sitemapBody = sitemapRes.body;
  const isXml = sitemapBody.includes('<?xml') || sitemapBody.includes('<urlset');
  console.log(`Is XML format: ${isXml}`);
  
  // Count urls
  const locMatches = [...sitemapBody.matchAll(/<loc>([^<]+)<\/loc>/g)].map(m => m[1]);
  console.log(`Total URLs in sitemap: ${locMatches.length}`);
  const primaryPageInSitemap = locMatches.includes("https://www.hsglobalai.com/products/ai-digital-human");
  console.log(`Primary URL in sitemap (https://www.hsglobalai.com/products/ai-digital-human): ${primaryPageInSitemap}`);

  // 3. Live primary page HTML check
  console.log("\n--- 3. PRIMARY PAGE (https://www.hsglobalai.com/products/ai-digital-human) ---");
  const pageRes = await fetchUrl("https://www.hsglobalai.com/products/ai-digital-human");
  console.log(`HTTP Status: ${pageRes.status}`);
  console.log(`Content-Type: ${pageRes.headers['content-type']}`);
  console.log(`X-Robots-Tag: ${pageRes.headers['x-robots-tag'] || 'None'}`);

  const html = pageRes.body;

  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log(`Title: ${titleMatch ? titleMatch[1] : 'NOT FOUND'}`);

  // Meta description
  const metaDescMatch = html.match(/<meta\s+name=["']description["']\s+content=["']([^"']+)["']/i);
  console.log(`Meta Description: ${metaDescMatch ? metaDescMatch[1] : 'NOT FOUND'}`);

  // Meta Robots
  const metaRobotsMatch = html.match(/<meta\s+name=["']robots["']\s+content=["']([^"']+)["']/i);
  console.log(`Meta Robots: ${metaRobotsMatch ? metaRobotsMatch[1] : 'NOT FOUND'}`);

  // Googlebot specific meta
  const googlebotMetaMatch = html.match(/<meta\s+name=["']googlebot["']\s+content=["']([^"']+)["']/i);
  console.log(`Googlebot Meta: ${googlebotMetaMatch ? googlebotMetaMatch[1] : 'NOT FOUND'}`);

  // Canonical
  const canonicalMatch = html.match(/<link\s+rel=["']canonical["']\s+href=["']([^"']+)["']/i);
  console.log(`Canonical URL: ${canonicalMatch ? canonicalMatch[1] : 'NOT FOUND'}`);

  // Hreflang alternates
  const hreflangMatches = [...html.matchAll(/<link\s+rel=["']alternate["'][^>]+hreflang=["']([^"']+)["'][^>]+href=["']([^"']+)["']/gi)];
  console.log(`Hreflang alternates found: ${hreflangMatches.length}`);
  hreflangMatches.forEach(m => console.log(`  - hreflang="${m[1]}" href="${m[2]}"`));

  // H1
  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log(`H1 Tag: ${h1Match ? h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NOT FOUND'}`);

  // Definition section
  const definitionMatch = html.includes("Offline AI digital human software is an on-premise application that runs conversational 3D avatars locally");
  console.log(`Definition section present in SSR HTML: ${definitionMatch}`);

  // FAQ Content in SSR HTML
  const faqQuestions = [
    "What is offline AI digital human software?",
    "Can DIHUAVA operate without a continuous internet connection?",
    "What hardware is required to run DIHUAVA?",
    "Which languages does DIHUAVA support offline?",
    "Can DIHUAVA be deployed on kiosks and interactive displays?",
    "How does DIHUAVA handle enterprise document search and prevent hallucinations?",
    "How is DIHUAVA different from cloud-based digital human platforms?",
    "How can an enterprise request pricing or a demonstration?"
  ];
  let faqsFound = 0;
  for (const q of faqQuestions) {
    if (html.includes(q)) faqsFound++;
  }
  console.log(`FAQ items found in SSR HTML: ${faqsFound} of ${faqQuestions.length}`);

  // JSON-LD blocks
  const jsonLdMatches = [...html.matchAll(/<script\s+type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`JSON-LD blocks found: ${jsonLdMatches.length}`);
  for (let i = 0; i < jsonLdMatches.length; i++) {
    try {
      const parsed = JSON.parse(jsonLdMatches[i][1]);
      const type = parsed['@type'] || (parsed['@graph'] ? 'Graph (' + parsed['@graph'].map(g => g['@type']).join(', ') + ')' : 'Unknown');
      console.log(`  Block ${i + 1}: @type = ${type}`);
    } catch (e) {
      console.log(`  Block ${i + 1}: PARSE ERROR (${e.message})`);
    }
  }

  // 4. Test User-Agents (Crawler Accessibility)
  console.log("\n--- 4. USER-AGENT CRAWLER ACCESSIBILITY TESTS ---");
  const userAgents = [
    { name: "Googlebot (Search)", ua: "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" },
    { name: "Bingbot (Search)", ua: "Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)" },
    { name: "OAI-SearchBot (ChatGPT Search)", ua: "OAI-SearchBot/1.0; (+https://openai.com/bot)" },
    { name: "PerplexityBot (Perplexity Search)", ua: "PerplexityBot/1.0 (+https://www.perplexity.ai/perplexitybot)" },
    { name: "ClaudeBot (Anthropic Search/AI)", ua: "ClaudeBot/1.0; (+claudebot@anthropic.com)" },
    { name: "Applebot (Apple Intelligence/Siri)", ua: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)" },
    { name: "GPTBot (OpenAI Training Crawler)", ua: "Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)" }
  ];

  for (const bot of userAgents) {
    try {
      const res = await fetchUrl("https://www.hsglobalai.com/products/ai-digital-human", { userAgent: bot.ua });
      console.log(`[${res.status}] ${bot.name.padEnd(35)} -> Length: ${res.body.length} bytes | Vercel-ID: ${res.headers['x-vercel-id'] ? 'Present' : 'None'}`);
    } catch (e) {
      console.log(`[ERR] ${bot.name.padEnd(35)} -> Error: ${e.message}`);
    }
  }
}

runAudit().catch(console.error);
