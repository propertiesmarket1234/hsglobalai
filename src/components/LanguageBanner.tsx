"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Locale,
  locales,
  supportedLocales,
  LOCAL_STORAGE_LANG_KEY,
  getLocalizedPath,
  nonDefaultLocales,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { X, Globe } from "lucide-react";

export default function LanguageBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [suggestedLocale, setSuggestedLocale] = useState<Locale | null>(null);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    // Only evaluate on client-side
    const savedPref = localStorage.getItem(LOCAL_STORAGE_LANG_KEY);
    if (savedPref) {
      return;
    }

    const currentPathSeg = pathname ? pathname.split("/")[1] : "";
    const isAlreadyLocalized = (nonDefaultLocales as readonly string[]).includes(currentPathSeg as any);

    if (isAlreadyLocalized) {
      return;
    }

    // Inspect navigator.languages
    const browserLanguages = typeof navigator !== "undefined" ? navigator.languages || [navigator.language] : [];
    
    for (const rawLang of browserLanguages) {
      const code = rawLang.toLowerCase().split("-")[0];
      if (code !== "en" && (supportedLocales as readonly string[]).includes(code as Locale)) {
        setSuggestedLocale(code as Locale);
        setIsVisible(true);
        break;
      }
    }
  }, [pathname]);

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
  const dict = getDictionary(suggestedLocale);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -40 }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-50 bg-[var(--lp-card)] border-b border-[var(--lp-line)] px-4 py-2 text-xs text-[var(--lp-ink)] shadow-xs"
      >
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4">
          <div className="flex items-center gap-2.5">
            <Globe className="h-4 w-4 text-[var(--lp-accent)] shrink-0" />
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[var(--lp-ink)]">
              {targetLocaleInfo.flag}
            </span>
            <p className="font-medium text-[var(--lp-ink-2)]">
              {dict.languageBanner.promptPrefix}{" "}
              <strong className="text-[var(--lp-ink)] font-semibold">
                {targetLocaleInfo.nativeName}
              </strong>
              {dict.languageBanner.promptSuffix}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => handleSwitch(suggestedLocale)}
              className="inline-flex h-8 items-center justify-center rounded-full bg-[var(--lp-ink)] px-4 text-xs font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
            >
              {dict.languageBanner.switchBtn} {targetLocaleInfo.nativeName}
            </button>
            <button
              onClick={handleDismiss}
              aria-label={dict.languageBanner.dismissAria}
              className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--lp-muted)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)] transition-colors active:scale-[0.98] cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
