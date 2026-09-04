import type { Metadata } from "next";
import PlatformClient, { platformData } from "./PlatformClient";

interface PlatformPageProps {
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

export async function generateMetadata({ params }: PlatformPageProps): Promise<Metadata> {
  const { slug } = await params;
  const data = platformData[slug];

  return {
    title: data ? `${data.title} | DIHUAVA Platform | HS Global AI` : "Platform Solution | HS Global AI",
    description: data ? data.description : "Explore enterprise platform capabilities powering DIHUAVA AI Digital Humans and 3D Hologram Box displays.",
    alternates: {
      canonical: `/platform/${slug}`,
    },
  };
}

export default async function PlatformPage({ params }: PlatformPageProps) {
  const { slug } = await params;
  const data = platformData[slug];

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
        name: "Platform",
        item: "https://www.hsglobalai.com/products/dihuava",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data?.title || slug,
        item: `https://www.hsglobalai.com/platform/${slug}`,
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
