import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  /*Because we will be loading images from external URL's using image component
  Next.js supplies, those domains */
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "cdn.sanity.io" },
      { protocol: "https", hostname: "placehld.co" },
    ],
  },
};

export default nextConfig;
