import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    webVitalsAttribution: ['CLS', 'LCP', 'FID'],
  },
};

export default nextConfig;
