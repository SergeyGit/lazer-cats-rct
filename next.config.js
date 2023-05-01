/** @type {import('next').NextConfig} */
const nextConfig = async () => {
  return {
    reactStrictMode: true,
    i18n: {
      // These are all the locales you want to support in
      // your application
      locales: ['en-us', 'ua-ua'],

      // This is the default locale you want to be used when visiting
      // a non-locale prefixed path e.g. `/hello`
      defaultLocale: 'ua-ua',
    },
    publicRuntimeConfig: {
      INST_USER: process.env.INST_USER,
      INST_ACCESS: process.env.INST_ACCESS,
    },
    images: {
      domains: ['scontent.cdninstagram.com'],
    },
  };
};

module.exports = nextConfig;
