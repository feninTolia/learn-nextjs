import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: 'avatars.githubusercontent.com',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'lh3.googleusercontent.com',
        port: '',
        protocol: 'https',
      },
      {
        hostname: 'plus.unsplash.com',
        port: '',
        protocol: 'https',
      },
    ],
  },
};

export default nextConfig;
