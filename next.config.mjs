// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['cdn.sanity.io'], // Allow this domain for images
    },
  };
  
  export default nextConfig; // Use export default instead of module.exports
  