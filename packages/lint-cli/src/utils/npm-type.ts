import {sync as commandExistsSync} from 'command-exists';

/**
 * 判断是否是npm
 */
const promise: Promise<'npm' | 'pnpm'> = new Promise((resolve) => {
  if (!commandExistsSync('pnpm')) return resolve('npm');

  resolve('pnpm');
})

export default promise