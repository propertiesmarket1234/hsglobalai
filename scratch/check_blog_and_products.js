const fs = require('fs');

function parseProperCSV(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const rows = [];
  let currentRow = [];
  let currentField = '';
  let inQuotes = false;

  for (let i = 0; i < content.length; i++) {
    const char = content[i];
    const nextChar = content[i + 1];

    if (char === '"') {
      if (inQuotes && nextChar === '"') {
        currentField += '"';
        i++;
      } else {
        inQuotes = !inQuotes;
      }
    } else if (char === ',' && !inQuotes) {
      currentRow.push(currentField);
      currentField = '';
    } else if ((char === '\r' || char === '\n') && !inQuotes) {
      if (char === '\r' && nextChar === '\n') i++;
      currentRow.push(currentField);
      currentField = '';
      if (currentRow.length > 0 && currentRow.some(c => c.trim().length > 0)) rows.push(currentRow);
      currentRow = [];
    } else {
      currentField += char;
    }
  }
  if (currentField || currentRow.length > 0) {
    currentRow.push(currentField);
    if (currentRow.some(c => c.trim().length > 0)) rows.push(currentRow);
  }

  if (rows.length === 0) return [];
  const header = rows[0].map(h => h.trim());
  return rows.slice(1).map(row => {
    const obj = {};
    header.forEach((h, idx) => {
      obj[h] = row[idx] ? row[idx].trim() : '';
    });
    return obj;
  });
}

const sitewidePages = parseProperCSV('D:/WebProjects/hsglobalai/docs/seo-sitewide/Pages.csv');

// Read blogPosts.ts to get slugs
const blogPostsFile = fs.readFileSync('D:/WebProjects/hsglobalai/src/data/blogPosts.ts', 'utf-8');
const slugMatches = [...blogPostsFile.matchAll(/slug:\s*"([^"]+)"/g)].map(m => m[1]);
console.log('Total blog posts in code:', slugMatches.length);

console.log('\n=== BLOG POST PERFORMANCE IN GSC SITEWIDE EXPORT ===');
slugMatches.forEach((slug, idx) => {
  const url = `https://www.hsglobalai.com/blog/${slug}`;
  const gscEntry = sitewidePages.find(p => p['Top pages'] === url || p['Top pages'] === `https://hsglobalai.com/blog/${slug}`);
  if (gscEntry) {
    console.log(`[Post ${idx + 1}] "${slug}": Imp=${gscEntry.Impressions}, Clicks=${gscEntry.Clicks}, CTR=${gscEntry.CTR}, Pos=${gscEntry.Position}`);
  } else {
    // Check if any localized or partial match exists
    const anyMatch = sitewidePages.filter(p => p['Top pages'] && p['Top pages'].includes(slug));
    if (anyMatch.length > 0) {
      console.log(`[Post ${idx + 1}] "${slug}": NO canonical English match, but localized/sub-matches found:`, anyMatch.map(m => m['Top pages']));
    } else {
      console.log(`[Post ${idx + 1}] "${slug}": 0 impressions (NOT in GSC export)`);
    }
  }
});

// Also check DIHUAVA feature subpages
console.log('\n=== DIHUAVA PRODUCT PAGES IN GSC SITEWIDE EXPORT ===');
const dihuavaPages = [
  'https://www.hsglobalai.com/products/ai-digital-human',
  'https://www.hsglobalai.com/products/ai-digital-human/avatar-customization',
  'https://www.hsglobalai.com/products/ai-digital-human/document-intelligence',
  'https://www.hsglobalai.com/products/ai-digital-human/multilingual-support',
  'https://www.hsglobalai.com/products/ai-digital-human/persona-management',
  'https://www.hsglobalai.com/products/ai-digital-human/ai-product-catalog'
];

dihuavaPages.forEach(url => {
  const gscEntry = sitewidePages.find(p => p['Top pages'] === url);
  if (gscEntry) {
    console.log(`"${url}": Imp=${gscEntry.Impressions}, Clicks=${gscEntry.Clicks}, CTR=${gscEntry.CTR}, Pos=${gscEntry.Position}`);
  } else {
    const anyMatch = sitewidePages.filter(p => p['Top pages'] && p['Top pages'].includes(url.replace('https://www.hsglobalai.com', '')));
    console.log(`"${url}": 0 direct impressions in export. Related matches:`, anyMatch.map(m => `${m['Top pages']} (Imp=${m.Impressions})`));
  }
});

