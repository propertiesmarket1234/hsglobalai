import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  async redirects() {
    return [
      {
        source: "/ai-products",
        destination: "/products",
        permanent: true,
      },
      {
        source: "/platform/avatar-customization",
        destination: "/products/ai-digital-human/avatar-customization",
        permanent: true,
      },
      {
        source: "/platform/document-intelligence",
        destination: "/products/ai-digital-human/document-intelligence",
        permanent: true,
      },
      {
        source: "/platform/multilingual-support",
        destination: "/products/ai-digital-human/multilingual-support",
        permanent: true,
      },
      {
        source: "/platform/persona-management",
        destination: "/products/ai-digital-human/persona-management",
        permanent: true,
      },
      {
        source: "/platform/ai-product-catalog",
        destination: "/products/ai-digital-human/ai-product-catalog",
        permanent: true,
      },
      {
        source: "/platform/:slug*",
        destination: "/products/ai-digital-human/:slug*",
        permanent: true,
      },
      {
        source: "/platform",
        destination: "/products/ai-digital-human",
        permanent: true,
      },
      {
        source: "/products/dihuava/avatar-customization",
        destination: "/products/ai-digital-human/avatar-customization",
        permanent: true,
      },
      {
        source: "/products/dihuava/document-intelligence",
        destination: "/products/ai-digital-human/document-intelligence",
        permanent: true,
      },
      {
        source: "/products/dihuava/multilingual-support",
        destination: "/products/ai-digital-human/multilingual-support",
        permanent: true,
      },
      {
        source: "/products/dihuava/persona-management",
        destination: "/products/ai-digital-human/persona-management",
        permanent: true,
      },
      {
        source: "/products/dihuava/ai-product-catalog",
        destination: "/products/ai-digital-human/ai-product-catalog",
        permanent: true,
      },
      {
        source: "/products/dihuava/:slug*",
        destination: "/products/ai-digital-human/:slug*",
        permanent: true,
      },
      {
        source: "/products/dihuava",
        destination: "/products/ai-digital-human",
        permanent: true,
      },
      // Legacy Core & Hardware Slugs
      {
        source: "/holographic-ai-avatar",
        destination: "/products/holographic-display",
        permanent: true,
      },
      {
        source: "/contact-us",
        destination: "/contact",
        permanent: true,
      },
      {
        source: "/about-us",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/faqs",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/spatial-display",
        destination: "/products/spatial-display",
        permanent: true,
      },
      {
        source: "/digital-human",
        destination: "/products/ai-digital-human",
        permanent: true,
      },
      {
        source: "/use-cases",
        destination: "/industries",
        permanent: true,
      },
      {
        source: "/download-center",
        destination: "/contact/download-center",
        permanent: true,
      },
      {
        source: "/privacy-policy",
        destination: "/privacy",
        permanent: true,
      },
      // Legacy Blog Articles
      {
        source: "/ai-retail-digital-human-avatars",
        destination: "/blog/how-ai-in-retail",
        permanent: true,
      },
      {
        source: "/multilingual-ai-global-business",
        destination: "/blog/multilingual-ai",
        permanent: true,
      },
      {
        source: "/digital-human-avatar-ai",
        destination: "/blog/what-is-a-digital-human-avatar",
        permanent: true,
      },
      {
        source: "/ai-for-business-ai-avatar-2026",
        destination: "/blog/ai-for-business",
        permanent: true,
      },
      {
        source: "/ai-product-catalog-smart-selling",
        destination: "/blog/ai-product-catalogue",
        permanent: true,
      },
      {
        source: "/offline-ai-enterprise-security",
        destination: "/blog/why-100-offline-ai",
        permanent: true,
      },
      {
        source: "/ai-in-healthcare-digital-assistants",
        destination: "/blog/ai-patient-triage-healthcare-guidance",
        permanent: true,
      },
      {
        source: "/ai-business-automation-efficiency",
        destination: "/blog/ai-business-automation",
        permanent: true,
      },
      {
        source: "/edge-ai-vs-cloud-ai-enterprise-applications",
        destination: "/blog/edge-ai-vs-cloud-ai",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
