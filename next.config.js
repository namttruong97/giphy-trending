/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  env: {
    GIPHY_API_KEY: '2rn2ZyuqLog6iLHxhIImKQA21YK2zmFd',
  },
};

module.exports = nextConfig;
