"use client";

import { motion } from "framer-motion";
import { Zap, Cpu, Volume2, ShieldCheck, CheckCircle2 } from "lucide-react";

interface LanguageItem {
  name: string;
  native: string;
  region: string;
  code: string;
}

const featuredLanguages: LanguageItem[] = [
  { name: "English", native: "English (US / UK / AU)", region: "Global", code: "EN" },
  { name: "Spanish", native: "Español", region: "Europe & Americas", code: "ES" },
  { name: "Mandarin Chinese", native: "普通话", region: "East Asia", code: "ZH" },
  { name: "Arabic", native: "العربية", region: "Middle East & N. Africa", code: "AR" },
  { name: "Japanese", native: "日本語", region: "East Asia", code: "JA" },
  { name: "Korean", native: "한국어", region: "East Asia", code: "KO" },
  { name: "French", native: "Français", region: "Europe & Africa", code: "FR" },
  { name: "German", native: "Deutsch", region: "Europe", code: "DE" },
  { name: "Hindi", native: "हिन्दी", region: "India", code: "HI" },
  { name: "Tamil", native: "தமிழ்", region: "India & SE Asia", code: "TA" },
  { name: "Telugu", native: "తెలుగు", region: "India", code: "TE" },
  { name: "Kannada", native: "ಕನ್ನಡ", region: "India", code: "KN" },
  { name: "Bengali", native: "বাংলা", region: "India & Bangladesh", code: "BN" },
  { name: "Marathi", native: "मराठी", region: "India", code: "MR" },
  { name: "Gujarati", native: "ગુજરાતી", region: "India", code: "GU" },
  { name: "Russian", native: "Русский", region: "Eurasia", code: "RU" },
  { name: "Portuguese", native: "Português", region: "Europe & LatAm", code: "PT" },
  { name: "Italian", native: "Italiano", region: "Europe", code: "IT" },
  { name: "Dutch", native: "Nederlands", region: "Europe", code: "NL" },
  { name: "Turkish", native: "Türkçe", region: "Eurasia", code: "TR" },
  { name: "Vietnamese", native: "Tiếng Việt", region: "Southeast Asia", code: "VI" },
  { name: "Thai", native: "ไทย", region: "Southeast Asia", code: "TH" },
  { name: "Indonesian", native: "Bahasa Indonesia", region: "Southeast Asia", code: "ID" },
  { name: "Polish", native: "Polski", region: "Europe", code: "PL" },
  { name: "Swedish", native: "Svenska", region: "Europe", code: "SV" },
  { name: "Greek", native: "Ελληνικά", region: "Europe", code: "EL" },
  { name: "Hebrew", native: "עברית", region: "Middle East", code: "HE" },
  { name: "Czech", native: "Čeština", region: "Europe", code: "CS" },
  { name: "Ukrainian", native: "Українська", region: "Europe", code: "UK" },
];

const languageFeatures = [
  {
    icon: Zap,
    title: "Instant Auto Language Detection",
    description:
      "Instantly identifies the speaker's language and seamlessly switches vocal reply without requiring manual touch input.",
  },
  {
    icon: Cpu,
    title: "100% On-Device & Offline STT / TTS",
    description:
      "All speech recognition and synthesis pipelines run locally on private GPU edge hardware with zero external internet dependencies.",
  },
  {
    icon: Volume2,
    title: "Per-Persona Voice Cloning",
    description:
      "Preserves the signature tone and vocal cadence of your brand ambassador across all multilingual language outputs.",
  },
  {
    icon: ShieldCheck,
    title: "Regional Accent & Dialect Adaptation",
    description:
      "Supports nuanced regional accents, local pronunciation, and pitch modulation across all supported languages.",
  },
];

export default function GlobalLanguagesSection() {
  return (
    <section id="global-languages" className="relative overflow-hidden bg-[var(--lp-tile)] px-4 py-20 sm:px-6 md:py-28 text-[var(--lp-ink)]">
      <div className="relative mx-auto max-w-[1200px]">
        {/* SECTION HEADER */}
        <div className="mx-auto max-w-[44rem] text-center">
          <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-accent-ink)]">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lp-accent)]" />
            Global Linguistic Intelligence
          </span>
          <h2 className="mt-2 text-balance text-[34px] font-semibold leading-[1.06] tracking-[-0.04em] text-[var(--lp-ink)] sm:text-[44px]">
            Speak naturally to every customer on Earth.
          </h2>
          <p className="mt-4 text-[17px] leading-[1.6] text-[var(--lp-ink-2)]">
            Deploy digital human ambassadors that instantly recognize and speak 29+ global languages, including 7 specialized Indian languages, with sub-second latency and authentic vocal inflections.
          </p>
        </div>

        {/* 4 FEATURE PILLARS */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {languageFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <motion.div
                key={feat.title}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group flex flex-col justify-between rounded-[24px] bg-[var(--lp-card)] p-6 border border-[var(--lp-line)] shadow-[var(--lp-shadow-card)]"
              >
                <div>
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 3 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[var(--lp-tile)] border border-[var(--lp-line)] shadow-xs"
                  >
                    <Icon className="h-5 w-5 text-[var(--lp-accent)]" strokeWidth={1.75} />
                  </motion.div>
                  <h3 className="mt-5 text-[17px] font-semibold tracking-[-0.02em] text-[var(--lp-ink)]">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-[14px] leading-[1.6] text-[var(--lp-ink-2)]">
                    {feat.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* LANGUAGE CHIPS GRID (CLEAN ISO BADGES, ZERO EMOJIS) */}
        <div className="mt-12 rounded-[28px] border border-[var(--lp-line)] bg-[var(--lp-card)] p-6 sm:p-8 shadow-[var(--lp-shadow-card)]">
          <div className="flex items-center justify-between pb-6 border-b border-[var(--lp-line)]">
            <div>
              <h3 className="text-[18px] font-semibold text-[var(--lp-ink)]">
                Supported Language Tiers & Dialects
              </h3>
              <p className="text-[13px] text-[var(--lp-muted)] mt-0.5">
                On-device speech recognition (STT) and expressive lip-synced synthesis (TTS)
              </p>
            </div>
            <span className="hidden sm:inline-flex rounded-full bg-[rgba(255,90,31,0.08)] px-3 py-1 text-xs font-semibold text-[var(--lp-accent-ink)]">
              29+ Languages Real-Time
            </span>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {featuredLanguages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center gap-2.5 rounded-xl border border-[var(--lp-line)] bg-[var(--lp-tile)] p-2.5 transition-colors hover:border-[var(--lp-accent)]/40 hover:bg-[var(--lp-card)]"
              >
                <span className="flex h-6 w-7 shrink-0 items-center justify-center rounded-md bg-[var(--lp-card)] text-[10px] font-mono font-bold text-[var(--lp-ink)] border border-[var(--lp-line)] shadow-2xs">
                  {lang.code}
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-semibold text-[var(--lp-ink)]">
                    {lang.name}
                  </p>
                  <p className="truncate text-[10px] text-[var(--lp-muted)]">
                    {lang.native}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
