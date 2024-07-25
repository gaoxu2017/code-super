/*
 * @Author: gaoxu Gaoxu13167316938@163.com
 * @Date: 2024-07-25 11:38:36
 * @LastEditors: gaoxu Gaoxu13167316938@163.com
 * @LastEditTime: 2024-07-25 17:40:25
 * @FilePath: \engineeringRules\packages\eslint-config\vue.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: ['./rules/vue', './index'].map(require.resolve),
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
};
