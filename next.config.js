/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: 'build',
  reactStrictMode: true,
  images: {
    domains: ['images.unsplash.com', 'images.pexels.com'],
  },

  // sassOptions: {
  //   includePaths: [path.join(__dirname, 'styles')],
  //   sourceMap: true,
  // },
  productionBrowserSourceMaps: true,
};

module.exports = nextConfig;
