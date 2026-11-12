const https = require('https');

function fetchUrl(url, customHeaders = {}) {
  return new Promise((resolve, reject) => {
    const parsed = new URL(url);
    const options = {
      hostname: parsed.hostname,
      path: parsed.pathname + parsed.search,
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        ...customHeaders
      }
    };
    https.get(options, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({
        statusCode: res.statusCode,
        headers: res.headers,
        body: data
      }));
    }).on('error', reject);
  });
}

async function audit() {
  console.log('=== STEP 15 LIVE AUDIT: ROBOTS.TXT & SITEMAP ===');
  
  // 1. Robots.txt
  const robotsRes = await fetchUrl('https://www.hsglobalai.com/robots.txt');
  console.log('robots.txt Status:', robotsRes.statusCode);
  console.log('robots.txt Content:\n' + robotsRes.body.trim());

  // 2. Sitemap.xml
  const sitemapRes = await fetchUrl('https://www.hsglobalai.com/sitemap.xml');
  console.log('\nsitemap.xml Status:', sitemapRes.statusCode);
  const sitemapBody = sitemapRes.body;
  const sitemapUrls = (sitemapBody.match(/<loc>([^<]+)<\/loc>/g) || []).map(u => u.replace(/<\/?loc>/g, ''));
  console.log('Total URLs in sitemap:', sitemapUrls.length);

  const primaryInSitemap = sitemapUrls.includes('https://www.hsglobalai.com/products/ai-digital-human');
  console.log('Primary DIHUAVA URL present in sitemap.xml:', primaryInSitemap);

  const localizedInSitemap = {
    zh: sitemapUrls.includes('https://www.hsglobalai.com/zh/products/ai-digital-human'),
    ru: sitemapUrls.includes('https://www.hsglobalai.com/ru/products/ai-digital-human'),
    es: sitemapUrls.includes('https://www.hsglobalai.com/es/products/ai-digital-human'),
    fr: sitemapUrls.includes('https://www.hsglobalai.com/fr/products/ai-digital-human'),
  };
  console.log('Localized DIHUAVA URLs present in sitemap.xml:', localizedInSitemap);

  // 3. Crawler User-Agent Responses for Primary URL
  console.log('\n=== TESTING CRAWLER USER-AGENTS ON PRIMARY URL ===');
  const crawlers = [
    { name: 'Standard Browser', ua: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' },
    { name: 'Googlebot', ua: 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)' },
    { name: 'Bingbot', ua: 'Mozilla/5.0 (compatible; bingbot/2.0; +http://www.bing.com/bingbot.htm)' },
    { name: 'OAI-SearchBot', ua: 'OAI-SearchBot/1.0 (+https://openai.com/searchbot)' },
    { name: 'GPTBot', ua: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; GPTBot/1.2; +https://openai.com/gptbot)' },
    { name: 'PerplexityBot', ua: 'PerplexityBot/1.0 (+https://www.perplexity.ai/bot)' },
    { name: 'ClaudeBot', ua: 'Mozilla/5.0 AppleWebKit/537.36 (KHTML, like Gecko; compatible; ClaudeBot/1.0; +claudebot@anthropic.com)' },
    { name: 'Applebot', ua: 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.4 Safari/605.1.15 (Applebot/0.1; +http://www.apple.com/go/applebot)' },
  ];

  for (const c of crawlers) {
    const res = await fetchUrl('https://www.hsglobalai.com/products/ai-digital-human', { 'User-Agent': c.ua });
    const hasNoindex = res.body.includes('noindex') || (res.headers['x-robots-tag'] && res.headers['x-robots-tag'].includes('noindex'));
    console.log(`${c.name.padEnd(18)}: HTTP ${res.statusCode} | noindex: ${hasNoindex} | bytes: ${res.body.length}`);
  }

  // 4. Detailed HTML & Header Inspection
  console.log('\n=== DETAILED HTML & DIRECTIVE INSPECTION ===');
  const pageRes = await fetchUrl('https://www.hsglobalai.com/products/ai-digital-human');
  const html = pageRes.body;

  console.log('HTTP Status:', pageRes.statusCode);
  console.log('x-robots-tag header:', pageRes.headers['x-robots-tag'] || 'None (allowed)');
  
  const metaRobots = html.match(/<meta[^>]*name=["']robots["'][^>]*content=["']([^"']+)["']/i);
  console.log('Meta robots in HTML:', metaRobots ? metaRobots[1] : 'None (default index, follow)');

  const canonical = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i);
  console.log('Canonical tag in HTML:', canonical ? canonical[1] : 'NOT FOUND');

  // Hreflang tags
  const hreflangs = [];
  const hreflangRegex = /<link[^>]*rel=["']alternate["'][^>]*hreflang=["']([^"']+)["'][^>]*href=["']([^"']+)["']/gi;
  let hMatch;
  while ((hMatch = hreflangRegex.exec(html)) !== null) {
    hreflangs.push({ lang: hMatch[1], href: hMatch[2] });
  }
  console.log('Hreflang alternates count:', hreflangs.length);
  hreflangs.forEach(h => console.log(`  hreflang="${h.lang}" -> ${h.href}`));

  // Structured Data Check
  const hasWebPage = html.includes('"@type":"WebPage"');
  const hasSoftwareApp = html.includes('"@type":"SoftwareApplication"');
  const hasBreadcrumb = html.includes('"@type":"BreadcrumbList"');
  const hasFAQPage = html.includes('"@type":"FAQPage"');
  const questionCount = (html.match(/"@type":"Question"/g) || []).length;

  console.log('\n=== STRUCTURED DATA VALIDATION ===');
  console.log('WebPage schema:', hasWebPage);
  console.log('SoftwareApplication schema:', hasSoftwareApp);
  console.log('BreadcrumbList schema:', hasBreadcrumb);
  console.log('FAQPage schema:', hasFAQPage, `(${questionCount} questions)`);

  const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
  console.log('Title in HTML:', titleMatch ? titleMatch[1] : 'NOT FOUND');

  const descMatch = html.match(/name="description"\s+content="([^"]+)"/i);
  console.log('Description in HTML:', descMatch ? descMatch[1] : 'NOT FOUND');

  const h1Match = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  console.log('H1 in HTML:', h1Match ? h1Match[1].replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim() : 'NOT FOUND');
}

audit().catch(console.error);

