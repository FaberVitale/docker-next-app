const path = require('path');
const { BUILD_DIR, CLIENT_DIR } = require('./config/utils/paths');
const {
  createDefineWebpackPluginConfig,
  targets,
} = require('./config/createDefinePluginConfig');
const createWithBundleAnalyzer = require('@next/bundle-analyzer');

const withBundleAnalyzer = createWithBundleAnalyzer({
  enabled: process.env.BUNDLE_ANALYZER === 'true',
});

module.exports = withBundleAnalyzer({
  distDir: path.relative(CLIENT_DIR, path.join(BUILD_DIR, '.next')),

  webpack(config, buildContext) {
    const { webpack } = buildContext;

    config.plugins.push(
      new webpack.DefinePlugin(createDefineWebpackPluginConfig(buildContext), {
        target: targets.webpack,
      }),
    );

    config.resolve.modules.push(CLIENT_DIR);

    return config;
  },
});
