const webpack = require('webpack');

module.exports = function override(config) {
  if (!config.resolve) config.resolve = {};
  if (!config.resolve.fallback) config.resolve.fallback = {};

  config.resolve.fallback = {
    ...config.resolve.fallback,
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    url: require.resolve('url'),
    buffer: require.resolve('buffer'),
    stream: require.resolve('stream-browserify')
  };

  if (!config.plugins) config.plugins = [];
  config.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: 'process/browser'
    })
  );

  return config;
};



