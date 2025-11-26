/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export', // important for static export
  basePath: isProd ? '/nextjs-portfolio' : '',
  assetPrefix: isProd ? '/nextjs-portfolio/' : '',
};

module.exports = nextConfig;
