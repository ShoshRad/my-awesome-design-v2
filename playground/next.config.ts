import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/my-awesome-design',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
