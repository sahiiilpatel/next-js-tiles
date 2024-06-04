/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
  },
};

export default nextConfig;
