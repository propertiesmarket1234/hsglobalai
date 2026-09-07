import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "HS Global AI | Enterprise AI Digital Humans & Holographic AI",
  description:
    "HS Global AI powers enterprise interactive experiences with DIHUAVA AI Digital Humans, 3D Hologram Boxes, and spatial display hardware for 100% offline customer engagement.",
  alternates: {
    canonical: "/",
  },
};

const dihuavaSoftwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "@id": "https://www.hsglobalai.com/products/dihuava#software",
  name: "DIHUAVA",
  alternateName: "DIHUAVA AI Digital Human Platform",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Cross-platform",
  url: "https://www.hsglobalai.com/products/dihuava",
  description:
    "DIHUAVA is a proprietary AI Digital Human software platform running 100% offline on-device by default, featuring real-time talking avatars, multilingual speech synthesis across 29+ global languages and 7 Indian regional languages, and local document intelligence RAG.",
  publisher: {
    "@type": "Organization",
    "@id": "https://www.hsglobalai.com/#organization",
  },
  featureList: [
    "100% Offline On-Device Processing by Default",
    "Real-Time Lip-Sync & Conversational Avatars",
    "On-Device Document Intelligence RAG Engine",
    "Multilingual Speech Recognition & Synthesis across 29+ Global Languages",
    "7 Specialized Indian Regional Language Models",
    "CSV-Driven AI Product Catalogue & Interactive Cards",
    "Selfie With Avatar Photo Experience & QR Sharing",
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(dihuavaSoftwareSchema) }}
      />
      <HomeClient />
    </>
  );
}