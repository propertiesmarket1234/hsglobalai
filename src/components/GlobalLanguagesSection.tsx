"use client";

import { motion } from "framer-motion";
import { Globe, Languages, Cpu, Volume2, ShieldCheck, Zap } from "lucide-react";

interface LanguageItem {
  name: string;
  native: string;
  region: string;
  flag: string;
}

const featuredLanguages: LanguageItem[] = [
  { name: "English", native: "English (US / UK / AU)", region: "Global", flag: "🌐" },
  { name: "Spanish", native: "Español", region: "Europe & Americas", flag: "🇪🇸" },
  { name: "Mandarin Chinese", native: "普通话", region: "East Asia", flag: "🇨🇳" },
  { name: "Arabic", native: "العربية", region: "Middle East & N. Africa", flag: "🇦🇪" },
  { name: "Japanese", native: "日本語", region: "East Asia", flag: "🇯🇵" },
  { name: "Korean", native: "한국어", region: "East Asia", flag: "🇰🇷" },
  { name: "French", native: "Français", region: "Europe & Africa", flag: "🇫🇷" },
  { name: "German", native: "Deutsch", region: "Europe", flag: "🇩🇪" },
  { name: "Hindi", native: "हिन्दी", region: "India", flag: "🇮🇳" },
  { name: "Tamil", native: "தமிழ்", region: "India & SE Asia", flag: "🇮🇳" },
  { name: "Telugu", native: "తెలుగు", region: "India", flag: "🇮🇳" },
  { name: "Kannada", native: "கன்னட / ಕನ್ನಡ", region: "India", flag: "🇮🇳" },
  { name: "Bengali", native: "বাংলা", region: "India & Bangladesh", flag: "🇮🇳" },
  { name: "Marathi", native: "मराठी", region: "India", flag: "🇮🇳" },
  { name: "Gujarati", native: "ગુજરાતી", region: "India", flag: "🇮🇳" },
  { name: "Russian", native: "Русский", region: "Eurasia", flag: "🇷🇺" },
  { name: "Portuguese", native: "Português", region: "Europe & LatAm", flag: "🇵🇹" },
  { name: "Italian", native: "Italiano", region: "Europe", flag: "🇮🇹" },
  { name: "Dutch", native: "Nederlands", region: "Europe", flag: "🇳🇱" },
  { name: "Turkish", native: "Türkçe", region: "Eurasia", flag: "🇹🇷" },
  { name: "Vietnamese", native: "Tiếng Việt", region: "Southeast Asia", flag: "🇻🇳" },
  { name: "Thai", native: "ไทย", region: "Southeast Asia", flag: "🇹🇭" },
  { name: "Indonesian", native: "Bahasa Indonesia", region: "Southeast Asia", flag: "🇮🇩" },
  { name: "Polish", native: "Polski", region: "Europe", flag: "🇵🇱" },
  { name: "Swedish", native: "Svenska", region: "Europe", flag: "🇸🇪" },
  { name: "Greek", native: "Ελληνικά", region: "Europe", flag: "🇬🇷" },
  { name: "Hebrew", native: "עברית", region: "Middle East", flag: "🇮🇱" },
  { name: "Czech", native: "Čeština", region: "Europe", flag: "🇨🇿" },
  { name: "Ukrainian", native: "Українська", region: "Europe", flag: "🇺🇦" },
];

const languageFeatures = [
  {
    icon: Zap,
    title: "Instant Auto Language Detection",
    description:
      "Instantly identifies the speaker's language and seamlessly switches response generation without needing manual language selection.",
  },
  {
    icon: Cpu,
    title: "100% On-Device & Offline STT / TTS",
    description:
      "All 29+ global speech recognition and synthesis models run locally on edge hardware with zero internet dependency.",
  },
  {
    icon: Volume2,
    title: "Per-Persona Voice Cloning",
    description:
      "Replicate target executive or brand voice styles while preserving natural pronunciation and emotional tone across all languages.",
  },
  {
    icon: ShieldCheck,
    title: "100+ Regional Accents & Pitch Modulation",
    description:
      "Supports nuanced regional dialects, local accents, and context-aware pronunciation for healthcare, retail, and corporate concierges.",
  },
];

import { usePathname } from "next/navigation";
import { getDictionary } from "@/i18n/getDictionary";
import { Locale, nonDefaultLocales } from "@/i18n/config";

