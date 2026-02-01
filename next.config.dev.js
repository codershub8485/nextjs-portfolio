/** @type {import('next').NextConfig} */

const nextConfig = {
  // Development configuration - no basePath for local development
  // Turbopack configuration
  turbopack: {
    // Empty config to silence the warning
  },
  
  // Explicitly disable PWA features in development
  experimental: {
    forceSwcTransforms: true,
  },
  
  // Webpack configuration to prevent service worker issues
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Prevent service worker registration in development
      config.resolve.alias = {
        ...config.resolve.alias,
        'next-pwa': false,
      };
    }
    return config;
  },
};

module.exports = nextConfig;
