"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-black/80 backdrop-blur-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <Link href="/" className="flex flex-col items-center">
          <Image
            src="/logo/hs-global-ai-logo.png"
            alt="HS Global AI"
            width={90}
            height={60}
            priority
            className="h-auto w-[90px]"
          />

          <span className="mt-1 text-sm font-bold tracking-wide text-white">
            HS GLOBAL AI
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="/products"
            className={`text-sm transition ${
              isActive("/products")
                ? "font-semibold text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            Products
          </Link>

          <Link
            href="/industries"
            className={`text-sm transition ${
              isActive("/industries")
                ? "font-semibold text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            Industries
          </Link>

          <Link
            href="/resources"
            className={`text-sm transition ${
              isActive("/resources")
                ? "font-semibold text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            Resources
          </Link>

          <Link
            href="/about"
            className={`text-sm transition ${
              isActive("/about")
                ? "font-semibold text-white"
                : "text-white/80 hover:text-white"
            }`}
          >
            About
          </Link>
        </nav>

        <div className="flex items-center gap-5">
          {/* Book a Demo */}
          <Link
            href="/contact"
            className="rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:bg-gray-200"
          >
            Book a Demo
          </Link>

          {/* Social Icons */}
          <div className="hidden items-center gap-4 lg:flex">
            {/* Facebook */}
            <a
              href="#"
              aria-label="Facebook"
              className="text-gray-400 transition hover:text-white"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v9h4v-9h3l1-4h-4V9c0-.7.3-1 1-1Z" />
              </svg>
            </a>

            {/* X / Twitter */}
            <a
              href="#"
              aria-label="X"
              className="text-gray-400 transition hover:text-white"
            >
              <span className="text-base">𝕏</span>
            </a>

            {/* YouTube */}
            <a
              href="#"
              aria-label="YouTube"
              className="text-gray-400 transition hover:text-white"
            >
              <svg
                width="19"
                height="19"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M23 12s0-3.5-.4-5.2a3 3 0 0 0-2.1-2.1C18.8 4.2 12 4.2 12 4.2s-6.8 0-8.5.5a3 3 0 0 0-2.1 2.1C1 8.5 1 12 1 12s0 3.5.4 5.2a3 3 0 0 0 2.1 2.1c1.7.5 8.5.5 8.5.5s6.8 0 8.5-.5a3 3 0 0 0 2.1-2.1C23 15.5 23 12 23 12Zm-13.2 4V8l6.9 4-6.9 4Z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="text-gray-400 transition hover:text-white"
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M5.5 8.5H2.5V21h3V8.5ZM4 3a1.75 1.75 0 1 0 0 3.5A1.75 1.75 0 0 0 4 3ZM9 8.5h2.9v1.7h.1c.4-.8 1.4-2 3.6-2 3.8 0 4.5 2.5 4.5 5.8V21h-3v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21H9V8.5Z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="#"
              aria-label="Instagram"
              className="text-gray-400 transition hover:text-white"
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
                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}