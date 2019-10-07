const {
  createDefineWebpackPluginConfig,
  targets,
} = require('./config/createDefinePluginConfig');

const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  plugins: ['@typescript-eslint', 'react'],
  extends: [
    'eslint:recommended',
    'react-app',
    'plugin:prettier/recommended',
    'plugin:import/errors',
  ],
  env: {
    node: true,
    jest: true,
    es6: true,
  },
  globals: {
    ...createDefineWebpackPluginConfig(
      { buildId: 'eslint', isServer: false, dev },
      { target: targets.eslint },
    ),
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', 'app'],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    'no-eval': 2,
    'no-with': 2,
    'no-debugger': 2,
    'no-use-before-define': 2,
    'no-unused-expressions': 2,
    'comma-dangle': [2, 'always-multiline'],
    'arrow-parens': 0,
    'import/newline-after-import': 2,
    'import/no-unresolved': [
      2,
      {
        commonjs: true,
      },
    ],
    'no-shadow': 2,
    'import/no-self-import': 2,
    'react/button-has-type': 2,
  },
};
