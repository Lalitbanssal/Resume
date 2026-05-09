/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Add this block to bypass linting during Docker builds
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;