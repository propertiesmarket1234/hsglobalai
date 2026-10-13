"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Locale, nonDefaultLocales, getLocalizedPath } from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";

export default function Footer() {
  const pathname = usePathname();
  const seg = pathname ? pathname.split("/")[1] : "";
  const currentLocale: Locale =
    seg && (nonDefaultLocales as readonly string[]).includes(seg) ? (seg as Locale) : "en";
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  return (
    <footer className="border-t border-[var(--lp-line)] bg-[var(--lp-bg)] px-4 py-12 sm:py-16 sm:px-6 text-[var(--lp-ink)]">
      <div className="mx-auto max-w-[1200px]">
        <div className="grid gap-8 sm:gap-10 grid-cols-2 md:grid-cols-2 lg:grid-cols-6">
          {/* BRAND & LOCATIONS (2 COLS) */}
          <div className="col-span-2 lg:col-span-2">
            <Link href={lPath("/")} className="inline-flex items-center gap-2 group">
              <Image
                src="/logo/hs-global-ai-logo.png"
                alt="HS Global AI"
                width={32}
                height={32}
                className="h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <span className="text-[16px] font-semibold tracking-[-0.03em] text-[var(--lp-ink)]">
                HS Global AI
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-[var(--lp-ink-2)]">
              Enterprise AI digital humans, holographic concierge displays, and on-premise spatial intelligence for physical spaces.
            </p>

            <div className="mt-6 space-y-2 text-[12px] text-[var(--lp-muted)]">
              <p>
                <strong className="text-[var(--lp-ink)] font-semibold">Singapore HQ:</strong> 60 Paya Lebar Road, #07-54, Paya Lebar Square, Singapore 409051
              </p>
              <p>
                <strong className="text-[var(--lp-ink)] font-semibold">India Center:</strong> 5th Floor, Quadrant 2, Cyber Towers, Hitec City, Hyderabad, 500081
              </p>
              <p className="pt-1">
                <a
                  href="mailto:sales@hsglobalai.com"
                  className="font-medium text-[var(--lp-ink)] hover:text-[var(--lp-accent)] transition-colors"
                >
                  sales@hsglobalai.com
                </a>
              </p>
            </div>
          </div>

          {/* PRODUCTS */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
              {dict.footer.productsHeader || "Products"}
            </h3>
            <div className="flex flex-col gap-2.5 text-[14px] text-[var(--lp-ink-2)]">
              <Link href={lPath("/products/ai-digital-human")} className="hover:text-[var(--lp-ink)] transition-colors">
                AI Digital Humans
              </Link>
              <Link href={lPath("/products/holographic-display")} className="hover:text-[var(--lp-ink)] transition-colors">
                3D Hologram Box
              </Link>
              <Link href={lPath("/products/spatial-display")} className="hover:text-[var(--lp-ink)] transition-colors">
                Spatial 3D Displays
              </Link>
              <Link href={lPath("/products")} className="hover:text-[var(--lp-ink)] transition-colors text-xs text-[var(--lp-accent-ink)] font-semibold pt-1">
                All Products Overview →
              </Link>
            </div>
          </div>

          {/* DOMAINS */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
              {dict.footer.industriesHeader || "Domains"}
            </h3>
            <div className="flex flex-col gap-2.5 text-[14px] text-[var(--lp-ink-2)]">
              <Link href={lPath("/industries/retail")} className="hover:text-[var(--lp-ink)] transition-colors">
                Retail & Luxury
              </Link>
              <Link href={lPath("/industries/healthcare")} className="hover:text-[var(--lp-ink)] transition-colors">
                Hospitals & Clinics
              </Link>
              <Link href={lPath("/industries/banking")} className="hover:text-[var(--lp-ink)] transition-colors">
                Banking & VIP Wealth
              </Link>
              <Link href={lPath("/industries/corporate")} className="hover:text-[var(--lp-ink)] transition-colors">
                Corporate & Defence
              </Link>
              <Link href={lPath("/industries/tourism")} className="hover:text-[var(--lp-ink)] transition-colors">
                Events & Tourism
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
              {dict.footer.companyHeader || "Company"}
            </h3>
            <div className="flex flex-col gap-2.5 text-[14px] text-[var(--lp-ink-2)]">
              <Link href={lPath("/about")} className="hover:text-[var(--lp-ink)] transition-colors">
                About HS Global
              </Link>
              <Link href={lPath("/events")} className="hover:text-[var(--lp-ink)] transition-colors">
                Events & Exhibitions
              </Link>
              <Link href={lPath("/contact")} className="hover:text-[var(--lp-ink)] transition-colors">
                Contact Sales
              </Link>
              <Link href={lPath("/contact/download-center")} className="hover:text-[var(--lp-ink)] transition-colors">
                Download Center
              </Link>
            </div>
          </div>

          {/* LEGAL & SPEC SHEETS */}
          <div>
            <h3 className="mb-4 text-[12px] font-semibold uppercase tracking-wider text-[var(--lp-muted)]">
              {dict.footer.usefulLinksHeader || "Resources"}
            </h3>
            <div className="flex flex-col gap-2.5 text-[14px] text-[var(--lp-ink-2)]">
              <Link href={lPath("/contact/download-center")} className="hover:text-[var(--lp-ink)] transition-colors">
                Technical Datasheets
              </Link>
              <Link href={lPath("/faq")} className="hover:text-[var(--lp-ink)] transition-colors">
                Deployment FAQ
              </Link>
              <Link href={lPath("/privacy")} className="hover:text-[var(--lp-ink)] transition-colors">
                Privacy & Air-Gap
              </Link>
              <Link href={lPath("/terms")} className="hover:text-[var(--lp-ink)] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-14 flex flex-col gap-4 border-t border-[var(--lp-line)] pt-8 text-[12px] text-[var(--lp-muted)] md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} HS Global AI. All rights reserved.</p>

          <div className="flex items-center gap-4 sm:gap-6 flex-wrap">
            <Link href={lPath("/privacy")} className="hover:text-[var(--lp-ink)] transition-colors">
              Privacy Policy
            </Link>
            <Link href={lPath("/terms")} className="hover:text-[var(--lp-ink)] transition-colors">
              Terms & Conditions
            </Link>
            <Link href={lPath("/contact")} className="hover:text-[var(--lp-ink)] transition-colors">
              Pilot Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
