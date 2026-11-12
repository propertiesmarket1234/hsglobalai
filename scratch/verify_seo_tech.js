const fs = require('fs');

const paths = [
  'D:/WebProjects/hsglobalai/src/i18n/config.ts',
  'D:/WebProjects/hsglobalai/src/i18n.ts',
  'D:/WebProjects/hsglobalai/src/app/layout.tsx',
  'D:/WebProjects/hsglobalai/src/app/sitemap.ts',
  'D:/WebProjects/hsglobalai/src/app/robots.ts',
  'D:/WebProjects/hsglobalai/src/app/[lang]/layout.tsx'
];

paths.forEach(p => {
  if (fs.existsSync(p)) {
    console.log(`\n=== Exists: ${p} ===`);
    const content = fs.readFileSync(p, 'utf8');
    console.log(content.slice(0, 500));
  } else {
    console.log(`\n=== MISSING: ${p} ===`);
  }
});

// Check if de.ts or ar.ts exist in src/i18n/dictionaries/
const dictDir = 'D:/WebProjects/hsglobalai/src/i18n/dictionaries';
if (fs.existsSync(dictDir)) {
  console.log('\nDictionaries in src/i18n/dictionaries:', fs.readdirSync(dictDir));
}

