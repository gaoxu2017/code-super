import path from "path"
import fs from "fs-extra"

//读取package.json文件

const pkg: Record<string,any> = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, "../../package.json"), "utf-8")
)

/**
 * 包名
 */
export const PKG_NAME: string = pkg.name;

/**
 * 包版本号
 */
export const PKG_VERSION: string = pkg.version;

export enum UNICODE  {
  success = "\u2714",
  failure = "\u2716"
}

export const PROJECT_TYPES: Array<{ name: string;value: string}> = [
  {
    name: '未使用 React、Vue、Node.js 的项目（JavaScript）',
    value: 'index',
  },
  {
    name: '未使用 React、Vue、Node.js 的项目（TypeScript）',
    value: 'typescript',
  },
  {
    name: 'React 项目（JavaScript）',
    value: 'react',
  },
  {
    name: 'React 项目（TypeScript）',
    value: 'typescript/react',
  },
  {
    name: 'Vue 项目（JavaScript）',
    value: 'vue',
  },
  {
    name: 'Vue 项目（TypeScript）',
    value: 'typescript/vue',
  },
  {
    name: '使用 ES5 及之前版本 JavaScript 的老项目',
    value: 'es5',
  },
]