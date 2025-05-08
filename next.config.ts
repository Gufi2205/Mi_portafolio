import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    experimental: {
        optimizeCss: true,
        serverActions: {
            bodySizeLimit: '2mb'
        }
    },
    serverExternalPackages: [],
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    reactStrictMode: true,
    poweredByHeader: false,
};

export default nextConfig;

import React from 'react';

import { useEffect } from 'react';

const nextConfig: NextConfig = {
    images: {
        formats: ['image/avif', 'image/webp'],
        minimumCacheTTL: 60,
    },
    experimental: {
        optimizeCss: true,
        serverActions: {
            bodySizeLimit: '2mb'
        }
    },
    serverExternalPackages: [],
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    reactStrictMode: true,
    poweredByHeader: false,
};

export default nextConfig;
