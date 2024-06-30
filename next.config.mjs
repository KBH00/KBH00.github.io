/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Enable static exports for the App Router.
   *
   */
  output: "export",

  /**
   * Set base path. This is usually the slug of your repository.
   *
   */
  basePath: "/KBH00.github.io",

  /**
   * Disable server-based image optimization. Next.js does not support
   * dynamic features with static exports.
   *
   */
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
