import type { Metadata } from "next";
import SpatialDisplayClient from "./SpatialDisplayClient";
import { getLocalizedAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Spatial Display for Immersive AI Experiences",
  description:
    "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
  alternates: getLocalizedAlternates("/products/spatial-display"),
  openGraph: {
    title: "Spatial Display for Immersive AI Experiences | HS Global AI",
    description:
      "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
    url: "https://www.hsglobalai.com/products/spatial-display",
    images: [
      {
        url: "https://www.hsglobalai.com/products/spatial-display/spatial-display.png",
        width: 1200,
        height: 630,
        alt: "AI Spatial Display Volumetric Screen Showcase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Spatial Display for Immersive AI Experiences | HS Global AI",
    description:
      "Naked-eye 3D spatial AI displays delivering glasses-free immersive visual experiences and real-time interactive avatars for high-impact commercial environments.",
    images: ["https://www.hsglobalai.com/products/spatial-display/spatial-display.png"],
  },
};

export default function SpatialDisplayPage() {
  return <SpatialDisplayClient />;
}

