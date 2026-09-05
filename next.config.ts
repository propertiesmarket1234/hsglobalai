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
    ];
  },
};

export default nextConfig;
