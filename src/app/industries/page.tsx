import type { Metadata } from "next";
import IndustriesClient from "./IndustriesClient";

export const metadata: Metadata = {
  title: "AI Digital Human Solutions by Industry | HS Global AI",
  description:
    "Discover AI Digital Human and Hologram Box solutions tailored for banking, retail, healthcare, corporate services, tourism, and education.",
  alternates: {
    canonical: "/industries",
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://www.hsglobalai.com",
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Industries",
      "item": "https://www.hsglobalai.com/industries",
    },
  ],
};

export default function IndustriesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <IndustriesClient />
    </>
  );
}