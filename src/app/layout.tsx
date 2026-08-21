import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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

  alternates: {
    canonical: "https://www.hsglobalai.com/",
  },

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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
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

        {children}
      </body>
    </html>
  );
}
