import { defineConfig4CustomTheme, UserPlugins } from 'vuepress/config';

export default defineConfig4CustomTheme({
  base: '/code-super/',
  locales: {
    '/': {
      lang: 'zh-CN',
      title: 'codeLint',
      description: '前端编码规范工程化',
    },
  },
  themeConfig: {
    logo: '/favicon.ico',
    repo: 'https://github.com/gaoxu2017/code-super',
    docsDir: 'docs',
    smoothScroll: true,
    nav: [
      { text: '首页', link: '/index.md' },
      {
        text: '编码规范',
        items: [
          { text: 'HTML 编码规范', link: '/coding/html.md' },
          { text: 'CSS 编码规范', link: '/coding/css.md' },
          { text: 'JavaScript 编码规范', link: '/coding/javascript.md' },
          { text: 'Typescript 编码规范', link: '/coding/typescript.md' },
        ],
      },
      {
        text: '工程规范',
        items: [
          { text: 'Git 规范', link: '/engineering/git.md' },
          { text: 'Markdown规范', link: '/engineering/docs.md' },
          { text: 'CHANGELOG规范', link: '/engineering/changelog.md' },
        ],
      },
      {
        text: 'NPM包',
        items: [
          { text: 'markdownlint-config-super', link: '/npm/markdownlint.md' },
          { text: 'commitlint-config-super', link: '/npm/commitlint.md' },
          { text: 'stylelint-config-super', link: '/npm/stylelint.md' },
          { text: 'code-eslint-config-super', link: '/npm/eslint.md' },
        ],
      },
    ],
    sidebar: [
      {
        title: '编码规范',
        children: [
          {
            title: 'HTML 编码规范',
            path: '/coding/html.md',
          },
          {
            title: 'CSS 编码规范',
            path: '/coding/css.md',
          },
          {
            title: 'JavaScript 编码规范',
            path: '/coding/javascript.md',
          },
          {
            title: 'Typescript 编码规范',
            path: '/coding/typescript.md',
          },
        ],
      },
      {
        title: '工程规范',
        children: [
          {
            title: 'Git规范',
            path: '/engineering/git.md',
          },
          {
            title: 'Markdown规范',
            path: '/engineering/docs.md',
          },
          {
            title: 'CHANGELOG规范',
            path: '/engineering/changelog.md',
          },
        ],
      },
      {
        title: 'NPM包',
        children: [
          { title: 'markdownlint-config-super', path: '/npm/markdownlint.md' },
          { title: 'commitlint-config-super', path: '/npm/commitlint.md' },
          { title: 'stylelint-config-super', path: '/npm/stylelint.md' },
          { title: 'code-eslint-config-super', path: '/npm/eslint.md' },
        ],
      },
    ],
  },
  head: [
    [
      'meta',
      {
        name: 'keywords',
        content:
          'code-super,编码规范,工程规范,git规范,markdown规范,commitlint规范,stylelint规范,eslint规范,typescript规范,html规范,css规范,javascript规范,node规范,脚手架',
      },
    ],
  ],
  plugins: <UserPlugins>[
    [
      'one-click-copy',
      {
        copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'],
        copyMessage: '复制成功',
        duration: 1000,
        showInMobile: false,
      },
    ],

    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-vdoing-content img:not(.no-zoom)',
        options: {
          bgColor: 'rgba(0,0,0,0.6)',
        },
      },
    ],
  ],
});
