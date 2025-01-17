/** @type {import('next').NextConfig} */
const nextConfig = {
  
  // Remove output: 'export'
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: ['picsum.photos'],
  },
};

module.exports = nextConfig;