import type { Metadata } from "next";
import HomeClient from "./HomeClient";

export const metadata: Metadata = {
  title: "HS Global AI | AI Digital Humans, Holographic & Spatial AI",
  description:
    "HS Global AI powers enterprise interactive experiences with DIHUAVA AI Digital Humans, 3D Hologram Boxes, and spatial display technology for smart customer engagement.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return <HomeClient />;
}