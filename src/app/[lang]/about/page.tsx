import AboutPage, { metadata as baseMetadata } from "@/app/about/page";
import { getLocalizedAlternates } from "@/i18n/config";
import type { Metadata } from "next";

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  return {
    ...baseMetadata,
    alternates: getLocalizedAlternates("/about", lang),
  };
}

export default AboutPage;
