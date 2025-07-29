import path from 'path';
import { program } from 'commander';
import spawn from 'cross-spawn';
import init from './actions/init';
import update from './actions/update';
import generateTemplate from './utils/generate-template';
import { PKG_NAME } from './utils/constants';

const cwd = process.cwd();

program
  .command('init')
  .description('初始化项目')
  .option('--vscode', '写入./vscode/setting.json配置')
  .action(async (cmd) => {
    if (cmd.vscode) {
      const configPath = path.resolve(cwd, `${PKG_NAME}.config.js`);
      generateTemplate(cwd, require(configPath), true);
    } else {
      await init({
        cwd,
        checkVersionUpdate: true,
      });
    }
  });

program
  .command('commit-msg-scan')
  .description('commit message 检查: git commit 时对 commit message 进行检查')
  .action(() => {
    const result = spawn.sync('commit', ['E', 'HUSKY_GIT_PARAMS'], { stdio: 'inherit' });

    if (result.status !== 0) {
      process.exit(result.status);
    }
  });

program
  .command('update')
  .description(`更新 ${PKG_NAME} 至最新版本`)
  .action(() => {
    update(true);
  });
program.parse(process.argv);
