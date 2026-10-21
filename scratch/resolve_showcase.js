const fs = require('fs');
let s = fs.readFileSync('src/components/IndustriesShowcase.tsx', 'utf8');

// Conflict 1: Healthcare item
const head1 = '<<<<<<< HEAD';
const orig1 = '>>>>>>> origin/main';
const idx1 = s.indexOf(head1);
const idx1End = s.indexOf(orig1);
if (idx1 !== -1 && idx1End !== -1) {
  const lineEnd1 = s.indexOf('\n', idx1End) + 1;
  const replacement1 = `    title: "Healthcare & Clinics",
    subtitle: "Patient Intake & Navigation AI",
    description:
      "Deploy hologram healthcare assistants for patient navigation, appointment scheduling, administrative intake assistance, and clinic guidance with a compassionate, human-like interface.",
    useCase: "Hospital Navigation & Patient Intake AI",
    features: [
      "Patient Guidance & Intake",
      "Hospital Complex Navigation",
`;
  s = s.substring(0, idx1) + replacement1 + s.substring(lineEnd1);
}

// Conflict 2: render block
const idx2 = s.indexOf('<<<<<<< HEAD');
const idx2End = s.indexOf('>>>>>>> origin/main');
if (idx2 !== -1 && idx2End !== -1) {
  const lineEnd2 = s.indexOf('\n', idx2End) + 1;
  const replacement2 = `  return (
    <section className="relative overflow-hidden bg-[var(--lp-bg)] px-4 py-20 sm:px-6 md:py-28 text-[var(--lp-ink)]">
      <div className="relative mx-auto max-w-7xl divide-y divide-[var(--lp-line)]">
        {industries.map((industry) => {
          const Icon = industry.icon;
          return (
            <div key={industry.number} id={industry.slug} className="py-16 first:pt-0 last:pb-0 overflow-hidden">
              <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
                {/* LEFT HEADER & ICON */}
                <motion.div
                  initial={{ opacity: 0, x: -60 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-sm font-semibold tracking-wider text-[var(--lp-accent)]">
                      {industry.number}
                    </span>
                    <span className="rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] px-3 py-1 text-[11px] font-medium tracking-wide text-[var(--lp-muted)]">
                      {industry.subtitle}
                    </span>
`;
  s = s.substring(0, idx2) + replacement2 + s.substring(lineEnd2);
}

// Also ensure Retail has Virtual Try-On (Active R&D)
s = s.replace(
  'features: [\n      "Virtual Try-On",',
  'features: [\n      "Virtual Try-On (Active R&D)",'
);

fs.writeFileSync('src/components/IndustriesShowcase.tsx', s, 'utf8');
console.log('Successfully resolved IndustriesShowcase.tsx');
