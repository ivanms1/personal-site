// next.config.js
const withImages = require('next-images');
console.log(withImages().webpack, 'herer');

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
  webpackDevMiddleware: (config) => {
    return config;
  },
});
