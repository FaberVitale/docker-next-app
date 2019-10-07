const {
  createDefineWebpackPluginConfig,
  targets,
} = require('./config/createDefinePluginConfig');

const envs = createDefineWebpackPluginConfig(
  {
    buildId: `dev-${new Date().toISOString()}`,
    isServer: false,
    dev: true,
  },
  { target: targets.babel },
);

module.exports = {
  presets: ['next/babel'],
  env: {
    test: {
      plugins: [['transform-define', envs]],
    },
  },
  overrides: [
    {
      include: './app',
      plugins: [
        [
          'module-resolver',
          {
            root: ['./app'],
          },
        ],
      ],
    },
  ],
};
