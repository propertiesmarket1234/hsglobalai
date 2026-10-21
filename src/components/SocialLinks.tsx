import React from "react";

export interface SocialLinkItem {
  name: string;
  href: string;
  ariaLabel: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

export const socialLinks: SocialLinkItem[] = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/hs-global-ai/",
    ariaLabel: "Follow HS Global AI on LinkedIn",
    icon: ({ className = "h-4 w-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v7.6H9.2v-7.6H6.46M7.83 6.25a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28" />
      </svg>
    ),
  },
  {
    name: "X",
    href: "https://x.com/HSGlobalAI",
    ariaLabel: "Follow HS Global AI on X (Twitter)",
    icon: ({ className = "h-3.5 w-3.5" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@hsglobalai",
    ariaLabel: "Subscribe to HS Global AI on YouTube",
    icon: ({ className = "h-4 w-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/hsglobalai/",
    ariaLabel: "Follow HS Global AI on Instagram",
    icon: ({ className = "h-4 w-4" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/hsglobalai/",
    ariaLabel: "Follow HS Global AI on Facebook",
    icon: ({ className = "h-4 w-4" }) => (
      <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14 8h3V4h-3c-3 0-5 2-5 5v2H6v4h3v9h4v-9h3l1-4h-4V9c0-.7.3-1 1-1Z" />
      </svg>
    ),
  },
];
