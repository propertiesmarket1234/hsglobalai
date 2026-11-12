const https = require('https');

const targetUrls = [
  'https://www.hsglobalai.com/robots.txt',
  'https://www.hsglobalai.com/sitemap.xml',
  'https://www.hsglobalai.com/products/ai-digital-human',
  'https://www.hsglobalai.com/industries/retail',
  'https://www.hsglobalai.com/blog/how-ai-in-retail',
  'https://www.hsglobalai.com/blog/why-100-offline-ai',
  'https://www.hsglobalai.com/blog/ai-digital-human-fleet-management'
];

function fetchEndpoint(url, userAgent = 'Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)') {
  return new Promise((resolve) => {
    https.get(url, { headers: { 'User-Agent': userAgent } }, (res) => {
      let body = '';
      res.on('data', chunk => { if (body.length < 200000) body += chunk; });
      res.on('end', () => {
        resolve({
          url,
          status: res.statusCode,
          headers: res.headers,
          body
        });
      });
    }).on('error', err => resolve({ url, error: err.message }));
  });
}

async function run() {
  console.log('=== 1. CHECKING ROBOTS.TXT (Googlebot UA) ===');
  const robotsRes = await fetchEndpoint('https://www.hsglobalai.com/robots.txt');
  console.log(`Status: ${robotsRes.status}`);
  console.log(`Body:\n${robotsRes.body}`);

  console.log('\n=== 2. CHECKING SITEMAP.XML ===');
  const sitemapRes = await fetchEndpoint('https://www.hsglobalai.com/sitemap.xml');
  console.log(`Status: ${sitemapRes.status}`);
  console.log(`Sitemap size: ${sitemapRes.body.length} bytes`);
  
  const checkUrls = [
    'https://www.hsglobalai.com/products/ai-digital-human',
    'https://www.hsglobalai.com/industries/retail',
    'https://www.hsglobalai.com/blog/how-ai-in-retail',
    'https://www.hsglobalai.com/blog/why-100-offline-ai',
    'https://www.hsglobalai.com/blog/ai-digital-human-fleet-management'
  ];

  checkUrls.forEach(u => {
    const inSitemap = sitemapRes.body.includes(`<loc>${u}</loc>`);
    console.log(`- In sitemap: ${u} -> ${inSitemap}`);
  });

  console.log('\n=== 3. LIVE URL CRAWL & HEADERS AS GOOGLEBOT ===');
  for (const u of checkUrls) {
    const res = await fetchEndpoint(u);
    const titleMatch = res.body.match(/<title>([^<]+)<\/title>/);
    const descMatch = res.body.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["']/);
    const canonicalMatch = res.body.match(/<link[^>]+rel=["']canonical["'][^>]+href=["']([^"']+)["']/);
    const robotsMatch = res.body.match(/<meta[^>]+name=["']robots["'][^>]+content=["']([^"']+)["']/);
    const xRobots = res.headers['x-robots-tag'] || 'None';

    console.log(`\nURL: ${u}`);
    console.log(`  HTTP Status:      ${res.status}`);
    console.log(`  User-Declared Canonical: ${canonicalMatch ? canonicalMatch[1] : 'NONE'}`);
    console.log(`  Canonical Matches URL:   ${canonicalMatch && canonicalMatch[1] === u}`);
    console.log(`  Robots Meta Tag:  ${robotsMatch ? robotsMatch[1] : 'NOT SET (INDEXABLE)'}`);
    console.log(`  X-Robots-Tag:     ${xRobots}`);
    console.log(`  Title:            ${titleMatch ? titleMatch[1] : 'NONE'}`);
    console.log(`  Description:      ${descMatch ? descMatch[1] : 'NONE'}`);
    console.log(`  Vercel Server:    ${res.headers['server']} | Age: ${res.headers['age']}`);
  }
}

run();

