/** @type {import('next').NextConfig} */
const nextConfig = {
  exportPathMap: async function () {
    return {
      "/": { page: `/1` },
    };
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://movies-41c89-default-rtdb.firebaseio.com",
  },
  images: {
    domains: ["i.pinimg.com"],
  },
};

export default nextConfig;
