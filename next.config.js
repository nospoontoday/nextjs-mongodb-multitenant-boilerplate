/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  webpackDevMiddleware: config => {
    if(process.env.NODE_ENV === 'development') {
      // Only enable polling in development
      config.watchOptions = {
        poll: 1000, // Check for changes every second
        aggregateTimeout: 300, // delay before rebuilding
      };
    }
    return config;
  },
  images: {
    domains: [
      "res.cloudinary.com",
      "abs.twimg.com",
      "pbs.twimg.com",
      "avatars.githubusercontent.com",
    ],
  },
  output: process.env.NODE_ENV === 'production' ? 'standalone' : '',
  reactStrictMode: true,
  swcMinify: false, // Required to fix: https://nextjs.org/docs/messages/failed-loading-swc
};
