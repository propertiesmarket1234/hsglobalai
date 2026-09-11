import ContactPage, { metadata as baseMetadata } from "@/app/contact/page";
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
    alternates: getLocalizedAlternates("/contact", lang),
  };
}

export default ContactPage;
