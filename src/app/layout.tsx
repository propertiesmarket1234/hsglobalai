import type { Metadata } from "next";
import { getLocalizedAlternates } from "@/i18n/config";
import Script from "next/script";
import { Inter, JetBrains_Mono } from "next/font/google";
import ScrollProgressAndGlow from "@/components/ScrollProgressAndGlow";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.hsglobalai.com"),

  title: {
    default: "HS Global AI | Enterprise AI Digital Humans & Holographic AI",
    template: "%s | HS Global AI",
  },

  description:
    "HS Global AI builds enterprise AI digital humans, holographic AI assistants, spatial displays and intelligent customer experiences powered by on-device AI.",

  keywords: [
    "HS Global AI",
    "AI Digital Humans",
    "AI Digital Human",
    "Holographic AI",
    "AI Hologram",
    "AI Hologram Box",
    "Enterprise AI",
    "On-Device AI",
    "AI Virtual Assistant",
    "Spatial Display",
    "Virtual Try-On",
    "Conversational AI",
  ],

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  alternates: getLocalizedAlternates("/"),

  openGraph: {
    type: "website",
    url: "https://www.hsglobalai.com/",
    siteName: "HS Global AI",
    title: "HS Global AI | Enterprise AI Digital Humans & Holographic AI",
    description:
      "Enterprise AI digital humans, holographic AI assistants, spatial displays and intelligent customer experiences powered by on-device AI.",
    locale: "en_US",
  },

  twitter: {
    card: "summary_large_image",
    title: "HS Global AI | Enterprise AI Digital Humans & Holographic AI",
    description:
      "Enterprise AI digital humans, holographic AI assistants, spatial displays and intelligent customer experiences powered by on-device AI.",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/logo/hs-global-ai-logo.png", type: "image/png", sizes: "500x500" },
    ],
    shortcut: "/favicon.ico",
    apple: [
      { url: "/logo/hs-global-ai-logo.png", type: "image/png", sizes: "500x500" },
    ],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.hsglobalai.com/#organization",
      "name": "HS Global AI",
      "legalName": "HS GLOBAL SG PTE LTD",
      "url": "https://www.hsglobalai.com",
      "logo": "https://www.hsglobalai.com/logo/hs-global-ai-logo.png",
      "description":
        "HS Global AI provides an interactive AI digital human platform, 3D Hologram Box displays, and spatial displays for enterprise customer engagement.",
      "email": "sales@hsglobalai.com",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "20 Collyer Quay, #09-01",
        "addressLocality": "Singapore",
        "postalCode": "049319",
        "addressCountry": "SG",
      },
      "location": [
        {
          "@type": "Place",
          "name": "Singapore Headquarters",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "20 Collyer Quay, #09-01",
            "addressLocality": "Singapore",
            "postalCode": "049319",
            "addressCountry": "SG",
          },
        },
        {
          "@type": "Place",
          "name": "India Office",
          "address": {
            "@type": "PostalAddress",
            "streetAddress":
              "49-4-1, 17/3E, Prasanth Colony, 1st line, Gunadala, Kanuru",
            "addressLocality": "Andhra Pradesh",
            "postalCode": "520004",
            "addressCountry": "IN",
          },
        },
      ],
      "sameAs": [
        "https://www.facebook.com/hsglobalai/",
        "https://x.com/HSGlobalAI",
        "https://www.linkedin.com/company/hs-global-ai/",
        "https://www.instagram.com/hsglobalai/",
        "https://www.youtube.com/@hsglobalai",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://www.hsglobalai.com/#website",
      "url": "https://www.hsglobalai.com",
      "name": "HS Global AI",
      "publisher": {
        "@id": "https://www.hsglobalai.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationJsonLd),
          }}
        />
      </head>
      <Script
        id="google-tag-manager"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','GTM-NRR92D9K');
      `,
        }}
      />

      <body className="min-h-full flex flex-col">
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NRR92D9K"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <ScrollProgressAndGlow />
        {children}
      </body>
    </html>
  );
}
