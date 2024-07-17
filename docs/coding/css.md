---
title: CSS 编码规范
categories:
    - 编码规范
tags:
    - 编码规范
author:
    name: 澄怀
    link: https://github.com/encode-studio-fe/fe-spec
---

# CSS 编码规范

本规约涉及 `CSS` 及其预编译语言（`Sass`、`Less`）的编码风格和最佳实践，部分规则可通过 [stylelint](https://stylelint.io/) 工具落地。

## 1. CSS

### 1.1. 编码风格

![style](./img/style.svg)

详细规则如下：

- 1.1.1.【强制】所有声明都应该以分号结尾，不能省略。`stylelint`: [declaration-block-trailing-semicolon](https://stylelint.io/user-guide/rules/declaration-block-trailing-semicolon)
  
  虽然 `CSS` 语法中最后一条声明的分号是可选的，但是使用分号可以增加代码的一致性和易用性。

  ```css
  /* bad */
  .selector {
    margin-top: 10px
    padding-left: 15px
  }

  /* good */
  .selector {
    margin-top: 10px;
    padding-left: 15px;
  }
  ```

- 1.1.2.【推荐】使用 2 个空格缩进，不要使用 4 个空格或 tab 缩进。`stylelint`: [indentation](https://stylelint.io/user-guide/rules/indentation)

  ```css
  /* bad */
  .selector {
      padding-left: 15px;
  }

  /* good */
  .selector {
    padding-left: 15px;
  }
  ```

- 1.1.3.【推荐】选择器和 `{` 之间保留一个空格。`stylelint`: [block-opening-brace-space-before](https://stylelint.io/user-guide/rules/block-opening-brace-space-before) 

  ```css
  /* bad */
  .selector{
    padding-left: 15px;
  }

  /* good */
  .selector {
    padding-left: 15px;
  }
  ```

- 1.1.4.【推荐】属性名和 `:` 之前无空格，`:` 和属性值之间保留一个空格。`stylelint`: [declaration-colon-space-after](https://stylelint.io/user-guide/rules/declaration-colon-space-after) [declaration-colon-space-before](https://stylelint.io/user-guide/rules/declaration-colon-space-before) 

  ```css
  /* bad */
  .selector {
    margin-top : 10px;
    padding-left:15px;
  }

  /* good */
  .selector {
    margin-top: 10px;
    padding-left: 15px;
  }
  ```

- 1.1.5.【推荐】`>`、`+`、`~` 、`||` 等组合器前后各保留一个空格。`stylelint`: [selector-combinator-space-before](https://stylelint.io/user-guide/rules/selector-combinator-space-before) [selector-combinator-space-after](https://stylelint.io/user-guide/rules/selector-combinator-space-after)

  ```css
  /* bad */
  .selector>.children {
    padding-left: 15px;
  }
  .selector+.brother {
    padding-left: 15px;
  }

  /* good */
  .selector > .children {
    padding-left: 15px;
  }
  .selector + .brother {
    padding-left: 15px;
  }
  ```

- 1.1.6.【推荐】在使用 `,` 分隔的属性值中，`,` 之后保留一个空格。`stylelint`: [value-list-comma-space-after](https://stylelint.io/user-guide/rules/value-list-comma-space-after)

  ```css
  /* bad */
  .selector {
    background-color: rgba(0,0,0,0.5);
    box-shadow: 0px 1px 2px rgba(0,0,0,0.5),inset 0 1px 0 rgba(255,255,255,0.5);
  }

  /* good */
  .selector {
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.5);
  }
  ```

- 1.1.7.【推荐】注释内容和注释符之间留有一个空格。`stylelint`: [comment-whitespace-inside](https://stylelint.io/user-guide/rules/comment-whitespace-inside)

  ```css
  /* bad */
  .selector {
    /*comment*/
    /*  comment  */
    /**
     *comment
     */
    padding-left: 15px;
  }

  /* good */
  .selector {
    /* comment */
    /**
     * comment
     */
    padding-left: 15px;
  }
  ```

- 1.1.8.【推荐】声明块的右大括号 `}` 应单独成行。

  ```css
  /* bad */
  .selector {
    padding-left: 15px;}

  /* good */
  .selector {
    padding-left: 15px;
  }
  ```

- 1.1.9.【推荐】属性声明应单独成行。`stylelint`: [declaration-block-single-line-max-declarations](https://stylelint.io/user-guide/rules/declaration-block-single-line-max-declarations)

  ```css
  /* bad */
  .selector {
    padding-left: 15px;  margin-left: 10px;
  }

  /* good */
  .selector {
    padding-left: 15px;
    margin-left: 10px;
  }
  ```


- 1.1.10.【推荐】单行代码最多不要超过 100 个字符。 `stylelint`: [max-line-length](https://stylelint.io/user-guide/rules/max-line-length) 除了以下两种情况：

  - 使用 [`url()`](https://developer.mozilla.org/en-US/docs/Web/CSS/url) 函数时
  - CSS 属性值本身无法换行时，即属性值内无空格或逗号时

  ```css
  /* bad */
  background-image: -webkit-gradient(linear, left bottom, left top, color-stop(0.04, rgb(88, 94, 124)), color-stop(0.52, rgb(115, 123, 162)));

  /* good */
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.04, rgb(88, 94, 124)),
    color-stop(0.52, rgb(115, 123, 162))
  );
  ```

- 1.1.11.【参考】使用多个选择器时，每个选择器应该单独成行。`stylelint`: [selector-list-comma-newline-after](https://stylelint.io/user-guide/rules/selector-list-comma-newline-after)
  
  ```css
  /* bad */
  .selector, .selector-secondary, .selector-third {
    padding: 15px;
    margin-bottom: 15px;
  }

  /* good */
  .selector,
  .selector-secondary,
  .selector-third {
    padding: 15px;
    margin-bottom: 15px;
  }
  ```

- 1.1.12.【参考】声明块内只有一条语句时，也应该写成多行。

  ```css
  /* bad */
  .selector { padding-left: 15px; }

  /* good */
  .selector {
    padding-left: 15px;
  }
  ```

- 1.1.13.【参考】注释行上方需留有一行空行，除非上一行是注释或块的顶部。`stylelint`: [comment-empty-line-before](https://stylelint.io/user-guide/rules/comment-empty-line-before)

  ```css
  /* bad */
  .selector {

    /* comment */
    padding-left: 15px;
    /* comment */
    padding-right: 15px;
  }

  /* good */
  .selector {
    /* comment */
    padding-left: 15px;

    /* comment */
    padding-right: 15px;
  }
  ```

### 1.2. 选择器

- 1.2.1.【参考】不要使用 `id` 选择器。`stylelint`: [selector-max-id](https://stylelint.io/user-guide/rules/selector-max-id)
  
  `id` 会带来过高的[选择器优先级](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)，使得后续很难进行样式覆盖（继而引发使用 `!important` 覆盖样式的恶性循环）。

  ```css
  /* bad */
  .normal {
    padding: 10px;
  }
  #special {
    padding: 15px;
  }

  /* good */
  .normal {
    padding: 10px;
  }
  .normal.special {
    padding: 15px;
  }
  ```

- 1.2.2.【参考】属性选择器的值始终用双引号包裹。`stylelint`: [selector-attribute-quotes](https://stylelint.io/user-guide/rules/selector-attribute-quotes)

  属性选择器的值的引号只有在[某些情况下](https://mathiasbynens.be/notes/unquoted-attribute-values#css)可以省略。

  ```css
  /* bad */
  input[type=text] {
    height: 20px;
  }

  /* good */
  input[type="text"] {
    height: 20px;
  }
  ```

- 1.2.3.【参考】使用 `CSS` 选择器时，应注意以下性能问题：

  - 使用 `class` 而不是原生元素标签
  - 减少在经常出现的组件中使用个别属性选择器（如 `[class^="..."]`）
  - 控制选择器的长度，每个组合选择器内的条目尽量不超过 3 个

  > 只从效率的角度来看，CSS 选择器从高（高效率）到低（低效率）的顺序是：
  >
  > - ID 选择器， 比如 `#header`
  > - 类选择器，比如 `.header`
  > - 标签（元素）选择器，比如 `div`
  > - 相邻兄弟选择器，比如 `h2 + p`
  > - 子选择器，比如 `ul > li`
  > - 后代选择器，比如 `ul a`
  > - 通配符选择器，比如 `*`
  > - 属性选择器，比如 `[class^="grid-"]`
  > - 伪类（伪元素）选择器，比如 `a:hover`、`a::before`

### 1.3. 属性和属性值
  
- 1.3.1.【推荐】使用尽可能短的十六进制值。`stylelint`: [color-hex-length](https://stylelint.io/user-guide/rules/color-hex-length)

  ```css
  /* bad */
  .selector {
    color: #ffffff;
  }

  /* good */
  .selector {
    color: #fff;
  }
  ```

- 1.3.2.【推荐】不要使用 `!important` 重写样式。

- 1.3.3.【推荐】十六进制值统一使用小写字母（小写字母更容易分辨）。`stylelint`: [color-hex-case](https://stylelint.io/user-guide/rules/color-hex-case)

  ```css
  /* bad */
  .selector {
    color: #FEFEFE;
  }

  /* good */
  .selector {
    color: #fefefe;
  }
  ```

- 1.3.4.【推荐】长度值为 0 时，省略掉长度单位。`stylelint`: [length-zero-no-unit](https://stylelint.io/user-guide/rules/length-zero-no-unit)

  在 CSS 中，长度值为 0 时，它的单位是可选的（长度单位包括：em, ex, ch, vw, vh, cm, mm, in, pt, pc, px, rem, vmin, and vmax）。省略长度单位可以使代码更简洁：

  ```css
  /* bad */
  .selector {
    margin-top: 0px;
    font-size: 0em;
  }

  /* good */
  .selector {
    margin-top: 0;
    font-size: 0;
  }
  ```

- 1.3.5.【参考】保留小数点前的 0。`stylelint`: [number-leading-zero](https://stylelint.io/user-guide/rules/number-leading-zero)

  在 CSS 中，大于 -1 小于 1 的小数，小数点前的 0 可以省略：

  ```css
  /* bad */
  .selector {
    opacity: .5;
    left: -.5px;
  }

  /* good */
  .selector {
    opacity: 0.5;
    left: -0.5px;
  }
  ```

  对于是否省略小数点前的 0，业界存在争议：

  - 省略 0 的好处是：代码更简洁，可以减少一个字符
  - 不省略的好处是：代码可读性更好、一致性更强

  你可选择自己倾向的风格，在代码中风格统一即可，要么都省略，要么都保留。

  我们推荐保留 0，因为当今很多 CSS 压缩工具会在压缩时帮我们去掉 0，不存在多占用一个字符的问题。保留 0 能增强代码的可读性和一致性。

- 1.3.6.【参考】属性声明的顺序。

  相关联的属性声明最好写成一组，并按如下顺序排序：

  1. **定位**：如 `position`、`left`、`right`、`top`、`bottom`、`z-index`
  2. **盒模型**：如 `display`、`float`、`width`、`height`、`margin`、`padding`、`border`
  3. **文字排版**：如 `font`、`color`、`line-height`、`text-align`
  4. **外观**：如  `background`
  5. **其他属性**

  「定位」和「盒模型」放在最前面，是因为它们决定了元素的布局、位置和尺寸。「定位」排在「盒模型」之前，是由于「定位」属性可以让元素脱离正常文本流，从而使「盒模型」属性失效。

  除了「定位」和「盒模型」，其他属性都只在元素内部起作用，不会对前两类属性的结果产生影响，因此放在后面。

  ```css
  .declaration-order {
    /* 定位 */
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 100;

    /* 盒模型 */
    display: block;
    float: right;
    width: 100px;
    height: 100px;
    border: 1px solid #e5e5e5;

    /* 排版 */
    font: normal 13px "Helvetica Neue", sans-serif;
    line-height: 1.5;
    color: #333;
    text-align: center;

    /* 外观 */
    background-color: #f5f5f5;

    /* 其他 */
    opacity: 1;
  }
  ```

  更多 CSS 属性顺序参考如下列表：
  
  |第一组|第二组|第三组|第四组|第五组|第六组|第七组|
  |----|----|----|----|----|----|----|
  |content |box-sizing|background*         |font*|opacity       |unicode-bidi|transition*|
  |position|*width    |color               |src|visibility    |direction   |transform* |
  |top     |*height   |box-decoration-break|line-height|filter        |columns     |animation* |
  |right   |margin*   |box-shadow          |letter-spacing|resize        |column-*    ||
  |bottom  |padding*  |outline*            |quotes|cursor        |break-*     ||
  |left    |border*   |table-layout        |counter-*|pointer-events|page-break-*||
  |z-index |          |caption-side        |-ms-writing-mode|user-select   |orphans     ||
  |display |          |empty-cells         |text-*||widows||
  |vertical-align|    |list-style*         |white-space||*zoom||
  |flex*   |          |                    |word-*||orientation||
  |grid*   |          |                    |overflow-wrap||fill||
  |*gap    |          |                    |tab-size||stroke||
  |align-* |          |                    |hyphens||||
  |justify-*|         |                    |interpolation-mode||||
  |order|||||||
  |float|||||||
  |clear|||||||
  |object-fit|||||||
  |overflow*|||||||
  |clip|||||||

- 1.3.7.【参考】适时使用简写属性。`stylelint`: [declaration-block-no-shorthand-property-overrides](https://stylelint.io/user-guide/rules/declaration-block-no-shorthand-property-overrides) [declaration-block-no-redundant-longhand-properties](https://stylelint.io/user-guide/rules/declaration-block-no-redundant-longhand-properties)


  常见的[简写属性](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties)包括：

  - `font`
  - `background`
  - `padding`
  - `margin`
  - `border`
  - `border-radius`

  使用简写属性时，需要显式地设置所有值。我们应该在真正需要设置所有值或大多数值时才使用简写属性。
  
  如果只是想设置某一个属性，则不应该使用简写属性：

  ```css
  /* bad */
  .selector {
    margin: 0 0 10px;
  }

  /* good */
  .selector {
    margin-bottom: 10px;
  }
  ```

### 1.4. 其他

- 1.4.1.【推荐】不要使用 `CSS` 的 `@import`。

  与 `<link>` 相比，`@import` 会在关键渲染路径上增加更多的往返（即关键路径的深度变长），这样会导致浏览器处理 CSS 文件速度变慢，因此我们应该避免使用 `@import`。

  ```css
  <!-- bad -->
  <style>
    @import url("more.css");
  </style>

  <!-- good -->
  <link rel="stylesheet" href="more.css">
  ```

## 2. `Sass` 和 `Less`

> 对于 CSS 而言，可以在新项目中尝试放弃使用 `Sass`、`Less` 这样的处理器语言，因为：
> 
>* 这些处理器语言是在一定历史条件下的产物，虽然这些产物在一定程度上提高开发者的开发效率，但不同的处理器语言也同时增加了项目的维护成本（特别是多人协作，多团队协作的时候）。
>* 更建议使用 `PostCSS` 处理器，它类似于 `CSS` 中的 `Babel`，不但具备 `Sass` 和 `Less` 的功能，而且社区繁荣，同时还可以根据自己的需求扩展相关的插件。
>* 随着 `CSS` 的一些新特性出现，`Sass` 和 `Less` 以往的优势也会慢慢消失。

- 2.1.【推荐】四则运算符两侧各保留一个空格：

  ```css
  /* bad */
  .selector {
    width: $default-width/2;
  }

  /* good */
  .selector {
    width: $default-width / 2;
  }
  ```

- 2.2.【推荐】Mixin 名称和括号 `()` 间无空格，在拥有多个参数的表达式中， `,` 之前无空格，`,` 之后保留一个空格：

  ```css
  /* bad */
  .selector {
    .size(30px,20px);
    .clearfix ();
  }

  /* good */
  .selector {
    .size(30px, 20px);
    .clearfix();
  }
  ```

- 2.3.【推荐】按如下顺序组织 Sass / Less 代码：

  - `@import` 语句
  - 全局变量声明
  - 样式声明

  ```css
  @import 'common/theme.scss';

  $color-red: #f0f0f0;

  .selector {
    color: $color-red;
  }
  ```

- 2.4.【推荐】对于 `Sass` 和 `Less`，块内的属性声明按如下顺序排序：

  - 标准属性声明：除了 `mixin` 调用、`extend` 子级选择器的声明，其他属性声明的顺序与「属性声明的顺序」章节的规则一致
  - mixin 调用：`Sass` 的 `@include` 声明、`Less` 的 `mixin` 调用
  - 嵌套的子级选择器：将嵌套的选择器放到块的末尾，并且在其上方保留一行空行

  ```css
  .btn {
    background: #ccc;
    font-weight: bold;
    @include transition(background 0.5s ease);

    .icon {
      margin-right: 10px;
    }
  }
  ```

- 2.5.【推荐】嵌套选择器的深度不要超过 3 层，否则可能带来一些副作用：

  - 与 `HTML` 结构强耦合，难以复用
  - 过高的[选择器优先级](https://developer.mozilla.org/en-US/docs/Web/CSS/Specificity)

  ```css
  .container {
    .header {
      .user-name {
        // STOP！不要再嵌套更深选择器
      }
    }
  }
  ```

- 2.6.【推荐】可以使用双斜杠注释。但需要注意的是，编译为 `CSS` 后，代码中的双斜杠注释会被删除，而 `/* */` 会被保留。

  ```css
  // 单行注释
  .selector-a {
    padding-left: 15px;
  }

  /*
   * 多行注释
   * 多行注释
   */
  .selector-b {
    margin-left: 15px;
  }
  ```

  编译为 `CSS` 后，双斜杠注释会被删除：

  ```css
  .selector-a {
    padding-left: 15px;
  }

  /*
   * 多行注释
   * 多行注释
   */
  .selector-b {
    margin-left: 15px;
  }
  ```

- 2.7.【推荐】使用 `Mixin` (`@mixin` 和 `@include` 指令) 来让代码遵循 `DRY` 原则（`Don't Repeat Yourself`）、增加抽象性和降低复杂度。

  应避免使用 `@extend` 指令，它不够直观且具有潜在风险，尤其是在嵌套选择器中。即使继承的是顶层选择器，如果选择器的顺序发生变化，也可能引起问题（比如，如果它们存在于其他文件，而加载顺序发生了变化）。

  `Extend`  相比 `Mixin` 的好处是，如果无参数的 `mixin` 被多处使用，编译后会输出多段重复的代码。这时如果使用 `@extend`，可以避免这个问题。但是 `gzip` 等压缩工具就可以解决重复代码的问题，因此大多数情况下，你只需要使用 `mixin` 来让代码符合 DRY 原则。

## 参考资料

- [Code Guide by @mdo](http://codeguide.co)
- [Airbnb CSS / Sass Styleguide](https://github.com/airbnb/css)
- [Google HTML/CSS Style Guide](https://google.github.io/styleguide/htmlcssguide.html)
- [spec css-style-guide](https://github.com/ecomfe/spec/blob/master/css-style-guide.md)