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
    ];
  },
};

export default nextConfig;
