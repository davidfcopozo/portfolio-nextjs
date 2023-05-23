/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "https://www.davidfrancisco.dev/",
      "davidfrancisco.dev",
      "portafolio-eta-ten.vercel.app",
    ],
  },
  output: "standalone",
  reactStrictMode: false,
};

module.exports = nextConfig;
