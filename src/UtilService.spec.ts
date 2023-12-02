import { UtilService } from './UtilService';
jest.unmock('./UtilService');

describe('UtilService', () => {
  describe('getDayFormat()', () => {
    it('no parameter', () => {
      const now = new Date();
      const expected = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()}`;
      expect(UtilService.getDayFormat()).toBe(expected);
    });
    it('with date parameter', () => {
      const date = new Date(2018, 2, 9);
      expect(UtilService.getDayFormat(date)).toBe('2018-3-9');
    });
  });
});
