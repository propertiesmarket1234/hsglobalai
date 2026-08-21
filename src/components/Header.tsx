"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [contactDropdownOpen, setContactDropdownOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/85 backdrop-blur-2xl border-b border-white/10 transition-all duration-300">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
        {/* LOGO */}
        <Link href="/" className="flex flex-col items-center group relative">
          <Image
            src="/logo/hs-global-ai-logo.png"
            alt="HS Global AI"
            width={90}
            height={60}
            priority
            className="h-auto w-[85px] transition-transform duration-300 group-hover:scale-105 group-hover:drop-shadow-[0_0_12px_rgba(6,182,212,0.6)]"
          />
          <span className="mt-1 text-[11px] font-bold tracking-widest text-white uppercase group-hover:text-cyan-400 transition-colors">
            HS GLOBAL AI
          </span>
        </Link>

        {/* DESKTOP NAVIGATION LINKS */}
        <nav className="hidden items-center gap-8 md:flex">
          {/* PRODUCTS DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setProductsDropdownOpen(true)}
            onMouseLeave={() => setProductsDropdownOpen(false)}
          >
            <Link
              href="/products"
              className={`relative inline-flex items-center gap-1.5 py-1 text-sm transition-colors ${
                isActive("/products")
                  ? "font-semibold text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span>Products</span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-300 ${productsDropdownOpen ? "rotate-180 text-cyan-400" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>

              {isActive("/products") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_8px_#06b6d4]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* PRODUCTS DROPDOWN MENU WITH ANIMATEPRESENCE */}
            <AnimatePresence>
              {productsDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full pt-2 w-64 z-50"
                >
                  <div className="rounded-2xl border border-cyan-500/30 bg-neutral-950/95 p-2.5 shadow-2xl backdrop-blur-2xl">
                    <Link
                      href="/products"
                      className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
                    >
                      All Products Overview
                    </Link>

                    <div className="my-1.5 border-t border-white/10" />

                    <Link
                      href="/products/dihuava"
                      className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
                    >
                      <span className="text-cyan-400 font-bold">DIHUAVA</span> AI Avatar Platform
                    </Link>

                    <Link
                      href="/products/holographic-display"
                      className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
                    >
                      <span className="text-cyan-400 font-bold">Holographic Display</span> (Hologram Box)
                    </Link>

                    <Link
                      href="/products/spatial-display"
                      className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
                    >
                      <span className="text-cyan-400 font-bold">Spatial Display</span> (3D Volumetric)
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <Link
            href="/industries"
            className={`relative py-1 text-sm transition-colors ${
              isActive("/industries")
                ? "font-semibold text-cyan-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <span>Industries</span>
            {isActive("/industries") && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_8px_#06b6d4]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <Link
            href="/about"
            className={`relative py-1 text-sm transition-colors ${
              isActive("/about")
                ? "font-semibold text-cyan-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <span>About</span>
            {isActive("/about") && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_8px_#06b6d4]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <Link
            href="/events"
            className={`relative py-1 text-sm transition-colors ${
              isActive("/events")
                ? "font-semibold text-cyan-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <span>Events</span>
            {isActive("/events") && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_8px_#06b6d4]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          <Link
            href="/blog"
            className={`relative py-1 text-sm transition-colors ${
              isActive("/blog")
                ? "font-semibold text-cyan-400"
                : "text-gray-300 hover:text-white"
            }`}
          >
            <span>Blog</span>
            {isActive("/blog") && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_8px_#06b6d4]"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </Link>

          {/* CONTACT US DROPDOWN WITH SUB-ITEM DOWNLOAD CENTER */}
          <div
            className="relative"
            onMouseEnter={() => setContactDropdownOpen(true)}
            onMouseLeave={() => setContactDropdownOpen(false)}
          >
            <Link
              href="/contact"
              className={`relative inline-flex items-center gap-1.5 py-1 text-sm transition-colors ${
                isActive("/contact")
                  ? "font-semibold text-cyan-400"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <span>Contact Us</span>
              <svg
                className={`h-3.5 w-3.5 transition-transform duration-300 ${contactDropdownOpen ? "rotate-180 text-cyan-400" : ""}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>

              {isActive("/contact") && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-cyan-400 to-sky-400 shadow-[0_0_8px_#06b6d4]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>

            {/* DROPDOWN MENU WITH ANIMATEPRESENCE */}
            <AnimatePresence>
              {contactDropdownOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 8, scale: 0.95 }}
                  transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-full pt-2 w-52 z-50"
                >
                  <div className="rounded-2xl border border-cyan-500/30 bg-neutral-950/95 p-2.5 shadow-2xl backdrop-blur-2xl">
                    <Link
                      href="/contact"
                      className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all"
                    >
                      Contact Us & HQ
                    </Link>

                    <Link
                      href="/contact/download-center"
                      className="block rounded-xl px-4 py-2.5 text-xs font-semibold text-gray-200 hover:bg-cyan-500/10 hover:text-cyan-300 transition-all border-t border-white/10 mt-1.5 pt-2.5"
                    >
                      Download Center
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </nav>

        {/* CTA & DESKTOP SOCIAL ICONS */}
        <div className="hidden md:flex items-center gap-6">
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-black transition-all duration-300 hover:bg-cyan-400 hover:scale-105 hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]"
          >
            Book a Demo
          </Link>

          {/* Social Icons */}
          <div className="hidden lg:flex items-center gap-4 border-l border-white/15 pl-6">
            <a
              href="https://www.facebook.com/hsglobalai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v9h4v-9h3l1-4h-4V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>

            <a
              href="https://x.com/HSGlobalAI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X (Twitter)"
              className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110 font-bold text-sm"
            >
              𝕏
            </a>

            <a
              href="https://www.linkedin.com/company/hs-global-ai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5.5 8.5H2.5V21h3V8.5ZM4 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 4 3ZM9 8.5h2.9v1.7h.1c.4-.8 1.4-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9V8.5Z" />
              </svg>
            </a>

            <a
              href="https://www.instagram.com/hsglobalai/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect x="3" y="3" width="18" height="18" rx="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>

            <a
              href="https://www.youtube.com/@hsglobalai"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="text-gray-300 transition-all hover:text-cyan-400 hover:scale-110"
            >
              <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23 12s0-3.5-.4-5.2a3 3 0 0 0-2.1-2.1C18.8 4.2 12 4.2 12 4.2s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 8.5 1 12 1 12s0 3.5.4 5.2a3 3 0 0 0 2.1 2.1c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1C23 15.5 23 12 23 12Zm-13.2 4V8l6.9 4-6.9 4Z" />
              </svg>
            </a>
          </div>
        </div>

        {/* MOBILE RIGHT CONTROLS (DEMO BUTTON & HAMBURGER TOGGLE) */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href="/contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-bold text-black shadow-md hover:bg-cyan-400 transition-colors"
          >
            Book a Demo
          </Link>

          {/* HAMBURGER BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Mobile Menu"
            className="rounded-xl border border-white/20 bg-neutral-900/90 p-2 text-cyan-400 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* MOBILE SLIDE-OUT DRAWER MENU */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-white/10 bg-neutral-950/98 backdrop-blur-2xl px-6 py-6"
          >
            <div className="space-y-4">
              <div>
                <Link
                  href="/products"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive("/products") && !pathname.includes("/products/")
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  Products Overview
                </Link>

                {/* Subpages links in mobile drawer */}
                <div className="ml-4 mt-1 border-l border-cyan-500/20 pl-3 space-y-1">
                  <Link
                    href="/products/dihuava"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      pathname === "/products/dihuava"
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    ● DIHUAVA AI Avatar Platform
                  </Link>

                  <Link
                    href="/products/holographic-display"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      pathname === "/products/holographic-display"
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    ● AI Hologram Box (Holographic)
                  </Link>

                  <Link
                    href="/products/spatial-display"
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block rounded-lg px-3 py-1.5 text-xs font-medium transition-colors ${
                      pathname === "/products/spatial-display"
                        ? "text-cyan-400 font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`}
                  >
                    ● Spatial Display (3D Volumetric)
                  </Link>
                </div>
              </div>

              <Link
                href="/industries"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive("/industries")
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                Industries
              </Link>

              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive("/about")
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                About Us
              </Link>

              <Link
                href="/events"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive("/events")
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                Events & Exhibitions
              </Link>

              <Link
                href="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                  isActive("/blog")
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                    : "text-gray-200 hover:bg-white/5 hover:text-white"
                }`}
              >
                Blog & Insights
              </Link>

              <div className="pt-2 border-t border-white/10">
                <span className="block text-[11px] font-mono text-cyan-400 uppercase tracking-widest px-4 mb-2">
                  Contact & Resources
                </span>

                <Link
                  href="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors ${
                    isActive("/contact") && !pathname.includes("download-center")
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  📍 Contact Us & Singapore HQ
                </Link>

                <Link
                  href="/contact/download-center"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-xl px-4 py-3 text-base font-semibold transition-colors mt-1 ${
                    pathname.includes("download-center")
                      ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30"
                      : "text-gray-200 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  📥 Download Center & Datasheets
                </Link>
              </div>

              {/* MOBILE SOCIAL ICONS BAR */}
              <div className="pt-6 border-t border-white/10">
                <p className="text-xs font-mono uppercase tracking-wider text-gray-400 px-4 mb-3">
                  Connect With HS Global AI
                </p>

                <div className="flex items-center gap-5 px-4">
                  {/* Facebook */}
                  <a
                    href="https://www.facebook.com/hsglobalai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v9h4v-9h3l1-4h-4V9c0-.7.3-1 1-1Z" />
                    </svg>
                  </a>

                  {/* X / Twitter */}
                  <a
                    href="https://x.com/HSGlobalAI"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="X (Twitter)"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white font-bold text-sm transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    𝕏
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/hs-global-ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.5 8.5H2.5V21h3V8.5ZM4 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 4 3ZM9 8.5h2.9v1.7h.1c.4-.8 1.4-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9V8.5Z" />
                    </svg>
                  </a>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/hsglobalai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="5" />
                      <circle cx="12" cy="12" r="4" />
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                    </svg>
                  </a>

                  {/* YouTube */}
                  <a
                    href="https://www.youtube.com/@hsglobalai"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="YouTube"
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white transition-colors hover:border-cyan-400 hover:text-cyan-400"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M23 12s0-3.5-.4-5.2a3 3 0 0 0-2.1-2.1C18.8 4.2 12 4.2 12 4.2s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 8.5 1 12 1 12s0 3.5.4 5.2a3 3 0 0 0 2.1 2.1c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1C23 15.5 23 12 23 12Zm-13.2 4V8l6.9 4-6.9 4Z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* HQ ADDRESS BRIEF */}
              <div className="pt-4 px-4 text-[11px] text-gray-400">
                <p>📍 HS GLOBAL SG PTE LTD, 20 COLLYER QUAY, #09-01, SINGAPORE – 049319</p>
                <p className="mt-1">✉️ sales@hsglobalai.com</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}