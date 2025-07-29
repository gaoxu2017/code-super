import chalk from 'chalk';
import { PKG_NAME, UNICODE } from './constants';

const { green, blue, yellow, red } = chalk;

export default {
  info(text: string) {
    console.log(green(text));
  },
  success(text: string) {
    console.log(green(text));
  },
  warn(text: string) {
    console.info(yellow(text));
  },
  error(text: string) {
    console.info(yellow(text));
  },
  result(msg: string, pass: boolean) {
    console.info(
      blue(`[${PKG_NAME}] ${msg}`),
      pass ? green(UNICODE.success) : red(UNICODE.failure)
    );
  },
};
