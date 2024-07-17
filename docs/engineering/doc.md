---
title: 文档规范
categories:
    - 工程规范
tags:
    - 工程规范
author:
    name: 澄怀
    link: https://github.com/encode-studio-fe/fe-spec
---

# 文档 规范

## 前言

在撰写文档的时候如果能遵循一点良好的规约，将能**提升所有人的阅读体验**。

在此，文档的含义非常广泛，可以指代任何供人类阅读的文本材料。包括但不限于：`Readme`、`Changelog`、代码注释、上手指南、`Issue` 说明和`PPT` 分享等。

## 1. 空格

- 1.1.【强制】中英文之间需要增加空格

  ```markdown
  <!-- bad -->
  HTML定义网页的结构与内容，CSS定义其格式与样式，而JavaScript则为网页增加可交互性，创作功能丰富的Web应用。

  <!-- good -->
  HTML 定义网页的结构与内容，CSS 定义其格式与样式，而 JavaScript 则为网页增加可交互性，创作功能丰富的 Web 应用。
  ```

- 1.2.【强制】中英文与数字之间需要增加空格

  ```markdown
  <!-- bad -->
  截至2012年，所有的现代浏览器都完整的支持 ECMAScript5.1，旧版本的浏览器至少支持 ECMAScript3 标准。

  <!-- good -->
  截至 2012 年，所有的现代浏览器都完整的支持 ECMAScript 5.1，旧版本的浏览器至少支持 ECMAScript 3 标准。
  ```

- 1.3.【强制】全角标点与其他字符之间不加空格

  ```markdown
  <!-- bad -->
  不像 UDP， HTTP 是一个不会静默丢失消息的协议。

  <!-- good -->
  不像 UDP，HTTP 是一个不会静默丢失消息的协议。
  ```

- 1.4.【强制】半角标点与其他字符之间需要增加空格

  ```markdown
  <!-- bad -->
  Cookie 主要用于以下三个方面：

  1.会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
  2.个性化设置（如用户自定义设置、主题等）
  3.浏览器行为跟踪（如跟踪分析用户行为等）

  <!-- good -->
  Cookie 主要用于以下三个方面：

  1. 会话状态管理（如用户登录状态、购物车、游戏分数或其它需要记录的信息）
  2. 个性化设置（如用户自定义设置、主题等）
  3. 浏览器行为跟踪（如跟踪分析用户行为等）

  <!-- bad -->
  我+你=世界。

  <!-- good -->
  我 + 你 = 世界。
  ```

- 1.5.【推荐】链接文字前后不需要增加空格

  ```markdown
  <!-- bad -->
  [了解更多](https://developer.mozilla.org/zh-CN/docs/Web) 开发技术相关知识。

  <!-- good -->
  [了解更多](https://developer.mozilla.org/zh-CN/docs/Web)开发技术相关知识。
  ```

## 2. 标点符号

- 2.1.【推荐】正确使用引号

  中文句子内夹用英文句子时，该英文句子用中文双引号标示，保留英文句子内部的英文标点符号，句末使用中文标点。

  ```markdown
  <!-- bad - 英文句子不建议使用英文引号标示 -->
  他写的是 "Hello, world!"。

  <!-- bad - 英文句子不建议使用中文单引号标示 -->
  他写的是‘Hello, world!’。

  <!-- bad - 英文句子内部的标点符号建议保留英文标点符号 -->
  他写的是“Hello，world！”。

  <!-- good -->
  他写的是“Hello, world!”。
  ```

- 2.2.【推荐】正确使用省略号

  中文省略号的形式为“……”（中文输入法下 SHIFT + 6），6 个居中小圆点；英文省略号的形式为“...”，3 个齐线小圆点。

  夹用英文的中文句子里，英文内部的省略使用英文省略号；中文内部的省略使用中文省略号。

  ```markdown
  <!-- bad -->
  省略号是 3 个小圆点...
  省略号是 6 个齐线小圆点......
  省略号是 6 个句号。。。。。。

  <!-- good -->
  省略号是 6 个居中小圆点，占两个全角空格……
  ```

