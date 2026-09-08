"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Locale, locales, LOCAL_STORAGE_LANG_KEY, getLocalizedPath } from "@/i18n/config";

export default function LanguageBanner() {
  const pathname = usePathname();
  const router = useRouter();
  const [suggestedLocale, setSuggestedLocale] = useState<Locale | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // 1. Check if preference already stored in localStorage
    const savedPref = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    if (savedPref) {
      return; // Preference already set or dismissed
    }

    // 2. Detect browser languages
    const userLangs = navigator.languages || [navigator.language || "en"];
    let matchedLocale: Locale | null = null;

    for (const lang of userLangs) {
      const lower = lang.toLowerCase();
      if (lower.startsWith("zh")) {
        matchedLocale = "zh";
        break;
      } else if (lower.startsWith("ru")) {
        matchedLocale = "ru";
        break;
      } else if (lower.startsWith("es")) {
        matchedLocale = "es";
        break;
      } else if (lower.startsWith("en")) {
        // Explicitly English - no banner needed
        matchedLocale = null;
        break;
      }
    }

    if (matchedLocale) {
      setSuggestedLocale(matchedLocale);
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, "en");
    setIsVisible(false);
  };

  const handleSwitch = (locale: Locale) => {
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, locale);
    setIsVisible(false);
    const targetPath = getLocalizedPath(pathname, locale);
    if (targetPath !== pathname) {
      router.push(targetPath);
    }
  };

  if (!isVisible || !suggestedLocale) return null;

  const targetLocaleInfo = locales[suggestedLocale];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 bg-gradient-to-r from-cyan-950 via-neutral-950 to-blue-950 border-b border-cyan-500/30 px-4 py-2.5 text-xs text-white shadow-xl backdrop-blur-xl"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <span className="text-base">{targetLocaleInfo.flag}</span>
            <p className="font-medium text-gray-200">
              View this site in{" "}
              <strong className="text-cyan-300 font-semibold">
                {targetLocaleInfo.nativeName} ({targetLocaleInfo.name})
              </strong>
              ?
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => handleSwitch(suggestedLocale)}
              className="rounded-full bg-cyan-500 px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-black shadow-[0_0_15px_rgba(6,182,212,0.4)] transition-all hover:scale-105 hover:bg-cyan-400"
            >
              Switch to {targetLocaleInfo.nativeName}
            </button>
            <button
              onClick={handleDismiss}
              aria-label="Dismiss language suggestion"
              className="rounded-full p-1 text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
