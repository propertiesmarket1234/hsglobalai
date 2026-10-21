async function checkProduction() {
  const baseUrl = 'https://www.hsglobalai.com';
  console.log(`Checking production deployment at ${baseUrl}...\n`);

  // 1. Robots.txt
  try {
    const robotsRes = await fetch(`${baseUrl}/robots.txt`);
    console.log(`[Robots.txt] Status: ${robotsRes.status}`);
    const robotsText = await robotsRes.text();
    console.log(`[Robots.txt] Contains sitemap: ${robotsText.includes('sitemap.xml')}`);
  } catch (e) {
    console.error('[Robots.txt] Error:', e.message);
  }

  // 2. Sitemap.xml
  try {
    const sitemapRes = await fetch(`${baseUrl}/sitemap.xml`);
    console.log(`[Sitemap.xml] Status: ${sitemapRes.status}`);
    const sitemapText = await sitemapRes.text();
    const urlCount = (sitemapText.match(/<loc>/g) || []).length;
    console.log(`[Sitemap.xml] URL count: ${urlCount}`);
  } catch (e) {
    console.error('[Sitemap.xml] Error:', e.message);
  }

  // 3. Homepage check
  try {
    const homeRes = await fetch(`${baseUrl}/`, { cache: 'no-store' });
    console.log(`\n[Homepage] Status: ${homeRes.status}`);
    const homeText = await homeRes.text();
    console.log(`[Homepage] Length: ${homeText.length}`);
    console.log(`[Homepage] Contains 29+ languages: ${homeText.includes('29+ Languages') || homeText.includes('29+ languages') || homeText.includes('29+ Global Languages')}`);
    console.log(`[Homepage] Contains old triage in healthcare card: ${homeText.includes('Explore Hospital Triage')}`);
    console.log(`[Homepage] Contains Patient Navigation: ${homeText.includes('Explore Patient Navigation')}`);
  } catch (e) {
    console.error('[Homepage] Error:', e.message);
  }

  // 4. Products / AI Digital Human
  try {
    const prodRes = await fetch(`${baseUrl}/products/ai-digital-human`, { cache: 'no-store' });
    console.log(`\n[/products/ai-digital-human] Status: ${prodRes.status}`);
    const prodText = await prodRes.text();
    console.log(`[/products/ai-digital-human] Contains R&D garment fitting: ${prodText.includes('garment fitting on active R&D roadmap')}`);
    console.log(`[/products/ai-digital-human] Contains administrative patient intake: ${prodText.includes('administrative patient intake assistance')}`);
    console.log(`[/products/ai-digital-human] Contains local data residency GDPR/HIPAA: ${prodText.includes('supporting GDPR, PDPA, and HIPAA privacy principles')}`);
  } catch (e) {
    console.error('[/products/ai-digital-human] Error:', e.message);
  }

  // 5. FAQ Page
  try {
    const faqRes = await fetch(`${baseUrl}/faq`, { cache: 'no-store' });
    console.log(`\n[/faq] Status: ${faqRes.status}`);
    const faqText = await faqRes.text();
    console.log(`[/faq] Contains 7 specialized Indian languages: ${faqText.includes('7 specialized Indian languages')}`);
    console.log(`[/faq] Contains minimizes queue waiting times: ${faqText.includes('minimizes queue waiting times')}`);
  } catch (e) {
    console.error('[/faq] Error:', e.message);
  }

  // 6. Download Center
  try {
    const dcRes = await fetch(`${baseUrl}/contact/download-center`, { cache: 'no-store' });
    console.log(`\n[/contact/download-center] Status: ${dcRes.status}`);
    const dcText = await dcRes.text();
    console.log(`[/contact/download-center] Contains DIHUAVA Brochures: ${dcText.includes('DIHUAVA Brochures') || dcText.includes('DIHUAVA Product Brochure')}`);
    console.log(`[/contact/download-center] Contains inquiry form reference: ${dcText.includes('inquiry-form')}`);
  } catch (e) {
    console.error('[/contact/download-center] Error:', e.message);
  }
}

checkProduction();
