import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // If your repository is NOT named "username.github.io", uncomment and set the basePath:
  // basePath: '/your-repo-name',
  // trailingSlash: true,
};

export default nextConfig;
