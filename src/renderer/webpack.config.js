module.exports = function(config) {
  // Webpack configuration to modify for Renderer process
  const webpackRendererConfig = {
    stats: 'errors-warnings',
  };

  return Object.assign(config, webpackRendererConfig);
};
