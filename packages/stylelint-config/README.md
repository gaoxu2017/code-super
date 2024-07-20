# `stylelint-config-super`

支持配套的 [stylelint 可共享配置](https://stylelint.io/user-guide/configure)

## 安装

首先安装 [stylelint](https://www.npmjs.com/package/stylelint) 和 [stylelint-scss](https://www.npmjs.com/package/stylelint-scss)

```bash

npm install stylelint-scss  stylelint stylelint-config-super --save-dev
```
### 使用

在项目根目录下创建 `.stylelintrc.json` 文件，并添加以下内容：

```json
{
  "extends": "stylelint-config-super"
}
```

#### 配置

本配置文件只是提供了一些常用的规则，可以根据项目需求进行修改。具体规则查看 [stylelint](https://stylelint.io/user-guide/rules)