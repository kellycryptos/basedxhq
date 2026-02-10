/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Enable static exports
  trailingSlash: true, // Add trailing slashes to URLs
  images: {
    unoptimized: true, // Disable image optimization for static exports
  },
  env: {
    SITE_URL: process.env.SITE_URL || 'https://basedxhq.vercel.app',
  },
};

module.exports = nextConfig;