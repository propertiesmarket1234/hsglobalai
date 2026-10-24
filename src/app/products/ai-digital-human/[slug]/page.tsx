import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import PlatformClient, { platformData } from "./PlatformClient";

interface PageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return [
    { slug: "avatar-customization" },
    { slug: "document-intelligence" },
    { slug: "multilingual-support" },
    { slug: "persona-management" },
    { slug: "ai-product-catalog" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const dict = getDictionary("en");
  const capDict = (dict as Record<string, unknown> & { capabilityPages?: Record<string, { title?: string; description?: string }> }).capabilityPages?.[slug];
  const defaultData = platformData[slug];

  const title = capDict?.title
    ? `${capDict.title} | DIHUAVA`
    : defaultData
    ? `${defaultData.title} | DIHUAVA`
    : "DIHUAVA Capability";

  const description = capDict?.description || defaultData?.description || "Explore interactive capabilities and AI features of the DIHUAVA Digital Human platform.";

  return {
    title,
    description,
    alternates: getLocalizedAlternates(`/products/ai-digital-human/${slug}`),
  };
}

export default async function DihuavaCapabilityPage({ params }: PageProps) {
  const { slug } = await params;
  const dict = getDictionary("en");
  const capDict = (dict as Record<string, unknown> & { capabilityPages?: Record<string, { title?: string; description?: string }> }).capabilityPages?.[slug];
  const defaultData = platformData[slug];
  const pageTitle = capDict?.title || defaultData?.title || slug;

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.hsglobalai.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Products",
        item: "https://www.hsglobalai.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "DIHUAVA",
        item: "https://www.hsglobalai.com/products/ai-digital-human",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: pageTitle,
        item: `https://www.hsglobalai.com/products/ai-digital-human/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <PlatformClient initialSlug={slug} />
    </>
  );
}
