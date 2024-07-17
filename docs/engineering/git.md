---
title: Git 规范
categories:
    - 工程规范
tags:
    - 工程规范
author:
    name: 澄怀
    link: https://github.com/encode-studio-fe/fe-spec
---

# Git 规范

## 1. Git 提交日志格式规约

### 1.1. 前言

为什么要对 `Git` 提交日志（`message`）的格式进行规约约束？

1. 更方便、快捷地浏览和了解项目的历史信息。
2. 有利于保证提交内容的独立性，避免把所有改动都放在一个提交里面。
3. 便于通过脚本自动化生成 `CHANGELOG`。

### 1.2. 基本的 `message` 格式

```
<type>[optional scope]: <subject>

[optional body]

[optional footer(s)]
```

其中 `message header`（即首行）必选，scope、body 和 footer 可选。

#### 1.2.1. 字数限制

* header（首行）：只有一行，不超过 50 个字符
* body：每行不超过 72 个字符
* footer：每行不超过 72 个字符

> 为什么要有字数限制？
>
> * header： 像 Linux、Git 这样的开源项目，是以邮件列表作为代码评审的平台，header 要作为邮件的标题，而邮件标题本身就有长度的限制，并且标题太长也不利于浏览和信息获取。
> * body 和 footer：源于大部分编程语言的编码规范，最初源于打字机宽度等物理设备的限制，后来慢慢成为默认遵守的规范。

#### 1.2.2. 语言选择

**在开源项目中**：推荐使用英文，因为项目的开发者和参与者可能来自世界各地，使用英文可以更广泛的传递信息。

**在内部项目（并且短时间内也不涉及开源）中**：应该选择内部人员普遍能够熟练表达的语言。

例如在国内的团队中，可以使用中文。

> 关于使用中文可能会出现乱码的问题：处理字符集和字符编码的问题应该是每个程序员的必修课。
>
> 关于使用英文天然正确性的问题：因地制宜，适合的才是最好的。

### 1.3. message header

#### 1.3.1. type

`type` 用来描述本次提交的改动类型，可选值及对应含义如下：

* `feat`: 新增功能
* `fix`: 修复 bug
* `docs`: 文档相关的改动
* `style`: 对代码的格式化改动，代码逻辑并未产生任何变化(例如代码缩进，分号的移除和添加)
* `test`: 新增或修改测试用例
* `refactor`: 重构代码或其他优化举措
* `chore`: 项目工程方面的改动，代码逻辑并未产生任何变化
* `revert`: 恢复之前的提交

> 注意：
>
> 1. `commit message` 的 `type` 和 `changelog` 的 `type` 存在紧密联系，然而它们两者之间并非一一对应，比如在 `changelog` 中一般不会指出文档 `docs` 或测试用例 `test` 等方面发生的变化
> 2. `css` 样式文件的修改一般属于 `feat` 或者 `fix`，并不是 `style`

#### 1.3.2. scope

`scope` 用来描述本次提交所涉及到的改动范围（例如模块、功能或其他任何限定的范围）。

`scope` 的具体取值视项目而定。以淘宝详情页为例，取值可以是：`header`, `footer`, `favorite`, `sku`, etc...

如果是 `monorepo` 的项目，`scope` 取值可以是 `subpackage` 的名称。例如 `babel` 项目中对某个 `package` 的修改：

```
chore(babel-helper-plugin-utils): add npmignore
```

#### 1.3.3. subject

subject 用来概括和描述本次提交的改动内容，需注意以下几点：

1. 时态方面使用一般现在时，不要使用过去时。虽然查看 `message` 时，`message` 内容本身都发生在过去，然而对于主题来说，使用现在时的时态更简洁明确，并且更易达成一致性：

    ```
    // good
    docs: delete redundant docs

    // bad
    docs: deleted redundant docs
    ```

2. 句式使用祈使句。即一般情况不要增加主语。因为在绝大情况下，主语都是作者『我』：

    ```
    // good
    docs: delete redundant docs

    // bad
    docs: i delete redundant docs
    ```

3. 句首无需大写，句尾无需结束标点。因为主题（或标题）本身不用形成完整的句子：

  ```
    // good
    docs: delete redundant docs

    // bad
    docs: Delete redundant docs.
    ```

### 1.4. message body

日志的内容主体 body 用来描述详细的提交内容，可写可不写，需注意以下几点：

1. 时态方面使用一般现在时，不要用过去时态。
2. 句式视情况而定，一般使用祈使句式。
3. 标点方面遵循一般的文档格式规约。

### 1.5. message footer

footer 通常用于代码评审过程记录、作者签名等。例如：

```markdown
Reported-by: User1 <user1@example.com>
Helped-by: User2 <user2@example.com>
Reviewed-by: User3 <user3@example.com>
Signed-off-by: Author <author@example.com>
```

> 为什么要有签名区？
>
> 因为一个提交的元信息中只有作者（author）、提交者（committer）两个字段，而一段代码的诞生，参与的人往往不止于此，还可能有问题报告者（Reported-by）、代码评审者（Reviewed-by）、上游 Committer 的签名（Signed-off-by）。为此一些开源项目（如 Git、Linux）的一个约定俗成的习惯，是在提交的最后加上签名，每个贡献者一行，从上到下可以看到这段代码诞生的过程。

