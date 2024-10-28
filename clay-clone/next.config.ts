import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/61477f2c24a826836f969afe/**', 
        search: '',
      },
      {
        protocol: 'https',
        hostname: 'cdn.prod.website-files.com',
        port: '',
        pathname: '/61702af2e3966e09c4101538/**', 
        search: '',
      },
    ],
  },
};

export default nextConfig;
