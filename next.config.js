/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  i18n,
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tailwindui.com','images.unsplash.com'],
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
}

module.exports = nextConfig;
