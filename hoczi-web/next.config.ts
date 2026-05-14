import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["tefiglobal.com", "d1y3v0ou093g3m.cloudfront.net"]
  },
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.hoczi.com' }],
        destination: 'https://hoczi.com/:path*',
        permanent: true,
      },
    ];
  },



};

export default nextConfig;
