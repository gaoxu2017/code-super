(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{310:function(t,a,n){"use strict";n.r(a);var s=n(14),e=Object(s.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"changelog-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#changelog-规范"}},[t._v("#")]),t._v(" CHANGELOG 规范")]),t._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" 前言")]),t._v(" "),a("p",[t._v("作为一个开发者，我必须为我的项目维护一个更新日志（以下简称 "),a("code",[t._v("Changelog")]),t._v("）吗？")]),t._v(" "),a("ol",[a("li",[t._v("如果你在维护一个开源项目，或者公司内部的底层技术产品，那么提供一个 "),a("code",[t._v("Changelog")]),t._v(" "),a("code",[t._v("是必需的。开发者用户很可能需要从一个低版本升级到最新版，Changelog")]),t._v(" 可以帮助他们了解新版本有哪些变化。")]),t._v(" "),a("li",[t._v("如果你在开发一个业务应用，那么 "),a("code",[t._v("Changelog")]),t._v(" 不是必需的。然而提供一个 "),a("code",[t._v("Changelog")]),t._v(" 会更好，因为其他协作者或是交接方能更直观地看到业务逻辑的演变。")])]),t._v(" "),a("p",[a("RouterLink",{attrs:{to:"/engineering/git.html"}},[t._v("Git 规范")]),t._v(" 已经对 "),a("code",[t._v("Git")]),t._v(" 提交日志的格式进行了约束，为何还要再约束 "),a("code",[t._v("Changelog")]),t._v(" 的格式呢？")],1),t._v(" "),a("ol",[a("li",[t._v("即便是约束了 "),a("code",[t._v("Git log")]),t._v(" 的格式，也无法直接将 "),a("code",[t._v("Git log")]),t._v(" 导出一个良好的 "),a("code",[t._v("Changelog")]),t._v("。因为 "),a("code",[t._v("Changelog")]),t._v(" 中描述的内容需要更加精炼和归纳，对信息降噪处理等等，因此手写 "),a("code",[t._v("Changelog")]),t._v(" 仍然是更好的选择。")]),t._v(" "),a("li",[t._v("不管是手写还是自动生成，"),a("code",[t._v("Changelog")]),t._v(" 的格式都不能直接照搬 "),a("code",[t._v("Git log")]),t._v(" 的格式。这两者的区别与联系同在。")])]),t._v(" "),a("h2",{attrs:{id:"_1-文件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-文件"}},[t._v("#")]),t._v(" 1. 文件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("1.1.【强制】"),a("code",[t._v("Changelog")]),t._v(" 文件必须取名为 "),a("code",[t._v("CHANGELOG.md")])]),t._v(" "),a("p",[t._v("使用大写来表明本文件的重要性，相当于是项目仓库元信息的一部分。")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\nchangelog.md\nChangelog.md\nChangeLog.md\nCHANGELOG.MD\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\nCHANGELOG.md\n")])])])]),t._v(" "),a("li",[a("p",[t._v("1.2.【强制】Changelog 文件必须是使用标准 Markdown 语法的文本文件，并以 "),a("code",[t._v(".md")]),t._v(" 作为后缀")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\nCHANGELOG.txt\nCHANGELOG.docx\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\nCHANGELOG.md\n")])])])]),t._v(" "),a("li",[a("p",[t._v("1.3.【强制】"),a("code",[t._v("Changelog")]),t._v(" 文件必须存放在项目根目录下，和 "),a("code",[t._v("README.md")]),t._v("、"),a("code",[t._v("CONTRIBUTING.md")]),t._v(" 等并列")])])]),t._v(" "),a("h2",{attrs:{id:"_2-格式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-格式"}},[t._v("#")]),t._v(" 2. 格式")]),t._v(" "),a("p",[t._v("规约推荐的标准 "),a("code",[t._v("Changelog")]),t._v(" 格式如下：")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 更新日志")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" [<version>](<version-diff-url>) (<date>)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" <type>")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" <type>")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("详细规则如下：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("2.1.【强制】文章标题使用「更新日志」作为固定文案。国际化场景使用英文「Change Log」作为固定文案")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 修改日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" ChangeLog")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 更新日志")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" Change Log")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("2.2【强制】"),a("code",[t._v("Changelog")]),t._v(" 内容按版本号降序排列，最新版本放在最前面")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 2.0.0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 2.0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("2.3.【强制】版本号 "),a("code",[t._v("version")]),t._v(" 需遵循 "),a("a",{attrs:{href:"https://semver.org/lang/zh-CN/",target:"_blank",rel:"noopener noreferrer"}},[t._v("SemVer 规范"),a("OutboundLink")],1)]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 2.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 0.a.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 0.0.0.1")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 2.0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0-rc.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0-beta.2")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0-beta.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0-beta")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0-alpha.beta")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0-alpha.1")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 1.0.0-alpha")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("2.4.【推荐】版本号增加一个超链接，指向当前版本和上一个版本之间的 `diff")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" 2.0.0")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" [2.0.0](https://version-diff-url)")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("2.5.【强制】更新日期 "),a("code",[t._v("date")]),t._v(" 采用 "),a("code",[t._v("yyyy-MM-dd")]),t._v(" 格式")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- bad --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" [2.0.0](https://version-diff-url) (20200905)")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" [2.0.0](https://version-diff-url) (2020-9-5)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- good --\x3e")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" [2.0.0](https://version-diff-url) (2020-09-05)")]),t._v("\n")])])])]),t._v(" "),a("li",[a("p",[t._v("2.6.【推荐】更新类型 "),a("code",[t._v("type")]),t._v(" 与 Git message header 中的 "),a("RouterLink",{attrs:{to:"/engineering/1.git.html#1.3.1-type"}},[a("code",[t._v("type")])]),t._v(" 相关联，可以不一一对应")],1),t._v(" "),a("p",[a("code",[t._v("type")]),t._v(" 用以说明更新的类型，推荐值如下：")]),t._v(" "),a("ul",[a("li",[t._v("新增（"),a("code",[t._v("Features")]),t._v("）：新增功能。")]),t._v(" "),a("li",[t._v("修复（"),a("code",[t._v("Bug Fixes")]),t._v("）：修复 bug。")]),t._v(" "),a("li",[t._v("文档（"),a("code",[t._v("Documentation")]),t._v("）：文档新增或者修改。")]),t._v(" "),a("li",[t._v("变更（"),a("code",[t._v("Changed")]),t._v("）：对于某些已存在功能所发生的逻辑变化。")]),t._v(" "),a("li",[t._v("优化（"),a("code",[t._v("Refactored")]),t._v("）：性能或结构上的优化，并未带来功能的逻辑变化。")]),t._v(" "),a("li",[t._v("即将删除（"),a("code",[t._v("Deprecation Warnings")]),t._v("）：即将废弃功能。")]),t._v(" "),a("li",[t._v("删除（"),a("code",[t._v("Removed")]),t._v("）：已删除的功能。")]),t._v(" "),a("li",[t._v("重大变更（"),a("code",[t._v("Breaking Changes")]),t._v("）：破坏性变动。")])])]),t._v(" "),a("li",[a("p",[t._v("2.7.【推荐】更新描述 "),a("code",[t._v("desc")]),t._v(" 内容需要注意以下几点：")]),t._v(" "),a("ol",[a("li",[t._v("使用完整的句子。即在标点方面遵循一般的文档格式规约；如果使用英语，则句首大写。")]),t._v(" "),a("li",[t._v("时态方面使用一般现在时，不要用过去时态。虽然查看 Changelog 时，Changelog 内容本身都发生在过去，然而使用现在时的时态更简洁明确，并且更易达成一致性。")]),t._v(" "),a("li",[t._v("句式使用祈使句式。即一般情况不要增加主语。因为在绝大情况下，主语都是作者「我」。")]),t._v(" "),a("li",[t._v("注明修复的问题。如有提过 Issue，则在句尾增加 Issue 的 ID 和链接。")])])])]),t._v(" "),a("h2",{attrs:{id:"样本示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#样本示例"}},[t._v("#")]),t._v(" 样本示例")]),t._v(" "),a("div",{staticClass:"language-markdown extra-class"},[a("pre",{pre:!0,attrs:{class:"language-markdown"}},[a("code",[a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("#")]),t._v(" 更新日志")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" [4.6.0](https://github.com/ant-design/ant-design/compare/4.5.4...4.6.0) (2020-08-23)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 新增")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 新增图片组件 Image。\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" Table 新增 "),a("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`sticky`")]),t._v(" 属性以支持固定表头和滚动条。"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("#25939")]),t._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("https://github.com/ant-design/ant-design/pull/25939")]),t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 修复")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 修复 Pagination 字体相关样式问题。"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("#26230")]),t._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("https://github.com/ant-design/ant-design/pull/26230")]),t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 修复 Space "),a("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`children`")]),t._v(" 有时会重新渲染的问题。"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("#26219")]),t._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("https://github.com/ant-design/ant-design/pull/26219")]),t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 优化")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 用 hooks 重构 Upload。\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("##")]),t._v(" [4.5.4](https://github.com/ant-design/ant-design/compare/4.5.3...4.5.4)(2020-08-12)")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 新增")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 新增 "),a("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`@badge-color`")]),t._v(" Less 变量。\n\n"),a("span",{pre:!0,attrs:{class:"token title important"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("###")]),t._v(" 修复")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token list punctuation"}},[t._v("-")]),t._v(" 修复 Form.Item 在 "),a("span",{pre:!0,attrs:{class:"token code-snippet code keyword"}},[t._v("`hidden`")]),t._v(" 时引用 Less 样式时失效的问题。"),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("["),a("span",{pre:!0,attrs:{class:"token content"}},[t._v("#26152")]),t._v("]("),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("https://github.com/ant-design/ant-design/pull/26152")]),t._v(")")]),t._v("\n\n")])])]),a("h2",{attrs:{id:"参考资料"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://keepachangelog.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Keep a Changelog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/conventional-changelog/conventional-changelog/blob/master/packages/conventional-changelog/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Conventional Changelog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/angular/angular.js/blob/master/CHANGELOG.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular Changelog"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://github.com/ant-design/ant-design/blob/master/CHANGELOG.zh-CN.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ant Design Changelog"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);