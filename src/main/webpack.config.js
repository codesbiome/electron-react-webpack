module.exports = function(config) {
  // Webpack configuration to modify for main process
  const webpackMainConfig = {
    stats: 'errors-warnings',
  };

  return Object.assign(config, webpackMainConfig);
};
