/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: "export",
  images: {
    unoptimized: true,
  },
  env: {
    GOOGLE_ANALYTICS: process.env.GOOGLE_ANALYTICS,
    GMAIL_PASS: process.env.GMAIL_PASS,
    GMAIL_USER: process.env.GMAIL_USER,
  },
};

export default nextConfig;
