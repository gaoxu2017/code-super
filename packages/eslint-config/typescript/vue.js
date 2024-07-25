/*
 * @Author: gaoxu Gaoxu13167316938@163.com
 * @Date: 2024-07-25 15:01:43
 * @LastEditors: gaoxu Gaoxu13167316938@163.com
 * @LastEditTime: 2024-07-25 15:02:05
 * @FilePath: \engineeringRules\packages\eslint-config\typescript\vue.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: [
    './index',
    '../rules/vue',
  ].map(require.resolve),
  parserOptions: {
    // https://github.com/mysticatea/vue-eslint-parser#parseroptionsparser
    parser: '@typescript-eslint/parser',
  },
};
