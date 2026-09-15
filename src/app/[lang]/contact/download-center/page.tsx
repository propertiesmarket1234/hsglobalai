import DownloadCenterPage, { metadata as baseMetadata } from "@/app/contact/download-center/page";
import { getLocalizedAlternates } from "@/i18n/config";
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
  return {
    ...baseMetadata,
    alternates: getLocalizedAlternates("/contact/download-center", lang),
  };
}

export default DownloadCenterPage;
