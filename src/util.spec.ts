import { add } from './util';
jest.unmock('./util');

describe('util', () => {
  describe('add()', () => {
    it('should be add', () => {
      expect(add(3, 5)).toBe(8);
    });
  });
});
