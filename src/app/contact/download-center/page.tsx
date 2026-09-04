import type { Metadata } from "next";
import ContactClient from "../ContactClient";

export const metadata: Metadata = {
  title: "Download Center & Product Specs | HS Global AI",
  description:
    "Access technical datasheets, product specification briefs, and enterprise documentation for DIHUAVA AI Digital Humans and 3D Hologram Box displays.",
  alternates: {
    canonical: "/contact/download-center",
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
      "name": "Contact",
      "item": "https://www.hsglobalai.com/contact",
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Download Center",
      "item": "https://www.hsglobalai.com/contact/download-center",
    },
  ],
};

export default function DownloadCenterSubpage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ContactClient defaultTab="downloads" />
    </>
  );
}