还可以添加其他元信息，例如：

#### 引用 `Issues`

可以在 `commit` 信息里使用关键字 + `Issue ID`（`Gitlab` / `Github` 或其他平台的），来表明该提交解决了某个 `Issue`。推荐使用的关键字有：

```markdown
close
closes
closed
fix
fixes
fixed
resolve
resolves
resolved
```

关键字的选用可以根据当前语义、关联的 `Issue` 是否在当前仓库下，甚至是 commit 消息的长度限制来决定。

* `close`: 关闭当前仓库的 `Issue`
* `fix`: 关闭当前或其他仓库的 `Issue`, 一般指 Bug 修复
* `resolve`: 关闭当前或其他仓库的 `Issue`

关闭多个 `Issues` 使用如下格式:

```
Close #1, #2, #3
Close #1, close #2, close #3

Fix #1, #2, #3
Fix #1, close #2, close #3

Resolve #1, #2, #3
Resolve #1, close #2, close #3
```

#### 破坏性变动（`Breaking changes`）

如果本次提交的改动是破坏性的，需要在这里声明：

```
BREAKING CHANGE: 为了组件 API 规范的统一，本次升级将 size 属性的 value 值从 `s|m|l` 替换为 `small|medium|large`。

请按照如下方式升级：

<Button size="s">提交</Button>
-->
<Button size="small">提交</Button>

继续使用 size="m" 可能会导致样式错误。
```

## 2. Git 分支命名规约

### 2.1. 分支模型选择的说明

目前互联网和社区中流传最广泛的一个分支模型 [Git Flow](https://github.com/nvie/gitflow) 出自 [a-successful-git-branching-model](https://nvie.com/posts/a-successful-git-branching-model/) 这篇十年前的文章，文章作者 Vincent Driessen 在 2020 年三月份的时候已经公开表示，该分支模型已经不适用于现如今持续交付的软件工程方式，推荐在持续交付的软件工程中使用更简单的 [Github Flow](https://guides.github.com/introduction/flow/) 模型。

### 2.2. 分支命名

新建分支的命名格式为：`{type}-{issue id}-the-thing-you-do`

* `type`：和上文 1.3.1 章节中的 type 保持一致
* `issue id`：与分支内容相关的 issue id，如果无关，则可以忽略

比如以下格式都满足规范：

* `feat-ssr-prefetch`：新增 ssr prefetch 功能
* `fix-1379-component-insert-order`：修复 issue 1379 中提到的组件插入顺序 bug
* `revert-14218-memory-leak-on-unmount`：回退版本解决 issue 14218 提到的组件卸载时内存泄露的问题

> 注：该命名规约只针对新建的临时分支，不包括如 master、develop 等常驻分支

### 2.3. 多版本分支命名

在需要同时维护多个版本的项目中，只使用 master 作为主干分支显然是无法满足需求的，但是又不想使用 Git Flow 这种复杂、繁琐的分支结构，那么就可以每发布一个新的版本就单独拉一个新的分支，例如：

> * `1.0.0-stable`
> * `2.0.0-stable`

其他开发过程中的分支命名参考上节 2.2 的分支命名规约。

## 3. Git tag 命名规约

`Git tag` 就是通过语义化的名称来给仓库标注一个个具体的节点。与此同时还可以根据标签名称来大致了解当前项目的兼容性和迭代情况。

命名格式为 `v{semver}`，`semver` 是遵循 [semantic version](https://semver.org/lang/zh-CN/) 的版本号，例如 `v1.2.3`。

相比于使用例如 `git tag v1.2.3` 这种「轻量标签」，更推荐使用如下命令生成「附注标签」：

`git tag -a v1.2.3 -m "发布经销商管理模块"`


## 参考资料

1. [AngularJS 代码贡献指南][angular-contributing]
2. [AngularJS Git Commit Message Conventions][angular-git-conventions]
3. [Karma 的 Git 日志规约][karma-git-msg]
4. [StackOverflow - 在 Git 日志中我该用过去时态还是现在时态？][stackoverflow-git-msg]
5. [一个成功的 Git 分支模型][a-successful-git-branching-model]
6. [Git 基础打标签][git-basic-tag]
7. [每行字符数][cpl]
8. [Conventional Commits][conventionalcommits]

[angular-contributing]: https://github.com/angular/angular.js/blob/master/CONTRIBUTING.md
[stackoverflow-git-msg]: http://stackoverflow.com/questions/3580013/should-i-use-past-or-present-tense-in-git-commit-messages
[karma-git-msg]: http://karma-runner.github.io/0.13/dev/git-commit-msg.html
[angular-git-conventions]: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/edit#heading=h.j8e4paqkfz0q
[a-successful-git-branching-model]: https://nvie.com/posts/a-successful-git-branching-model/
[git-basic-tag]: https://git-scm.com/book/zh/v2/Git-%E5%9F%BA%E7%A1%80-%E6%89%93%E6%A0%87%E7%AD%BE
[cpl]: https://en.wikipedia.org/wiki/Characters_per_line
[conventionalcommits]: https://www.conventionalcommits.org
