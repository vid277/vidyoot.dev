import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  target: "serverless",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
        port: "",
        pathname: "/**",
      },
    ],
    domains: ["api.microlink.io"],
  },
};

export default nextConfig;
