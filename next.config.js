/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      { source: "/", destination: "/s/a/spartan", permanent: false },
    ];
  },
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "c.animaapp.com" },
      { protocol: "https", hostname: "cdn.shopify.com" },
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
};

module.exports = nextConfig;
