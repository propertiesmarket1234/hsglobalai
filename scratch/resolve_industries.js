const fs = require('fs');
let s = fs.readFileSync('src/components/Industries.tsx', 'utf8');

const headMarker = '<<<<<<< HEAD';
const originMarker = '>>>>>>> origin/main';
const headIdx = s.indexOf(headMarker);
const origIdx = s.indexOf(originMarker);

if (headIdx !== -1 && origIdx !== -1) {
  const lineEnd = s.indexOf('\n', origIdx);
  const endIdx = lineEnd !== -1 ? lineEnd + 1 : origIdx + originMarker.length;
  // Replace from headIdx to endIdx with the origin/main content start
  const replacement = `  const lPath = (path: string) => getLocalizedPath(path, currentLocale);
`;
  s = s.substring(0, headIdx) + replacement + s.substring(endIdx);
}

// Now apply content accuracy fixes to the bento grid:
// 1. Language claim in Retail card: 45 languages -> 29+ languages
s = s.replace('recommend personalized luxury pairings in 45 languages.', 'recommend personalized luxury pairings in 29+ languages.');

// 2. Healthcare card: remove triage claims
s = s.replace(
  'Relieve overwhelmed triage desks. Patients check in, verify pre-surgery instructions, and navigate large medical complexes with zero wait time.',
  'Relieve overwhelmed reception desks. Patients check in, receive appointment guidance, and navigate large medical complexes with zero wait time.'
);
s = s.replace(
  'HIPAA-compliant intake & triage kiosk',
  'Privacy-aligned intake & navigation kiosk'
);
s = s.replace(
  '<span>Explore Hospital Triage</span>',
  '<span>Explore Patient Navigation</span>'
);

fs.writeFileSync('src/components/Industries.tsx', s, 'utf8');
console.log('Successfully resolved Industries.tsx');
