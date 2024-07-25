/*
 * @Author: gaoxu Gaoxu13167316938@163.com
 * @Date: 2024-07-25 10:25:38
 * @LastEditors: gaoxu Gaoxu13167316938@163.com
 * @LastEditTime: 2024-07-25 11:08:56
 * @FilePath: \engineeringRules\packages\eslint-config\rules\react.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
module.exports = {
  extends: ['./index', './rules/react'].map(require.resolve),
  parserOptions: {
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
};
