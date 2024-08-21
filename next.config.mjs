/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/movies/1",
        permanent: true,
      },
    ];
  },
  env: {
    NEXT_PUBLIC_API_URL: "https://movies-41c89-default-rtdb.firebaseio.com",
  },
  images: {
    domains: ["i.pinimg.com"],
  },
};

export default nextConfig;
