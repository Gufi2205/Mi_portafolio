import type { NextConfig } from "next";

const config: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    eslint: {
        ignoreDuringBuilds: true,
    }
    // Añadir esta configuración para manejar mejor los errores de renderiza
};

export default config;

