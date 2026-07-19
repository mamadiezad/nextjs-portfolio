/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  basePath: '/nextjs-portfolio',
  assetPrefix: '/nextjs-portfolio/',
};

module.exports = nextConfig;
