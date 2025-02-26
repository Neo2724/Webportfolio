/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  swcMinify: true,
  basePath: '/neoportfolio', // Replace 'Webportfolio' with your repository name
  assetPrefix: '/neoportfolio/', // Replace 'Webportfolio' with your repository name
};

module.exports = nextConfig;