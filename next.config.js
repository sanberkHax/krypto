/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    dangerouslyAllowSVG: true,
    domains: ['www.coingecko.com', 'assets.coingecko.com'],
  },
};

module.exports = nextConfig;
