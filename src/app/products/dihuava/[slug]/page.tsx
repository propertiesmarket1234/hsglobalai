import type { Metadata } from "next";
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
  const data = platformData[slug];

  return {
    title: data ? `${data.title} | DIHUAVA | HS Global AI` : "DIHUAVA Capability | HS Global AI",
    description: data ? data.description : "Explore interactive capabilities and AI features of the DIHUAVA Digital Human platform.",
    alternates: {
      canonical: `/products/dihuava/${slug}`,
    },
  };
}

export default async function DihuavaCapabilityPage({ params }: PageProps) {
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
        name: "Products",
        item: "https://www.hsglobalai.com/products",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: "DIHUAVA",
        item: "https://www.hsglobalai.com/products/dihuava",
      },
      {
        "@type": "ListItem",
        position: 4,
        name: data?.title || slug,
        item: `https://www.hsglobalai.com/products/dihuava/${slug}`,
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
