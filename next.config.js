/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  nextConfig,
  images: {
    domains: ['links.papareact.com', 'platform-lookaside.fbsbsx.com', 'firebasesstorage.googleapis.com'],
  },
}

/* Hey Dellano, to use external links for images with the NextJS Image component, the external sites have to be whitelisted */