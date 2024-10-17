/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lphbzyzalwcxbdijqkhc.supabase.co",
        port: "",
        pathname: "/storage/v1/object/public/products-images/**",
      },
    ],
  },
};

export default nextConfig;
