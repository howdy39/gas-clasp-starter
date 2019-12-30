import { SheetService } from './sheet.service';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare let global: any;

global.createNewFile = (): void => {
  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!');
};
