/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "3000",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "hiimsteff.com",
        port: "",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