export default function GlobalLanguagesSection() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale = seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const gSec = (dict as any).globalLanguagesSection || {};

  const localizedFeatures = languageFeatures.map((feat, idx) => {
    const dictFeat = gSec.features && gSec.features[idx];
    if (dictFeat) {
      return {
        ...feat,
        title: dictFeat.title || feat.title,
        description: dictFeat.description || feat.description,
      };
    }
    return feat;
  });

  return (
    <section className="relative overflow-hidden bg-black px-6 py-24 text-white border-t border-b border-white/10">
      {/* Background Glow Accents */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-950/30 via-black to-black" />
      <div className="pointer-events-none absolute -left-40 top-1/4 h-[500px] w-[500px] rounded-full bg-cyan-600/10 blur-[150px]" />
      <div className="pointer-events-none absolute -right-40 bottom-1/4 h-[500px] w-[500px] rounded-full bg-sky-600/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-950/60 px-4 py-1.5 backdrop-blur-md">
            <Globe className="h-4 w-4 text-cyan-400" />
            <span className="text-xs font-semibold tracking-wider text-cyan-300 uppercase">
              {gSec.badge || "29+ Global Languages & Neural Speech Engine"}
            </span>
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            {gSec.titlePrefix || "Communicate naturally in "}{" "}
            <span className="bg-gradient-to-r from-cyan-300 via-sky-200 to-cyan-400 bg-clip-text text-transparent">
              {gSec.titleHighlight || "29+ Global Languages"}
            </span>
          </h2>

          <p className="mt-6 text-base text-gray-300 sm:text-lg leading-relaxed">
            {gSec.description || "Every HS Global AI product—from Digital Humans and Hologram Boxes to Spatial Displays—is equipped with real-time multilingual speech recognition, voice cloning, and instant language switching."}
          </p>
        </div>

        {/* Key Metrics Bar */}
        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-center backdrop-blur-md">
            <div className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">29+</div>
            <div className="mt-1 text-xs font-medium text-gray-300 uppercase tracking-wider">
              {gSec.metricGlobalLanguages || "Global Languages"}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-center backdrop-blur-md">
            <div className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">7+</div>
            <div className="mt-1 text-xs font-medium text-gray-300 uppercase tracking-wider">
              {gSec.metricIndianLanguages || "Indian Languages"}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-center backdrop-blur-md">
            <div className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">100+</div>
            <div className="mt-1 text-xs font-medium text-gray-300 uppercase tracking-wider">
              {gSec.metricRegionalAccents || "Regional Accents"}
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-neutral-900/60 p-6 text-center backdrop-blur-md">
            <div className="text-3xl font-extrabold text-cyan-400 sm:text-4xl">100%</div>
            <div className="mt-1 text-xs font-medium text-gray-300 uppercase tracking-wider">
              {gSec.metricOnDeviceOffline || "On-Device & Offline"}
            </div>
          </div>
        </div>

        {/* Languages Showcase Chips Grid */}
        <div className="mt-12 rounded-3xl border border-white/15 bg-neutral-900/40 p-6 sm:p-8 backdrop-blur-xl">
          <div className="flex items-center justify-between pb-6 border-b border-white/10 mb-6">
            <div className="flex items-center gap-3">
              <Languages className="h-5 w-5 text-cyan-400" />
              <h3 className="text-lg font-semibold text-white">
                {gSec.supportedLanguagesHeading || "Supported Languages & Regional Dialects"}
              </h3>
            </div>
            <span className="text-xs font-mono text-cyan-400 bg-cyan-950/80 border border-cyan-500/30 px-3 py-1 rounded-full">
              {gSec.supportedLanguagesBadge || "29+ Languages Pre-Built"}
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
            {featuredLanguages.map((lang, idx) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.02 }}
                className="group relative rounded-xl border border-white/10 bg-black/50 p-3 hover:border-cyan-500/50 hover:bg-cyan-950/30 transition-all duration-300"
              >
                <div className="flex items-center justify-between">
                  <span className="text-base">{lang.flag}</span>
                  <span className="text-[10px] font-mono text-gray-300 group-hover:text-cyan-300">
                    {lang.region}
                  </span>
                </div>
                <div className="mt-2 text-sm font-semibold text-white group-hover:text-cyan-200">
                  {lang.name}
                </div>
                <div className="text-xs text-gray-300 truncate font-sans">
                  {lang.native}
                </div>
                </motion.div>
            ))}
          </div>
        </div>

        {/* Multilingual Capability Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {localizedFeatures.map((feat) => {
            const Icon = feat.icon;
            return (
              <div
                key={feat.title}
                className="rounded-2xl border border-white/10 bg-neutral-900/50 p-6 backdrop-blur-md hover:border-cyan-500/40 transition-colors"
              >
                <div className="inline-flex rounded-xl bg-cyan-950/80 p-3 border border-cyan-500/30 text-cyan-400 mb-4">
                  <Icon className="h-6 w-6" />
                </div>
                <h4 className="text-base font-semibold text-white">{feat.title}</h4>
                <p className="mt-2 text-xs text-gray-300 leading-relaxed">
                  {feat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
