/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'ecommerce-website-liart-five.vercel.app',
        },
      ],
    },
  };
  
  export default nextConfig;
  