/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Advertencia en lugar de error durante el build
    ignoreDuringBuilds: true,
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.jsdelivr.net',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.vectorlogo.zone',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
        pathname: '**',
      }
    ],
  },
  // Optimizaciones para producción
  swcMinify: true,
  reactStrictMode: true,
};

module.exports = nextConfig;