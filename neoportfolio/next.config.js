/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure this line is included for static export
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;