const https = require('https');

const urls = [
  'https://www.hsglobalai.com/industries/banking',
  'https://www.hsglobalai.com/industries/retail',
  'https://www.hsglobalai.com/industries/healthcare',
  'https://www.hsglobalai.com/industries/corporate',
  'https://www.hsglobalai.com/industries/education',
  'https://www.hsglobalai.com/industries/tourism',
];

function fetchPage(url) {
  return new Promise((resolve, reject) => {
    https.get(url, { headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve({ status: res.statusCode, headers: res.headers, body: data }));
    }).on('error', err => reject(err));
  });
}

async function runAudit() {
  console.log('=== STEP 36E LIVE PRODUCTION AUDIT ===\n');

  for (const url of urls) {
    console.log(`Auditing: ${url}`);
    try {
      const res = await fetchPage(url);
      console.log(`HTTP Status: ${res.status}`);

      const html = res.body;

      // Title
      const titleMatch = html.match(/<title>([^<]+)<\/title>/i);
      const title = titleMatch ? titleMatch[1] : 'NOT FOUND';
      console.log(`Title: "${title}"`);

      // Meta Description
      const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i) || html.match(/<meta\s+content="([^"]+)"\s+name="description"/i);
      const desc = descMatch ? descMatch[1] : 'NOT FOUND';
      console.log(`Meta Description: "${desc.substring(0, 80)}..."`);

      // Canonical
      const canonicalMatch = html.match(/<link\s+rel="canonical"\s+href="([^"]+)"/i) || html.match(/<link\s+href="([^"]+)"\s+rel="canonical"/i);
      const canonical = canonicalMatch ? canonicalMatch[1] : 'NOT FOUND';
      console.log(`Canonical: "${canonical}"`);

      // H1 Tags
      const h1Matches = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/gi) || [];
      console.log(`H1 Count: ${h1Matches.length}`);
      h1Matches.forEach((h1, i) => {
        const cleanH1 = h1.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
        console.log(`  H1 [${i + 1}]: "${cleanH1}"`);
      });

      // Target Benchmark Label Check
      const hasTargetBenchmark = html.includes('Target Benchmark') || html.includes('(Target Benchmark)');
      console.log(`Includes "Target Benchmark": ${hasTargetBenchmark}`);

      // Offline positioning check
      const hasOfflinePos = html.includes('100% offline on-device by default');
      console.log(`Includes Offline Positioning: ${hasOfflinePos}`);

      // Indian languages check
      const hasIndianLang = html.includes('7 specialized Indian languages');
      console.log(`Includes 7 Indian Languages: ${hasIndianLang}`);

      // FAQPage JSON-LD check
      const faqSchemaMatch = html.includes('"@type":"FAQPage"') || html.includes('"@type": "FAQPage"');
      console.log(`Has FAQPage JSON-LD: ${faqSchemaMatch}`);

      // BreadcrumbList & Service schema check
      const hasBreadcrumb = html.includes('"BreadcrumbList"');
      const hasService = html.includes('"Service"');
      console.log(`Has BreadcrumbList: ${hasBreadcrumb}, Has Service: ${hasService}`);

      // Blog link checks
      if (url.includes('tourism')) {
        const hasMultilingualBlog = html.includes('/blog/multilingual-ai');
        const hasCatalogBlog = html.includes('/blog/ai-product-catalogue');
        console.log(`Tourism Blog Links -> multilingual-ai: ${hasMultilingualBlog}, ai-product-catalogue: ${hasCatalogBlog}`);
      }

      console.log('-'.repeat(60));
    } catch (err) {
      console.error(`Error fetching ${url}:`, err.message);
    }
  }

  // Check sitemap and robots
  console.log('\nChecking /sitemap.xml and /robots.txt:');
  try {
    const sitemapRes = await fetchPage('https://www.hsglobalai.com/sitemap.xml');
    console.log(`sitemap.xml Status: ${sitemapRes.status}`);
    const robotsRes = await fetchPage('https://www.hsglobalai.com/robots.txt');
    console.log(`robots.txt Status: ${robotsRes.status}`);
  } catch (err) {
    console.error('Error checking sitemap/robots:', err.message);
  }
}

runAudit();
