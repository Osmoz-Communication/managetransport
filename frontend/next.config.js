/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    optimizePackageImports: ['@fortawesome/free-solid-svg-icons', 'framer-motion', 'aos'],
    webpackBuildWorker: true,
    parallelServerCompiles: true,
  },
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'managetransport.fr',
      },
    ],
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/fr',
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/images/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
  webpack: (config, { dev, isServer }) => {
    // Optimisations webpack
    if (!dev && !isServer) {
      // Tree shaking plus agressif
      config.optimization.usedExports = true;
      config.optimization.sideEffects = false;
      
      // Optimisation des chunks
      config.optimization.splitChunks = {
        chunks: 'all',
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
            priority: 10,
          },
          animations: {
            test: /[\\/]node_modules[\\/](framer-motion|aos)[\\/]/,
            name: 'animations',
            chunks: 'all',
            priority: 20,
          },
          icons: {
            test: /[\\/]node_modules[\\/]@fortawesome[\\/]/,
            name: 'icons',
            chunks: 'all',
            priority: 20,
          },
        },
      };
    }
    
    return config;
  },
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};

module.exports = nextConfig; 