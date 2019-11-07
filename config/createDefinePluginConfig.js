const invariant = require('invariant');

const targets = Object.freeze({
  webpack: 'webpack',
  babel: 'babel',
  eslint: 'eslint',
});

const DEFAULT_OPTIONS = Object.freeze({
  target: 'webpack',
});

const prepareEnv = (envValue, options) => {
  invariant(options, 'prepareEnv');
  const { target } = options;

  if (target === targets.webpack) {
    return JSON.stringify(envValue);
  }

  return envValue;
};

const createDefineWebpackPluginConfig = (
  { isServer, dev },
  options = DEFAULT_OPTIONS,
) => {
  const buildDate = options.buildDate || new Date().toISOString();

  const target = options.target || DEFAULT_OPTIONS.target;

  invariant(
    typeof targets[target] === 'string',
    `createDefineWebpackPluginConfig: expected valid target, got ${target}`,
  );

  const rawValues = {
    BUILD_DATE: buildDate,
    IS_SSR: isServer,
    IS_DEV: dev,
    IS_PROD: !dev,
  };

  const envValuesKeys = Object.keys(rawValues);

  // https://eslint.org/docs/user-guide/configuring#specifying-globals
  if (target === targets.eslint) {
    return envValuesKeys.reduce((acc, nextKey) => {
      acc[nextKey] = 'readonly';

      return acc;
    }, {});
  }

  return envValuesKeys.reduce((acc, nextKey) => {
    acc[nextKey] = prepareEnv(rawValues[nextKey], options);

    return acc;
  }, {});
};

module.exports = {
  createDefineWebpackPluginConfig,
  targets,
};
