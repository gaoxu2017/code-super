import { PKG_NAME, PKG_VERSION } from '../utils/constants';
import npmType from './../utils/npm-type';
import ora from 'ora';
import log from '../utils/log';
import { execSync } from 'child_process';

/**
 * 检查最新版本号
 */

const checkLatestVersion = async (): Promise<string | null> => {
  const npm = await npmType;
  const latestVersion = execSync(`${npm} view ${PKG_NAME} version`).toString('utf-8').trim();

  if (PKG_VERSION === latestVersion) return null;

  const comparerArr = PKG_VERSION.split('.').map(Number);
  const beComparerArr = latestVersion.split('.').map(Number);

  // 比较版本号
  for (let i = 0; i < comparerArr.length; i++) {
    if (comparerArr[i] > beComparerArr[i]) {
      return null;
    } else if (comparerArr[i] < beComparerArr[i]) {
      return latestVersion;
    }
  }
};

/**
 * 检查包的版本
 *  @param install - 自动安装最新包
 */
export default async (install = true) => {
  const checking = ora(`[${PKG_NAME}]正在检查版本...`);
  checking.start();

  try {
    const npm = await npmType;
    const latestVersion = await checkLatestVersion();
    checking.stop();

    if (latestVersion && install) {
      const update = ora(`[${PKG_NAME}] 存在新版本，将升级到 ${latestVersion}`);

      update.start();

      execSync(`${npm} install -g ${latestVersion}`);

      update.stop();
    } else if (latestVersion) {
      log.warn(
        `最新版本为${latestVersion}, 当前版本为${PKG_VERSION}， 请尽快升级到最新版本。\n你可以执行 ${npm} install -g ${PKG_NAME}`
      );
    } else {
      log.info('当前没有可用的更新');
    }
  } catch (e) {
    checking.stop();
    log.error(e);
  }
};
