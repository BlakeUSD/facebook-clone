// module.exports = {
//   nextConfig,
//   images: {
//     domains: ['links.papareact.com', 'platform-lookaside.fbsbx.com', 'firebasestorage.googleapis.com'],
//   },
// }

module.exports = async (phase) => {
  /** @type {import('next').NextConfig} */
  const nextConfig = {
    reactStrictMode: true,
    swcMinify: true
  };
  const defaultConfig = {}

  return withPlugins([], nextConfig)(phase, { defaultConfig });
};