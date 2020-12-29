const withImages = require('next-images');

module.exports = withImages({
  inlineImageLimit: 16384,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(graphql|gql)$/,
      exclude: /node_modules/,
      loader: 'graphql-tag/loader',
    });
    return config;
  },
  images: {
    domains: ['cdn.hashnode.com'],
  },
  webpackDevMiddleware: (config) => {
    return config;
  },
});
