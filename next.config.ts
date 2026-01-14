/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/starter-react',
  assetPrefix: '/starter-react/',
};

module.exports = nextConfig;
