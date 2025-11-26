/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  output: 'export',          // enables static HTML export
  basePath: isProd ? '/nextjs-portfolio' : '',
  assetPrefix: isProd ? '/nextjs-portfolio/' : '',
};

module.exports = nextConfig;
