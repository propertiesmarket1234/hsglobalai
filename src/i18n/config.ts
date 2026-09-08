export type Locale = "en" | "zh" | "ru" | "es";
export type NonDefaultLocale = "zh" | "ru" | "es";

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
}

export const defaultLocale: Locale = "en";
export const supportedLocales: readonly Locale[] = ["en", "zh", "ru", "es"];
export const nonDefaultLocales: readonly NonDefaultLocale[] = ["zh", "ru", "es"];

export const locales: Record<Locale, LocaleInfo> = {
  en: {
    code: "en",
    name: "English",
    nativeName: "English",
    flag: "🇺🇸",
  },
  zh: {
    code: "zh",
    name: "Chinese",
    nativeName: "中文",
    flag: "🇨🇳",
  },
  ru: {
    code: "ru",
    name: "Russian",
    nativeName: "Русский",
    flag: "🇷🇺",
  },
  es: {
    code: "es",
    name: "Spanish",
    nativeName: "Español",
    flag: "🇪🇸",
  },
};

export const LOCAL_STORAGE_LANG_KEY = "hsglobalai_lang_pref";

export function isValidLocale(locale: string): locale is Locale {
  return (supportedLocales as readonly string[]).includes(locale as Locale);
}

export function isValidNonDefaultLocale(locale: string): locale is NonDefaultLocale {
  return (nonDefaultLocales as readonly string[]).includes(locale);
}

/** Strips any leading locale prefix (/zh, /ru, /es) from the pathname */
export function stripLocalePrefix(pathname: string): string {
  if (!pathname) return "/";
  const segments = pathname.split("/").filter(Boolean);
  if (segments.length > 0 && isValidNonDefaultLocale(segments[0])) {
    const remaining = segments.slice(1);
    return remaining.length > 0 ? `/${remaining.join("/")}` : "/";
  }
  return pathname;
}

/** Gets the target localized path for a given pathname and locale */
export function getLocalizedPath(currentPathname: string, targetLocale: Locale): string {
  const basePath = stripLocalePrefix(currentPathname);
  if (targetLocale === "en") {
    return basePath;
  }
  return basePath === "/" ? `/${targetLocale}` : `/${targetLocale}${basePath}`;
}
