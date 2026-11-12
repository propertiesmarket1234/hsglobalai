const fs = require('fs');
const c = fs.readFileSync('src/app/products/ai-digital-human/[slug]/PlatformClient.tsx', 'utf8');

const checks = [
  { name: 'perpetual/lifetime', re: /\b(perpetual|lifetime)\b/i },
  { name: 'one-time', re: /\b(one-time\s+(fee|cost|purchase|investment|licens))/i },
  { name: 'dollar 0 / zero per', re: /(\$0|zero per-|no per-)/i },
  { name: 'sub-second/instantaneous', re: /\b(sub-second|instantaneous)\b/i },
  { name: '8GB VRAM', re: /8\s*GB\s*(?:GPU)?\s*VRAM/i },
  { name: 'offline QR/photo', re: /(100%\s*offline[^.\n]*?(?:qr|photo|share)|photo[^.\n]*?100%\s*offline)/i }
];

const lines = c.split('\n');
lines.forEach((l, idx) => {
  checks.forEach(chk => {
    if (chk.re.test(l)) {
      console.log(`[${chk.name}] line ${idx + 1}: ${l.trim().slice(0, 130)}`);
    }
  });
});
