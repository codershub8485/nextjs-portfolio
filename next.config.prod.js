/** @type {import('next').NextConfig} */

const nextConfig = {
  output: 'export',
  basePath: '/nextjs-portfolio',
  assetPrefix: '/nextjs-portfolio/',
  
  // Turbopack configuration
  turbopack: {
    // Empty config to silence the warning
  },
};

module.exports = nextConfig;
