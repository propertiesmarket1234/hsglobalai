import { notFound } from "next/navigation";
import { isValidNonDefaultLocale } from "@/i18n/config";
import type { Metadata } from "next";

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export async function generateStaticParams() {
  return [{ lang: "zh" }, { lang: "ru" }, { lang: "es" }];
}

export default async function LocalizedLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isValidNonDefaultLocale(lang)) {
    notFound();
  }

  return <>{children}</>;
}
