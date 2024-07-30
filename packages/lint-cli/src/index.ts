
import type {InitOptions} from "./type"
import initAction from "./actions/init"

type IInitOptions = Omit<InitOptions,"checkVersionUpdate">

export const init = async (options:IInitOptions) => {
  return await initAction({
    ...options,
    checkVersionUpdate:false
  })
}