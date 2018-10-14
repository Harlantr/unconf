import { required, maxLength } from './index';

describe('Redux Form Valdators', () => {
  describe('required', () => {
    it('returns undefined when passing', () => {
      expect(required(12)).toBe(undefined);
    });

    it('fails with grace', () => {
      expect(required(null)).toBe('Required');
    });
  });

  describe('maxLength', () => {
    it('returns undefined when passing', () => {
      const maxLength10 = maxLength(10);
      expect(maxLength10('123456789')).toBe(undefined);
    });

    it('fails with grace', () => {
      const maxLength10 = maxLength(10);
      expect(maxLength10('12345678910')).toBe('Must be 10 characters or fewer');
    });
  });
});
