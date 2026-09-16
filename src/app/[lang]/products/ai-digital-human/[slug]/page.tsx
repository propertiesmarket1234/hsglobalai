import DihuavaCapabilityPage from "@/app/products/ai-digital-human/[slug]/page";
import { getLocalizedAlternates, isValidLocale, Locale } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { platformData } from "@/app/products/ai-digital-human/[slug]/PlatformClient";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const langs = ["zh", "ru", "es", "fr"];
  const slugs = [
    "avatar-customization",
    "document-intelligence",
    "multilingual-support",
    "persona-management",
    "ai-product-catalog",
  ];
  const params: { lang: string; slug: string }[] = [];

  for (const lang of langs) {
    for (const slug of slugs) {
      params.push({ lang, slug });
    }
  }

  return params;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string; slug: string }>;
}): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale: Locale = isValidLocale(lang) ? (lang as Locale) : "en";
  const dict = getDictionary(locale);
  const capDict = (dict as any).capabilityPages?.[slug];
  const defaultData = platformData[slug];

  const title = capDict?.title
    ? `${capDict.title} | DIHUAVA | HS Global AI`
    : defaultData
    ? `${defaultData.title} | DIHUAVA | HS Global AI`
    : "DIHUAVA Capability | HS Global AI";

  const description = capDict?.description || defaultData?.description || "Explore interactive capabilities and AI features of the DIHUAVA Digital Human platform.";

  return {
    title,
    description,
    alternates: getLocalizedAlternates(`/products/ai-digital-human/${slug}`, lang),
    openGraph: {
      title,
      description,
      url: `https://www.hsglobalai.com/${lang}/products/ai-digital-human/${slug}`,
      locale: lang === "zh" ? "zh_CN" : lang === "ru" ? "ru_RU" : lang === "es" ? "es_ES" : lang === "fr" ? "fr_FR" : "en_US",
      siteName: "HS Global AI",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default DihuavaCapabilityPage;
