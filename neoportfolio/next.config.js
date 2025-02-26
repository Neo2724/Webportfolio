/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/Webportfolio/neoportfolio', // Adjusted to match the repository and directory structure
  assetPrefix: '/Webportfolio/neoportfolio/', // Adjusted to match the repository and directory structure
};

module.exports = nextConfig;