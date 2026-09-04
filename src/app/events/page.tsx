import type { Metadata } from "next";
import EventsClient from "./EventsClient";

export const metadata: Metadata = {
  title: "AI Exhibitions & Events | HS Global AI",
  description:
    "Discover HS Global AI's global exhibitions, product launches, and industry tradeshow appearances showcasing AI Digital Humans and 3D Hologram displays.",
  alternates: {
    canonical: "/events",
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
      "name": "Events",
      "item": "https://www.hsglobalai.com/events",
    },
  ],
};

export default function EventsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <EventsClient />
    </>
  );
}
