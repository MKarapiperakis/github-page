/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: "/doc",
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
