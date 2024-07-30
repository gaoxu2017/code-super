# code-super-lint-cli

`code-super-lint-cli` 是[ 前端编码规范工程化](https://gaoxu2017.github.io/code-super/)的配套 Lint 工具，可以为项目一键接入规约、一键扫描和修复规约问题，保障项目的编码规范和代码质量。

## CLI 使用

### 安装

在终端执行：

```bash
npm install code-super-lint-cli -g
```

安装完成后，可执行 `code-super-lint-cli -h` 以验证安装成功。

### 使用

#### `code-super-lint-cli init`：一键接入

在项目根目录执行 `code-super-lint-cli init`，即可一键接入规约，为项目安装规约 `Lint` 所需的依赖和配置。

具体会做以下事情：

- 安装各种依赖：包括 `Linter` 依赖，如 [ESLint](https://eslint.org/)、[stylelint](https://stylelint.io/)、[commitlint](https://commitlint.js.org/#/)、[markdownlint](https://github.com/DavidAnson/markdownlint) 等；配置依赖，如 [code-eslint-config-super](https://www.npmjs.com/package/code-eslint-config-super)、[stylelint-config-super](https://www.npmjs.com/package/stylelint-config-super)、[commitlint-config-super](https://www.npmjs.com/package/commitlint-config-super)、[markdownlint-config-super](https://www.npmjs.com/package/markdownlint-config-super) 等
- 写入各种配置文件，包括：
  - `.eslintrc.js`、`.eslintignore`：ESLint 配置（继承 `code-eslint-config-super`）及黑名单文件
  - `.stylelintrc.js`、`.stylelintignore`：stylelint 配置（继承 `stylelint-config-super`）及黑名单文件
  - `commitlint.config.js`：commitlint 配置（继承 `commitlint-config-super`）
  - `.markdownlint.json`、`.markdownlintignore`：`markdownlint-config-super` 配置及黑名单文件
  - `.prettierrc.js`：符合规约的 [Prettier 配置](https://prettier.io/docs/en/configuration.html)
  - `.editorconfig`：符合规约的 [editorconfig](https://editorconfig.org/)
  - `.vscode/extensions.json`：写入规约相关的 [VSCode 插件推荐](https://code.visualstudio.com/docs/editor/extension-gallery#_workspace-recommended-extensions)，包括 `ESLint`、`stylelint`、`markdownlint`、`prettier` 等
  - `.vscode/settings.json`：写入规约相关的 [VSCode 设置](https://code.visualstudio.com/docs/getstarted/settings#_settings-file-locations)，设置 `ESLint` 和 `stylelint` 插件的 `validate` 及**保存时自动运行 fix**，如果选择使用 `Prettier`，会同时将 `prettier-vscode` 插件设置为各前端语言的 defaultFormatter，并配置**保存时自动格式化**
  - `code-super-lint-cli.config.js`code-super-lint-cli 包的一些配置，如启用的功能等
- 配置 git commit 卡口：使用 [husky](https://www.npmjs.com/package/husky) 设置代码提交卡口，在 git commit 时会运行 `code-super-lint-cli commit-file-scan` 和 `code-super-lint-cli commit-msg-scan` 分别对提交文件和提交信息进行规约检查。`code-super-lint-cli commit-file-scan` 默认仅对 error 问题卡口，如果你想对 warn 问题也卡口，可以增加 `--strict` 参数以开启严格模式

> 注 1：如果项目已经配置过 ESLint、stylelint 等 Linter，执行 `code-super-lint-cli init` 将会提示存在冲突的依赖和配置，并在得到确认后进行覆盖：
>
> 注 2：如果项目的 .vscode/ 目录被 .gitignore 忽略，可以在拉取项目后单独执行 `code-super-lint-cli init --vscode` 命令写入 `.vscode/extensions.json` 和 `.vscode/settings.json` 配置文件

### API

#### init：初始化

- code-super-lint-cli.init(config)：将项目一键接入规约，效果等同于 `code-super-lint-cli init`

示例：

```js
(await code) -
  super -
  cli -
  lint.init({
    eslintType: 'react',
    enableESLint: true,
    enableStylelint: true,
    enableMarkdownlint: true,
    enablePrettier: true,
    disableNpmInstall: false,
  });
```

config 参数如下：

| 参数               | 类型       | 默认值 | 说明                                                                                                                     |
| ------------------ | ---------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| cwd                | string     | -      | 项目绝对路径                                                                                                             |
| eslintType         | ESLintType | -      | 语言和框架类型，如果不配置，等同于 code-super-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器        |
| enableESLint       | boolean    | true   | 是否启用 ESLint，如果不配置默认值为 true，即默认启用 ESLint                                                              |
| enableStylelint    | boolean    | -      | 是否启用 stylelint，如果不配置，等同于 code-super-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器    |
| enableMarkdownlint | boolean    | -      | 是否启用 markdownlint，如果不配置，等同于 code-super-lint-cli init，控制台会出现选择器，如果配置，控制台就不会出现选择器 |
| enablePrettier     | boolean    | -      | 是否启用 Prettier                                                                                                        |
| disableNpmInstall  | boolean    | false  | 是否禁用自动在初始化完成后安装依赖                                                                                       |

##### ESLintType

- `default`: JavaScript 项目（未使用 React 和 Vue 的 JS 项目）
- `react`: JavaScript + React 项目
- `vue`: JavaScript + Vue 项目
- `typescript/default`: TypeScript 项目（未使用 React 和 Vue 的 TS 项目）
- `typescript/react`: TypeScript + React 项目
- `typescript/vue`: TypeScript + Vue 项目
- `es5`: ES5 及之前版本的 JavaScript 老项目

## 配置

`code-super-lint-cli` 基于一份配置进行扫描（但你也可以零配置使用），支持的配置参数有：

| 参数                | 类型                    | 默认值 | 说明                                                                                           |
| ------------------- | ----------------------- | ------ | ---------------------------------------------------------------------------------------------- |
| enableESLint        | boolean                 | true   | 是否启用 ESLint                                                                                |
| enableStylelint     | boolean                 | true   | 是否启用 stylelint                                                                             |
| enableMarkdownlint  | boolean                 | true   | 是否启用 markdownlint                                                                          |
| enablePrettier      | boolean                 | -      | 是否启用 Prettier                                                                              |
| eslintOptions       | ESLint.Options          | -      | ESLint 配置项，若未设置将使用执行目录下或内置的默认 eslintrc 和 eslintignore 进行扫描          |
| stylelintOptions    | stylelint.LinterOptions | -      | stylelint 配置项，若未设置将使用执行目录下或内置的默认 stylelintrc 和 stylelintignore 进行扫描 |
| markdownlintOptions | markdownlint.Options    | -      | markdownlint 配置项，若未设置将使用执行目录下或内置的默认 markdownlint 配置文件进行扫描        |

`code-super-lint-cli` 会读取执行目录下的 `code-super-lint-cli.config.js` 作为配置文件。`code-super-lint-cli init` 会在执行目录下新增如下的 `code-super-lint-cli.config.js` 文件：

```js
module.exports = {
  enableESLint: true,
  enableStylelint: true,
  enableMarkdownlint: true,
  enablePrettier: true,
};
```