- 2.3.【推荐】正确使用破折号

  中文破折号的形式为“——”，长度相当于两个汉字的长度。

  ```markdown
  <!-- bad - 破折号不推荐使用两个中横线 -->
  第三方框架和库--用来快速构建网站和应用。

  <!-- good -->
  第三方框架和库——用来快速构建网站和应用。
  ```

## 3. 全角和半角

- 3.1.【强制】中文标点符号使用全角

  ```markdown
  <!-- bad - 中文句子冒号未使用全角 -->
  前端框架: React、Vue、Angular。

  <!-- bad - 中文句子内夹用并列的英文单词时使未使用顿号分隔 -->
  前端框架：React, Vue, Angular。

  <!-- good -->
  前端框架：React、Vue、Angular。

  <!-- bad - 中文句子括号未使用全角 -->
  至少熟悉一门非前端的语言(如 Java、PHP、C、C++、Python、Ruby)，并有实践经验！

  <!-- good -->
  至少熟悉一门非前端的语言（如 Java、PHP、C、C++、Python、Ruby），并有实践经验！
  ```

- 3.2.【强制】英文和数字使用半角

  ```markdown
  <!-- bad - 英文和数字不应该使用全角 -->
  该版本正式名称为 ＥＣＭＡＳｃｒｉｐｔ ２０１５，但通常被称为 ＥＣＭＡＳｃｒｉｐｔ ６ 或者 ＥＳ６。

  <!-- good -->
  该版本正式名称为 ECMAScript 2015，但通常被称为 ECMAScript 6 或者 ES6。
  ```

- 3.3.【强制】完整的英文整句和特殊名词使用半角标点

  ```markdown
  <!-- bad -->
  乔布斯那句话是怎么说的？「Stay hungry，stay foolish。」
  推荐你阅读《Hackers＆Painters：Big Ideas from the Computer Age》，非常的有趣。

  <!-- good -->
  乔布斯那句话是怎么说的？「Stay hungry, stay foolish.」
  推荐你阅读《Hackers & Painters: Big Ideas from the Computer Age》，非常的有趣。
  ```

## 4. 名词

- 4.1.【强制】正确地拼写英文专有词汇

  ```markdown
  <!-- bad -->
  我们需要一位熟悉 Js、h5，至少理解一种框架（如 backbone、angular、RJS 等）的 FED。

  <!-- good -->
  我们需要一位熟悉 JavaScript、HTML5，至少理解一种框架（如 Backbone.js、AngularJS、React 等）的前端开发者。
  ```

## 附录

前端常用专有名词：

```markdown
HTML, CSS, JavaScript/JS, AJAX, JSON, DOM, BOM, Less, HTTP, HTTPS, WebSocket, ECMAScript, ECMAScript 2015, ECMAScript 6, ES6, ES2015
jQuery, jQuery UI, jQuery Mobile, YUI, Zepto, Dojo
React, React Native, Bootstrap, RequireJS, Sea.js, AngularJS, Backbone.js
Gulp, Grunt, webpack, Yeoman, npm, spm, Babel
Mocha, Jasmine, Should.js
PHP, Java, Node.js
MySQL, MongoDB, Redis
Apache, Nginx
GitHub, GitLab, GitCafe
Chrome, Firefox, Safari, Internet Explore/IE, IE 7, Opera, UC
Android, iOS, Windows, OS X, Ubuntu, Linux, Debian
PC, Mobile, H5
MacBook, MacBook Pro, MacBook Air, iMac, Mac Pro, Mac mini
iPad Air, iPad Air 2, iPad mini, iPhone, iPhone 6s, iPhone 6s Plus, Apple Watch
FPS, UI, URL, URI, URLs, URIs
```

## 参考资料

- [《中文文案排版指北》](https://github.com/sparanoid/chinese-copywriting-guidelines)
- [《标点符号用法》](http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113091548267.pdf)
- [夹用英文的中文文本的标点符号用法（草案）](http://www.moe.gov.cn/ewebeditor/uploadfile/2015/01/13/20150113092346124.pdf)
- [《中文排版需求》](https://www.w3.org/TR/clreq/)