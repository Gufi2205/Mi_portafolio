/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Advertencia en lugar de error durante el build
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;