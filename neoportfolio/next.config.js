/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Ensure this line is included for static export
  reactStrictMode: true,
  swcMinify: true,
};

module.exports = nextConfig;
