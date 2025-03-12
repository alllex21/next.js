/** @type {import('next').NextConfig} */
const nextConfig = {
    async rewrites() {
      return [
        {
          source: "/api/auth/login",
          destination: "http://localhost:9000/auth/login",
        },
      ];
    },
  };
  
  module.exports = nextConfig;