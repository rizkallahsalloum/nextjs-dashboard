/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    sourceMap: true,
  },
  module.exports = {
    optimizeFonts: false,
}
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
