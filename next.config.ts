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
        destination: "/products/dihuava/avatar-customization",
        permanent: true,
      },
      {
        source: "/platform/document-intelligence",
        destination: "/products/dihuava/document-intelligence",
        permanent: true,
      },
      {
        source: "/platform/multilingual-support",
        destination: "/products/dihuava/multilingual-support",
        permanent: true,
      },
      {
        source: "/platform/persona-management",
        destination: "/products/dihuava/persona-management",
        permanent: true,
      },
      {
        source: "/platform/ai-product-catalog",
        destination: "/products/dihuava/ai-product-catalog",
        permanent: true,
      },
      {
        source: "/platform/:slug*",
        destination: "/products/dihuava/:slug*",
        permanent: true,
      },
      {
        source: "/platform",
        destination: "/products/dihuava",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
