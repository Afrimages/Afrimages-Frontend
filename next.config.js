/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "webunwto.s3.eu-west-1.amazonaws.com",
      },
    ],
  },
};

module.exports = nextConfig;
