---
title: CHANGELOG 规范
categories:
    - 工程规范
tags:
    - 工程规范
author:
    name: 澄怀
    link: https://github.com/encode-studio-fe/fe-spec
---

# CHANGELOG 规范

## 前言

作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 `Changelog`）吗？

1. 如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 `Changelog` `是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog` 可以帮助他们了解新版本有哪些变化。
2. 如果你在开发一个业务应用，那么 `Changelog` 不是必需的。然而提供一个 `Changelog` 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。

[Git 规范](./git.md) 已经对 `Git` 提交日志的格式进行了约束，为何还要再约束 `Changelog` 的格式呢？

1. 即便是约束了 `Git log` 的格式，也无法直接将 `Git log` 导出一个良好的 `Changelog`。因为 `Changelog` 中描述的内容需要更加精炼和归纳，对信息降噪处理等等，因此手写 `Changelog` 仍然是更好的选择。
2. 不管是手写还是自动生成，`Changelog` 的格式都不能直接照搬 `Git log` 的格式。这两者的区别与联系同在。

## 1. 文件

- 1.1.【强制】`Changelog` 文件必须取名为 `CHANGELOG.md`

  使用大写来表明本文件的重要性，相当于是项目仓库元信息的一部分。

  ```markdown
  <!-- bad -->
  changelog.md
  Changelog.md
  ChangeLog.md
  CHANGELOG.MD

  <!-- good -->
  CHANGELOG.md
  ```

- 1.2.【强制】Changelog 文件必须是使用标准 Markdown 语法的文本文件，并以 `.md` 作为后缀

  ```markdown
  <!-- bad -->
  CHANGELOG.txt
  CHANGELOG.docx

  <!-- good -->
  CHANGELOG.md
  ```

- 1.3.【强制】`Changelog` 文件必须存放在项目根目录下，和 `README.md`、`CONTRIBUTING.md` 等并列

## 2. 格式

规约推荐的标准 `Changelog` 格式如下：

```markdown
# 更新日志

## [<version>](<version-diff-url>) (<date>)

### <type>

* <desc>
* <desc>

### <type>

* <desc>
* <desc>
```

详细规则如下：

- 2.1.【强制】文章标题使用「更新日志」作为固定文案。国际化场景使用英文「Change Log」作为固定文案

  ```markdown
  <!-- bad -->
  # 修改日志
  # ChangeLog

  <!-- good -->
  # 更新日志
  # Change Log
  ```

- 2.2【强制】`Changelog` 内容按版本号降序排列，最新版本放在最前面

  ```markdown
  <!-- bad -->
  ## 1.0.0
  ## 2.0.0

  <!-- good -->
  ## 2.0.0
  ## 1.0.0
  ```

- 2.3.【强制】版本号 `version` 需遵循 [SemVer 规范](https://semver.org/lang/zh-CN/)

  ```markdown
  <!-- bad -->
  ## 2.0
  ## 1.0.a
  ## 0.a.1
  ## 0.0.0.1

  <!-- good -->
  ## 2.0.0
  ## 1.0.0
  ## 1.0.0-rc.1
  ## 1.0.0-beta.2
  ## 1.0.0-beta.1
  ## 1.0.0-beta
  ## 1.0.0-alpha.beta
  ## 1.0.0-alpha.1
  ## 1.0.0-alpha
  ```

- 2.4.【推荐】版本号增加一个超链接，指向当前版本和上一个版本之间的 `diff

  ```markdown
  <!-- bad -->
  ## 2.0.0

  <!-- good -->
  ## [2.0.0](https://version-diff-url)
  ```

- 2.5.【强制】更新日期 `date` 采用 `yyyy-MM-dd` 格式

  ```markdown
  <!-- bad -->
  ## [2.0.0](https://version-diff-url) (20200905)
  ## [2.0.0](https://version-diff-url) (2020-9-5)

  <!-- good -->
  ## [2.0.0](https://version-diff-url) (2020-09-05)
  ```

- 2.6.【推荐】更新类型 `type` 与 Git message header 中的 [`type`](./1.git.md#1.3.1-type) 相关联，可以不一一对应

  `type` 用以说明更新的类型，推荐值如下：

  - 新增（`Features`）：新增功能。
  - 修复（`Bug Fixes`）：修复 bug。
  - 文档（`Documentation`）：文档新增或者修改。
  - 变更（`Changed`）：对于某些已存在功能所发生的逻辑变化。
  - 优化（`Refactored`）：性能或结构上的优化，并未带来功能的逻辑变化。
  - 即将删除（`Deprecation Warnings`）：即将废弃功能。
  - 删除（`Removed`）：已删除的功能。
  - 重大变更（`Breaking Changes`）：破坏性变动。

- 2.7.【推荐】更新描述 `desc` 内容需要注意以下几点：

  1. 使用完整的句子。即在标点方面遵循一般的文档格式规约；如果使用英语，则句首大写。
  2. 时态方面使用一般现在时，不要用过去时态。虽然查看 Changelog 时，Changelog 内容本身都发生在过去，然而使用现在时的时态更简洁明确，并且更易达成一致性。
  3. 句式使用祈使句式。即一般情况不要增加主语。因为在绝大情况下，主语都是作者「我」。
  4. 注明修复的问题。如有提过 Issue，则在句尾增加 Issue 的 ID 和链接。

## 样本示例

  ```markdown
  # 更新日志

  ## [4.6.0](https://github.com/ant-design/ant-design/compare/4.5.4...4.6.0) (2020-08-23)

  ### 新增

  - 新增图片组件 Image。
  - Table 新增 `sticky` 属性以支持固定表头和滚动条。[#25939](https://github.com/ant-design/ant-design/pull/25939)

  ### 修复

  - 修复 Pagination 字体相关样式问题。[#26230](https://github.com/ant-design/ant-design/pull/26230)
  - 修复 Space `children` 有时会重新渲染的问题。[#26219](https://github.com/ant-design/ant-design/pull/26219)

  ### 优化

  - 用 hooks 重构 Upload。

  ## [4.5.4](https://github.com/ant-design/ant-design/compare/4.5.3...4.5.4)(2020-08-12)

  ### 新增

  - 新增 `@badge-color` Less 变量。

  ### 修复

  - 修复 Form.Item 在 `hidden` 时引用 Less 样式时失效的问题。[#26152](https://github.com/ant-design/ant-design/pull/26152)

  ```

## 参考资料

- [Keep a Changelog](https://keepachangelog.com/)
- [Conventional Changelog](https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md)
- [Angular Changelog](https://github.com/angular/angular.js/blob/master/CHANGELOG.md)
- [Ant Design Changelog](https://github.com/ant-design/ant-design/blob/master/CHANGELOG.zh-CN.md)