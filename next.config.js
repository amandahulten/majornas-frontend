/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.sanity.io"],
  },
  i18n: {
    locales: ["sv-SE"],
    defaultLocale: "sv-SE",
  },
};

module.exports = nextConfig;
