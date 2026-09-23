import IndustryDetailPage, { generateMetadata as baseGenerateMetadata } from "@/app/industries/[slug]/page";
import { industriesData } from "@/data/industriesData";
import type { Metadata } from "next";

export async function generateStaticParams() {
  const langs = ["zh", "ru", "es", "fr"];
  const slugs = Object.keys(industriesData);
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
  return baseGenerateMetadata({ params: Promise.resolve({ slug, lang }) });
}

export default IndustryDetailPage;
