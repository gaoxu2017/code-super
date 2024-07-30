import npmType from "./../utils/npm-type"
import { execSync } from "child_process"
import ora from 'ora';
import log from '../utils/log';
import { PKG_NAME,PKG_VERSION } from "./../utils/constants"

const checkVersionUpdate = async ():Promise<string | number> => {
  const npm = await npmType

  const latestVersion = execSync(`${npm} view ${PKG_NAME} version`).toString("utf-8").trim()
  
   if(latestVersion === PKG_VERSION) return null
   
   const compareArr = PKG_NAME.split(".").map(Number)
   const baseCompareArr = latestVersion.split(".").map(Number)
   

   // 比较版本号
   for (let i = 0; i < compareArr.length;i++) {
    if (compareArr[i] > baseCompareArr[i]) {
      return null
    }else if( compareArr[i] < baseCompareArr[i]) {
      return latestVersion
    }
   }
}

/** 
 * 检查版本更新
*/

export default async (install = true) => {
  const checking = ora(`[${PKG_NAME}] 正在检查最新版本...`)

  checking.start()

  try {
    const npm = await npmType
    const latestVersion = await checkVersionUpdate()
    checking.stop()

    if (latestVersion && install) {
      //安装
      const update = ora(`[${PKG_NAME}] 存在新版本，将升级至 ${latestVersion}...`)

      update.start()

      execSync(`${npm} install -g ${PKG_NAME}`)

      update.stop()
    }else if(latestVersion) {
      // pnpm view style-line-super version
      // 0.0.8
      log.warn(`[${PKG_NAME}] 存在新版本 ${latestVersion}，请手动更新`)
    }else if(install) {
      log.info("当前没有可更新")
    }


  } catch (e) {
    checking.stop()
    log.error("当前没有可用的更新")
  }
}