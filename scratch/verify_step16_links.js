const fs = require('fs');

console.log('=== VERIFYING BLOG POST LINKS ===');
const blogHtmlPath = '.next/server/app/blog/what-is-a-digital-human-avatar.html';
if (fs.existsSync(blogHtmlPath)) {
  const html = fs.readFileSync(blogHtmlPath, 'utf8');
  
  // Find links to /products/ai-digital-human
  const regex = /<a[^>]*href="([^"]*\/products\/ai-digital-human)"[^>]*>([\s\S]*?)<\/a>/gi;
  let match;
  let count = 0;
  while ((match = regex.exec(html)) !== null) {
    count++;
    const href = match[1];
    const text = match[2].replace(/<[^>]+>/g, '').trim();
    console.log(`Link ${count}: [${text}] -> ${href}`);
  }
} else {
  console.log('Blog HTML file not found at:', blogHtmlPath);
}

console.log('\n=== VERIFYING FOOTER LINKS ACROSS LOCALES ===');
const locales = [
  { name: 'en (default)', path: '.next/server/app/index.html', expectedHref: '/products/ai-digital-human' },
  { name: 'zh', path: '.next/server/app/zh.html', expectedHref: '/zh/products/ai-digital-human' },
  { name: 'ru', path: '.next/server/app/ru.html', expectedHref: '/ru/products/ai-digital-human' },
  { name: 'es', path: '.next/server/app/es.html', expectedHref: '/es/products/ai-digital-human' },
  { name: 'fr', path: '.next/server/app/fr.html', expectedHref: '/fr/products/ai-digital-human' },
];

for (const loc of locales) {
  if (fs.existsSync(loc.path)) {
    const html = fs.readFileSync(loc.path, 'utf8');
    const footerLinkMatch = html.match(new RegExp(`<a[^>]*href="(${loc.expectedHref})"[^>]*>([\\s\\S]*?)<\\/a>`, 'i'));
    if (footerLinkMatch) {
      const text = footerLinkMatch[2].replace(/<[^>]+>/g, '').trim();
      console.log(`${loc.name}: [${text}] -> ${footerLinkMatch[1]}`);
    } else {
      console.log(`${loc.name}: Link NOT found for expected href: ${loc.expectedHref}`);
    }
  } else {
    console.log(`${loc.name}: File not found at ${loc.path}`);
  }
}

