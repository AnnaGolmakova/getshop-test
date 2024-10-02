/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

if (process.env.NODE_ENV === "production") {
  Object.assign(nextConfig, {
    output: "export",
    distDir: "dist",
    assetPrefix: "/getshop-test/",
    basePath: "/getshop-test",
    images: {
      loader: "custom",
      loaderFile: "./image-loader.js",
    },
  });
}

export default nextConfig;
