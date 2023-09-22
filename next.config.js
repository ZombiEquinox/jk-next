/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: ["jk-docs.s3.us-east-2.amazonaws.com", "images.ctfassets.net"],
  },
};

module.exports = nextConfig