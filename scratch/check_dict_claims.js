const fs = require('fs');

const langs = ['en', 'es', 'fr', 'ru', 'zh'];
const checks = [
  { name: 'perpetual/lifetime', re: /\b(perpetual|lifetime|à vie|perpétuel|de por vida|perpetua|вечн|пожизнен|永久|终身)\b/i },
  { name: 'one-time fee/investment/purchase', re: /\b(one-time\s+(fee|cost|purchase|investment|licens)|pago único|tarifa única|однократн|разов|一次性)/i },
  { name: 'dollar 0 / zero per / 0 euro', re: /(\$0|0\s*€|zero per-|no per-|0\s*долл|0\s*евро|0\s*元)/i },
  { name: 'sub-second/instantaneous', re: /\b(sub-second|instantaneous|subseconde|milisegundo|миллисекунд|мгновенн|亚秒|毫秒级语音)\b/i },
  { name: '8GB VRAM', re: /8\s*GB\s*(?:GPU)?\s*VRAM/i },
  { name: 'free of recurring / fixed ownership', re: /(zero ongoing|fixed hardware ownership|free of recurring|coûts informatiques fixes|coût fixe)/i }
];

langs.forEach(lang => {
  const filePath = `src/i18n/dictionaries/${lang}.ts`;
  const content = fs.readFileSync(filePath, 'utf8');
  const lines = content.split('\n');
  console.log(`\n=================== DICTIONARY: ${lang} ===================`);
  let matches = 0;
  lines.forEach((l, idx) => {
    checks.forEach(chk => {
      if (chk.re.test(l)) {
        matches++;
        console.log(`[${chk.name}] line ${idx + 1}: ${l.trim().slice(0, 140)}`);
      }
    });
  });
  if (matches === 0) console.log('  No flagged claims found.');
});
