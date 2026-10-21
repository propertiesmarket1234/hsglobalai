"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  Locale,
  locales,
  LOCAL_STORAGE_LANG_KEY,
  supportedLocales,
  nonDefaultLocales,
  getLocalizedPath,
  stripLocalePrefix,
} from "@/i18n/config";
import { getDictionary } from "@/i18n/getDictionary";
import { Check, Globe } from "lucide-react";
import LanguageBanner from "@/components/LanguageBanner";
import { socialLinks } from "@/components/SocialLinks";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const getInitialLocale = (): Locale => {
    const seg = pathname ? pathname.split("/")[1] : "";
    if (seg && (nonDefaultLocales as readonly string[]).includes(seg)) {
      return seg as Locale;
    }
    return "en";
  };

  const [currentLocale, setCurrentLocale] = useState<Locale>(getInitialLocale);
  const dict = getDictionary(currentLocale);
  const lPath = (path: string) => getLocalizedPath(path, currentLocale);

  useEffect(() => {
    const seg = pathname.split("/")[1];
    if (seg && (nonDefaultLocales as readonly string[]).includes(seg)) {
      setCurrentLocale(seg as Locale);
    } else {
      const savedPref = localStorage.getItem(LOCAL_STORAGE_LANG_KEY) as Locale;
      if (savedPref && (supportedLocales as readonly string[]).includes(savedPref)) {
        setCurrentLocale(savedPref);
      } else {
        setCurrentLocale("en");
      }
    }
  }, [pathname]);

  const handleSelectLanguage = (locale: Locale) => {
    setCurrentLocale(locale);
    localStorage.setItem(LOCAL_STORAGE_LANG_KEY, locale);
    setLangDropdownOpen(false);

    const targetPath = getLocalizedPath(pathname, locale);
    if (targetPath !== pathname) {
      router.push(targetPath);
    }
  };

  const isActive = (href: string) => {
    const cleanPath = stripLocalePrefix(pathname);
    if (href === "/") return cleanPath === "/";
    return cleanPath === href || cleanPath.startsWith(`${href}/`);
  };

  return (
    <>
      <LanguageBanner />
      <header className="sticky top-0 z-50 px-3 pt-3 sm:px-4">
        <div className="lp-nav-capsule mx-auto flex h-14 max-w-[1200px] items-center justify-between rounded-full border border-[var(--lp-line)] bg-[rgba(250,250,250,0.88)] pl-4 pr-2 backdrop-blur-md shadow-[0_2px_12px_rgba(17,17,19,0.04)]">
          {/* BRAND LOGO */}
          <Link
            href={lPath("/")}
            aria-label="HS Global AI home"
            className="group flex items-center gap-2.5 rounded-full"
          >
            <span className="transition-transform duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:-rotate-6 group-hover:scale-105">
              <Image
                src="/logo/hs-global-ai-logo.png"
                alt="HS Global AI"
                width={32}
                height={32}
                priority
                className="h-7 w-auto object-contain"
              />
            </span>
            <span className="text-[15px] font-semibold tracking-[-0.03em] text-[var(--lp-ink)]">
              HS Global AI
            </span>
          </Link>

          {/* DESKTOP NAVIGATION LINKS */}
          <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
            {/* HOME */}
            <Link
              href={lPath("/")}
              className={`relative rounded-full px-3 py-1.5 text-[14px] transition-colors duration-200 ${
                isActive("/")
                  ? "bg-[var(--lp-tile)] text-[var(--lp-ink)] font-semibold"
                  : "text-[var(--lp-ink-2)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
              }`}
            >
              <span>{dict.nav.home}</span>
            </Link>

            {/* PRODUCTS DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setProductsDropdownOpen(true)}
              onMouseLeave={() => setProductsDropdownOpen(false)}
            >
              <Link
                href={lPath("/products")}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[14px] transition-colors duration-200 ${
                  isActive("/products")
                    ? "bg-[var(--lp-tile)] text-[var(--lp-ink)] font-semibold"
                    : "text-[var(--lp-ink-2)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                }`}
              >
                <span>{dict.nav.products}</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    productsDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <AnimatePresence>
                {productsDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 w-64 z-50"
                  >
                    <div className="rounded-2xl border border-[var(--lp-line)] bg-white p-2 shadow-[var(--lp-shadow-card)]">
                      <Link
                        href={lPath("/products")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.allProductsOverview}
                      </Link>
                      <div className="my-1 border-t border-[var(--lp-line)]" />
                      <Link
                        href={lPath("/products/ai-digital-human")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.dihuavaAvatarPlatform}
                      </Link>
                      <Link
                        href={lPath("/products/holographic-display")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.holographicDisplay}
                      </Link>
                      <Link
                        href={lPath("/products/spatial-display")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.spatialDisplay}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* INDUSTRIES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <Link
                href={lPath("/industries")}
                className={`inline-flex items-center gap-1 rounded-full px-3 py-1.5 text-[14px] transition-colors duration-200 ${
                  isActive("/industries")
                    ? "bg-[var(--lp-tile)] text-[var(--lp-ink)] font-semibold"
                    : "text-[var(--lp-ink-2)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                }`}
              >
                <span>{dict.nav.industries}</span>
                <svg
                  className={`h-3.5 w-3.5 transition-transform duration-200 ${
                    industriesDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </Link>

              <AnimatePresence>
                {industriesDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.15, ease: "easeOut" }}
                    className="absolute left-0 top-full pt-2 w-64 z-50"
                  >
                    <div className="rounded-2xl border border-[var(--lp-line)] bg-white p-2 shadow-[var(--lp-shadow-card)]">
                      <Link
                        href={lPath("/industries")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.allIndustryDeployments}
                      </Link>
                      <div className="my-1 border-t border-[var(--lp-line)]" />
                      <Link
                        href={lPath("/industries/banking")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.bankingServices}
                      </Link>
                      <Link
                        href={lPath("/industries/retail")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.retailAdvertising}
                      </Link>
                      <Link
                        href={lPath("/industries/corporate")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.corporateServices}
                      </Link>
                      <Link
                        href={lPath("/industries/healthcare")}
                        className="block rounded-xl px-3.5 py-2 text-[13px] font-medium text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] transition-colors"
                      >
                        {dict.nav.healthcareHospitals}
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* ABOUT */}
            <Link
              href={lPath("/about")}
              className={`rounded-full px-3 py-1.5 text-[14px] transition-colors duration-200 ${
                isActive("/about")
                  ? "bg-[var(--lp-tile)] text-[var(--lp-ink)] font-semibold"
                  : "text-[var(--lp-ink-2)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
              }`}
            >
              <span>{dict.footer.aboutUs}</span>
            </Link>

            {/* EVENTS */}
            <Link
              href={lPath("/events")}
              className={`rounded-full px-3 py-1.5 text-[14px] transition-colors duration-200 ${
                isActive("/events")
                  ? "bg-[var(--lp-tile)] text-[var(--lp-ink)] font-semibold"
                  : "text-[var(--lp-ink-2)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
              }`}
            >
              <span>{dict.nav.events}</span>
            </Link>

            {/* CONTACT */}
            <Link
              href={lPath("/contact")}
              className={`rounded-full px-3 py-1.5 text-[14px] transition-colors duration-200 ${
                isActive("/contact")
                  ? "bg-[var(--lp-tile)] text-[var(--lp-ink)] font-semibold"
                  : "text-[var(--lp-ink-2)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
              }`}
            >
              <span>{dict.nav.contactUs}</span>
            </Link>
          </nav>

          {/* RIGHT ACTION CONTROLS */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {/* LANGUAGE SELECTOR (Desktop and Tablet) */}
            <div
              className="relative hidden md:block"
              onMouseEnter={() => setLangDropdownOpen(true)}
              onMouseLeave={() => setLangDropdownOpen(false)}
            >
              <button
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="inline-flex h-10 items-center gap-1.5 rounded-full border border-[var(--lp-line)] bg-white px-3.5 text-[12px] font-medium text-[var(--lp-ink-2)] shadow-xs transition-all duration-150 hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] active:scale-[0.98] cursor-pointer"
                aria-label="Select Language"
              >
                <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[var(--lp-ink)]">{locales[currentLocale].flag}</span>
                <span>{locales[currentLocale].nativeName}</span>
                <svg
                  className={`h-3 w-3 transition-transform duration-200 ${
                    langDropdownOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {langDropdownOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 4, scale: 0.98 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 top-full pt-2 w-48 z-50"
                  >
                    <div className="rounded-2xl border border-[var(--lp-line)] bg-white p-1.5 shadow-[var(--lp-shadow-card)]">
                      {supportedLocales.map((loc) => (
                        <button
                          key={loc}
                          onClick={() => handleSelectLanguage(loc)}
                          className={`flex w-full items-center justify-between rounded-xl px-3 py-1.5 text-left text-[12px] font-medium transition-colors cursor-pointer active:scale-[0.98] ${
                            loc === currentLocale
                              ? "bg-[var(--lp-tile)] text-[var(--lp-ink)] font-semibold"
                              : "text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile-2)] hover:text-[var(--lp-ink)]"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[var(--lp-tile)] border border-[var(--lp-line)] text-[var(--lp-ink)]">{locales[loc].flag}</span>
                            <span>{locales[loc].nativeName}</span>
                          </span>
                          {loc === currentLocale && <Check className="h-3.5 w-3.5 text-[var(--lp-accent)]" />}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* PRIMARY CTA: BOOK DEMO BUTTON (Hidden on mobile < sm to guarantee zero header squish) */}
            <Link
              href={lPath("/contact")}
              className="hidden sm:inline-flex h-10 items-center justify-center whitespace-nowrap rounded-full bg-[var(--lp-ink)] px-5 text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all duration-150 hover:bg-[#2A2A2F] active:scale-[0.98] cursor-pointer"
            >
              {dict.common.bookDemo || "Book Demo"}
            </Link>

            {/* SOCIAL LINKS (Desktop & Tablet) */}
            <div className="hidden md:flex items-center gap-1 border-l border-[var(--lp-line)] pl-2 sm:pl-3 ml-0.5">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.ariaLabel}
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-[var(--lp-muted)] transition-colors hover:bg-[var(--lp-tile)] hover:text-[var(--lp-ink)] active:scale-95 cursor-pointer"
                >
                  <item.icon className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>

            {/* MOBILE HAMBURGER BUTTON */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="relative inline-flex h-10 w-10 items-center justify-center rounded-full text-[var(--lp-ink-2)] transition-colors hover:bg-[var(--lp-tile-2)] active:scale-95 cursor-pointer md:hidden"
            >
              {mobileMenuOpen ? (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* MOBILE SLIDE-OUT MENU DRAWER */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="mx-auto mt-2 max-w-[1200px] overflow-hidden rounded-[24px] border border-[var(--lp-line)] bg-white p-4 sm:p-5 shadow-[var(--lp-shadow-lift)] md:hidden"
            >
              <div className="space-y-3">
                {/* PROMINENT MOBILE BOOK DEMO BUTTON */}
                <Link
                  href={lPath("/contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex h-12 w-full items-center justify-center rounded-full bg-[var(--lp-ink)] px-6 text-center text-[14px] font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16),0_1px_2px_rgba(17,17,19,0.24)] transition-all hover:bg-neutral-800 active:scale-[0.98] cursor-pointer"
                >
                  {dict.common.bookDemo || "Book Demo"}
                </Link>
                <Link
                  href={lPath("/")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                >
                  {dict.nav.home}
                </Link>
                <Link
                  href={lPath("/products")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                >
                  {dict.nav.allProductsOverview}
                </Link>
                <Link
                  href={lPath("/products/ai-digital-human")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl pl-6 py-1.5 text-[13px] text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile)]"
                >
                  {dict.nav.dihuavaAvatarPlatform}
                </Link>
                <Link
                  href={lPath("/industries")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                >
                  {dict.nav.industries}
                </Link>
                <Link
                  href={lPath("/about")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                >
                  {dict.footer.aboutUs}
                </Link>
                <Link
                  href={lPath("/events")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                >
                  {dict.nav.events}
                </Link>
                <Link
                  href={lPath("/contact")}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-xl px-3 py-2 text-[14px] font-medium text-[var(--lp-ink)] hover:bg-[var(--lp-tile)]"
                >
                  {dict.nav.contactUs}
                </Link>

                {/* Mobile Language Chips */}
                <div className="pt-3 border-t border-[var(--lp-line)]">
                  <span className="block text-[11px] font-medium text-[var(--lp-muted)] mb-2">
                    {dict.nav.selectLanguage || "Language"}
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {supportedLocales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          handleSelectLanguage(loc);
                          setMobileMenuOpen(false);
                        }}
                        className={`inline-flex h-8 items-center justify-center gap-1.5 rounded-full px-3.5 text-xs font-medium transition-all active:scale-[0.98] cursor-pointer ${
                          loc === currentLocale
                            ? "bg-[var(--lp-ink)] text-white shadow-xs"
                            : "bg-[var(--lp-tile)] text-[var(--lp-ink-2)] hover:bg-[var(--lp-tile-2)]"
                        }`}
                      >
                        <span className="text-[10px] font-bold px-1 rounded bg-[var(--lp-tile)]/20 text-current">{locales[loc].flag}</span>
                        <span>{locales[loc].nativeName}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Mobile Social Links */}
                <div className="pt-3 border-t border-[var(--lp-line)]">
                  <span className="block text-[11px] font-medium text-[var(--lp-muted)] mb-2">
                    Official Social Channels
                  </span>
                  <div className="flex items-center gap-2">
                    {socialLinks.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={item.ariaLabel}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--lp-line)] bg-[var(--lp-tile)] text-[var(--lp-ink-2)] hover:text-[var(--lp-ink)] hover:bg-[var(--lp-tile-2)] transition-colors active:scale-95 cursor-pointer"
                      >
                        <item.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}