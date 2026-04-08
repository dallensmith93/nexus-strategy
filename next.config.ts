import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  turbopack: {
    // Avoid picking a parent lockfile as workspace root when multiple exist.
    root: path.resolve(process.cwd()),
  },
};

export default nextConfig;
