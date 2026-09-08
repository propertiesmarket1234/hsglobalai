import { Locale, defaultLocale } from "./config";
import { en } from "./dictionaries/en";
import { zh } from "./dictionaries/zh";
import { ru } from "./dictionaries/ru";
import { es } from "./dictionaries/es";

const dictionaries = {
  en,
  zh,
  ru,
  es,
};

export function getDictionary(locale: Locale = defaultLocale) {
  return dictionaries[locale] || dictionaries[defaultLocale];
}
