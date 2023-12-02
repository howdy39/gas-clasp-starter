import Spreadsheet = GoogleAppsScript.Spreadsheet.Spreadsheet;
import { UtilService } from './UtilService';

export class SheetService {
  static createInitialFile(prefix: string): Spreadsheet {
    const fileName = `${prefix} ${UtilService.getDayFormat()}`;
    const ss = SpreadsheetApp.create(fileName);
    const range = ss.getRange('A1');
    range.setValue('Hello, clasp!');
    return ss;
  }
}
