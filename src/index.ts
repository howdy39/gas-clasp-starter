import { getMessage } from './message';

declare const global: any;
global.printLog = (): void => {
  Logger.log(getMessage('TypeScript'));
};
