/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Emit directory-style pages (out/ro/index.html) so /ro resolves cleanly on
  // GitHub Pages instead of relying on extensionless .html serving.
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

export default nextConfig;
