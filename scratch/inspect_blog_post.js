const fs = require('fs');
const content = fs.readFileSync('src/data/blogPosts.ts', 'utf8');

const slugIdx = content.indexOf('what-is-a-digital-human-avatar');
if (slugIdx !== -1) {
  // Find start of object
  const start = content.lastIndexOf('{', slugIdx);
  // Find title
  const titleMatch = content.slice(start, start + 500).match(/title:\s*["']([^"']+)["']/);
  const excerptMatch = content.slice(start, start + 500).match(/excerpt:\s*["']([^"']+)["']/);
  console.log('Title:', titleMatch ? titleMatch[1] : 'No title');
  console.log('Excerpt:', excerptMatch ? excerptMatch[1] : 'No excerpt');

  // Let's print headings in this post
  const nextPostIdx = content.indexOf('slug:', slugIdx + 50);
  const postBody = content.slice(start, nextPostIdx !== -1 ? nextPostIdx : start + 6000);
  const headings = postBody.match(/##+ [^\n]+/g);
  console.log('Headings in post:\n', headings);

  // Check how DIHUAVA or product links are included in this blog post
  console.log('\nMentions of DIHUAVA in post:', (postBody.match(/DIHUAVA/g) || []).length);
  const links = postBody.match(/\[[^\]]+\]\([^)]+\)/g);
  console.log('\nMarkdown links in post:\n', links);
}
