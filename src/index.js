import { getMessage } from './message';

global.printLog = function() {
    Logger.log(getMessage());
}
