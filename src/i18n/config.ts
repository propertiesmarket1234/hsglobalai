export type Locale = "en" | "zh" | "ru" | "es";

export interface LocaleInfo {
  code: Locale;
  name: string;
  nativeName: string;
  flag: string;
}

export const defaultLocale: Locale = "en";

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

export const supportedLocales: Locale[] = ["en", "zh", "ru", "es"];

export const LOCAL_STORAGE_LANG_KEY = "hsglobalai_lang_pref";
