/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/2048-in-react",
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
