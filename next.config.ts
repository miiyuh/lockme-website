import type {NextConfig} from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'picsum.photos',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'lockme.my', // Added LockMe logo domain
        port: '',
        pathname: '/**',
      },
      // Add other domains if used for images, e.g., your actual OG image domain
      // For example, if your OG images are hosted on the same domain:
      // {
      //   protocol: 'https',
      //   hostname: 'lockme.example.com', // Replace with your actual domain
      //   port: '',
      //   pathname: '/**',
      // },
    ],
  },
};

export default nextConfig;
