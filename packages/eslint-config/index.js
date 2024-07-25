/*
 * @Author: gaoxu Gaoxu13167316938@163.com
 * @Date: 2024-07-23 22:51:34
 * @LastEditors: gaoxu Gaoxu13167316938@163.com
 * @LastEditTime: 2024-07-25 16:44:52
 * @FilePath: \engineeringRules\packages\eslint-config\index.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
