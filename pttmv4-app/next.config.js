/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["picsum.photos"],
  },
  env: {
    GoogleMapsAPIKey: process.env.GoogleMapsAPIKey,
  },
};

module.exports = nextConfig;
