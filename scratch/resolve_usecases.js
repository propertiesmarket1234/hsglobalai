const fs = require('fs');
let s = fs.readFileSync('src/components/ImmersiveUseCases.tsx', 'utf8');

// Fix 45+ to 29+ in museum
s = s.replace('"45+ Languages Real-Time"', '"29+ Languages Real-Time"');
s = s.replace('{ label: "Language Coverage", value: "45+" }', '{ label: "Language Coverage", value: "29+" }');

const headMarker = '<<<<<<< HEAD';
const originMarker = '>>>>>>> origin/main';
const headIdx = s.indexOf(headMarker);
const origIdx = s.indexOf(originMarker);

if (headIdx !== -1 && origIdx !== -1) {
  const lineEnd = s.indexOf('\n', origIdx);
  const endIdx = lineEnd !== -1 ? lineEnd + 1 : origIdx + originMarker.length;
  const replacement = `      imageAlt: "Actual 3D Holographic Jewellery Product Kiosk with Live Digital Human Presenter",
      capabilities: uc.retail.capabilities,
      metrics: uc.retail.metrics,
    },
    {
      id: "banking",
      badge: uc.banking.badge,
      titlePrefix: uc.banking.titlePrefix,
      titleHighlight: uc.banking.titleHighlight,
      highlightColor: "from-cyan-400 via-sky-300 to-cyan-500",
      description: uc.banking.description,
      ctaPrimaryText: uc.banking.ctaPrimaryText,
      ctaSecondaryText: uc.banking.ctaSecondaryText,
      ctaPrimaryHref: lPath("/contact"),
      ctaSecondaryHref: lPath("/industries/banking"),
      imageSrc: "/images/use-cases/banking_hologram_kiosk.png",
      imageAlt: "3D Hologram Kiosk display featuring Lady Corporate Wealth Advisor for Bank VIP Lounges",
      capabilities: uc.banking.capabilities,
      metrics: uc.banking.metrics,
`;
  s = s.substring(0, headIdx) + replacement + s.substring(endIdx);
  fs.writeFileSync('src/components/ImmersiveUseCases.tsx', s, 'utf8');
  console.log('Successfully resolved ImmersiveUseCases.tsx conflict');
} else {
  console.log('Markers not found');
}
