import { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",       // allows static export
  trailingSlash: true,    // optional, ensures all URLs end with / (good for static hosting)
};

export default nextConfig;
