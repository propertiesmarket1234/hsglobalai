import HolographicDisplayPage, { metadata as baseMetadata } from "@/app/products/holographic-display/page";
import { getLocalizedAlternates, isValidLocale, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }, { lang: "fr" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const locale: Locale = isValidLocale(lang) ? (lang as Locale) : "en";
  const dict = getDictionary(locale);
  const hMeta = (dict as any).holographicPage?.metadata || {};

  const title = hMeta.title || (baseMetadata.title as string);
  const description = hMeta.description || (baseMetadata.description as string);

  return {
    ...baseMetadata,
    title,
    description,
    alternates: getLocalizedAlternates("/products/holographic-display", lang),
    openGraph: {
      ...baseMetadata.openGraph,
      title,
      description,
      url: `https://www.hsglobalai.com/${lang}/products/holographic-display`,
      locale: lang === "zh" ? "zh_CN" : lang === "ru" ? "ru_RU" : lang === "es" ? "es_ES" : lang === "fr" ? "fr_FR" : "en_US",
    },
    twitter: {
      ...baseMetadata.twitter,
      title,
      description,
    },
  };
}

export default HolographicDisplayPage;
