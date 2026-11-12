const fs = require('fs');
const path = require('path');

function inspectHtml(filePath, label) {
  console.log(`\n======================================================`);
  console.log(`INSPECTING: ${label}`);
  console.log(`File: ${filePath}`);
  console.log(`======================================================`);

  if (!fs.existsSync(filePath)) {
    console.log(`FILE NOT FOUND: ${filePath}`);
    return;
  }

  const html = fs.readFileSync(filePath, 'utf8');

  // Title
  const titleMatch = html.match(/<title>([^<]+)<\/title>/);
  console.log(`Title (${titleMatch ? titleMatch[1].length : 0} chars):`);
  console.log(`  "${titleMatch ? titleMatch[1] : 'NONE'}"`);

  // Meta Description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i) ||
                    html.match(/<meta[^>]*content=["']([^"']+)["'][^>]*name=["']description["']/i);
  console.log(`\nMeta Description (${descMatch ? descMatch[1].length : 0} chars):`);
  console.log(`  "${descMatch ? descMatch[1] : 'NONE'}"`);

  // Canonical
  const canonMatch = html.match(/<link[^>]*rel=["']canonical["'][^>]*href=["']([^"']+)["']/i) ||
                     html.match(/<link[^>]*href=["']([^"']+)["'][^>]*rel=["']canonical["']/i);
  console.log(`\nCanonical:`);
  console.log(`  ${canonMatch ? canonMatch[1] : 'NONE'}`);

  // Hreflang alternates
  const hreflangs = [];
  const linkMatches = html.matchAll(/<link\s+([^>]+)>/gi);
  for (const m of linkMatches) {
    const tag = m[1];
    if (tag.includes('rel="alternate"') || tag.includes("rel='alternate'")) {
      const hMatch = tag.match(/hreflang=["']([^"']+)["']/i);
      const uMatch = tag.match(/href=["']([^"']+)["']/i);
      if (hMatch && uMatch) {
        hreflangs.push(`${hMatch[1]} -> ${uMatch[1]}`);
      }
    }
  }
  console.log(`\nHreflang Alternates (${hreflangs.length}):`);
  hreflangs.forEach(h => console.log(`  ${h}`));

  // JSON-LD Scripts
  const ldMatches = [...html.matchAll(/<script[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi)];
  console.log(`\nJSON-LD Blocks (${ldMatches.length}):`);
  ldMatches.forEach((m, idx) => {
    try {
      const parsed = JSON.parse(m[1]);
      const type = parsed['@type'] || (parsed['@graph'] ? `Graph [${parsed['@graph'].map(g => g['@type']).join(', ')}]` : 'Unknown');
      console.log(`  [Block ${idx + 1}] Type: ${type}`);
      if (type === 'FAQPage') {
        console.log(`    Questions (${parsed.mainEntity?.length || 0}):`);
        (parsed.mainEntity || []).forEach((q, qIdx) => {
          console.log(`      ${qIdx + 1}. Q: ${q.name}`);
          console.log(`         A: ${q.acceptedAnswer?.text?.slice(0, 80)}...`);
        });
      }
    } catch (e) {
      console.log(`  [Block ${idx + 1}] PARSE ERROR: ${e.message}`);
    }
  });
}

// 1. Primary English route
inspectHtml(
  path.resolve(__dirname, '../.next/server/app/products/ai-digital-human.html'),
  'English Primary: /products/ai-digital-human'
);

// 2. Localized zh route
inspectHtml(
  path.resolve(__dirname, '../.next/server/app/zh/products/ai-digital-human.html'),
  'Localized Chinese: /zh/products/ai-digital-human'
);

// 3. Localized es route
inspectHtml(
  path.resolve(__dirname, '../.next/server/app/es/products/ai-digital-human.html'),
  'Localized Spanish: /es/products/ai-digital-human'
);

// 4. Products Index
inspectHtml(
  path.resolve(__dirname, '../.next/server/app/products.html'),
  'English Products Index: /products'
);

// 5. Capability feature route: avatar-customization
inspectHtml(
  path.resolve(__dirname, '../.next/server/app/products/ai-digital-human/avatar-customization.html'),
  'Feature Sub-page: /products/ai-digital-human/avatar-customization'
);

// 6. Localized feature route: zh avatar-customization
inspectHtml(
  path.resolve(__dirname, '../.next/server/app/zh/products/ai-digital-human/avatar-customization.html'),
  'Localized Feature Sub-page: /zh/products/ai-digital-human/avatar-customization'
);
