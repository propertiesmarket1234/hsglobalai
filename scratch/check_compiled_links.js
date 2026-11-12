const fs = require('fs');

const blogHtml = fs.readFileSync('.next/server/app/blog/what-is-a-digital-human-avatar.html', 'utf8');

// Match all <a> tags with href containing /products/ai-digital-human
const linkRegex = /<a[^>]*href="([^"]*products\/ai-digital-human[^"]*)"[^>]*>([\s\S]*?)<\/a>/gi;
let m;
console.log('=== All links to /products/ai-digital-human in Blog HTML ===');
while ((m = linkRegex.exec(blogHtml)) !== null) {
  console.log(`Href: ${m[1]} | Text: "${m[2].replace(/<[^>]+>/g, '').trim()}"`);
}

console.log('\n=== Footer Link across all locale HTML files ===');
const localeFiles = [
  { lang: 'en', path: '.next/server/app/index.html' },
  { lang: 'zh', path: '.next/server/app/zh.html' },
  { lang: 'ru', path: '.next/server/app/ru.html' },
  { lang: 'es', path: '.next/server/app/es.html' },
  { lang: 'fr', path: '.next/server/app/fr.html' },
];

for (const lf of localeFiles) {
  const html = fs.readFileSync(lf.path, 'utf8');
  // Match link with AI Digital Human Software text
  const match = html.match(/<a[^>]*href="([^"]*products\/ai-digital-human)"[^>]*>([\s\S]*?AI Digital Human Software[\s\S]*?)<\/a>/i);
  if (match) {
    console.log(`${lf.lang}: Found! Href: ${match[1]} | Text: "${match[2].replace(/<[^>]+>/g, '').trim()}"`);
  } else {
    console.log(`${lf.lang}: NOT found with AI Digital Human Software`);
  }
}

