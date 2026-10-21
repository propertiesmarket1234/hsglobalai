const { execSync } = require('child_process');
const fs = require('fs');

let content = execSync('git show origin/main:src/components/Industries.tsx', { encoding: 'utf8' });

// Corrections
content = content.replace('recommend personalized luxury pairings in 45 languages.', 'recommend personalized luxury pairings in 29+ languages.');
content = content.replace('45+ Languages Real-Time', '29+ Languages Real-Time');
content = content.replace(
  'Relieve overwhelmed triage desks. Patients check in, verify pre-surgery instructions, and navigate large medical complexes with zero wait time.',
  'Relieve overwhelmed reception desks. Patients check in, receive appointment guidance, and navigate large medical complexes with zero wait time.'
);
content = content.replace(
  'HIPAA-compliant intake & triage kiosk',
  'Privacy-aligned patient intake & navigation kiosk'
);
content = content.replace(
  '<span>Explore Hospital Triage</span>',
  '<span>Explore Patient Navigation</span>'
);

fs.writeFileSync('src/components/Industries.tsx', content, 'utf8');
console.log('Successfully wrote corrected Industries.tsx');
