/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // 🚀 skip Sharp & optimizer, way faster builds
    remotePatterns: [
      {
        protocol: "https",
        hostname: "greensite-rouge.vercel.app",
      },
    ],
  },
  output: "standalone", // leaner deployment bundle
  // Optional: skip checks in Vercel builds (use only if you rely on local CI/IDE)
  // eslint: { ignoreDuringBuilds: true },
  // typescript: { ignoreBuildErrors: true },
};

module.exports = nextConfig;
