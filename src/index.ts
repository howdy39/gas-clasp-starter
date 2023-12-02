import { SheetService } from './SheetService';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function createNewFile() {
  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!');
}
