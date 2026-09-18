import type { Metadata } from "next";
import TermsClient from "./TermsClient";
import { getLocalizedAlternates } from "@/i18n/config";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "Review the Terms and Conditions for accessing hsglobalai.com, licensing DIHUAVA software, and purchasing 3D Hologram Box display hardware.",
  alternates: getLocalizedAlternates("/terms"),
  openGraph: {
    title: "Terms & Conditions | HS Global AI",
    description:
      "Review the Terms and Conditions for accessing hsglobalai.com, licensing DIHUAVA software, and purchasing 3D Hologram Box display hardware.",
    url: "https://www.hsglobalai.com/terms",
    siteName: "HS Global AI",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Terms & Conditions | HS Global AI",
    description:
      "Review the Terms and Conditions for accessing hsglobalai.com, licensing DIHUAVA software, and purchasing 3D Hologram Box display hardware.",
  },
};

export default function TermsPage() {
  return <TermsClient />;
}

