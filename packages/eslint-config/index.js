module.exports = {
  extends: [
    './rules/base/best-practices.js',
    './rules/base/possible-errors',
    './rules/base/style',
    './rules/base/variables',
    './rules/base/es6',
    './rules/base/strict',
    './rules/imports',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    requireConfigFile: false,
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      globalReturn: false,
      impliedStrict: true,
      jsx: true,
    },
  },
};
