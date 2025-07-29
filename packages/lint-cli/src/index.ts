import initAction from './actions/init';
import type { InitOptions } from './type';

export const init = async (option: InitOptions) => {
  return await initAction({
    ...option,
    checkVersionUpdate: false,
  });
};
