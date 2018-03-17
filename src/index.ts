import { getMessage } from './message';
import { add } from './util';

declare const global: any;
global.printLog = (): void => {
  Logger.log(getMessage('TypeScript'));
  Logger.log(add(10, 20));
};
