import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    esmExternals: "loose",
    serverComponentsExternalPackages: ["@zerodev/permissions", "@zerodev/sdk"],
  },
};

export default nextConfig;
