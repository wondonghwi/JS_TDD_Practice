const stats = require('./stats');

describe('stats', () => {
  it('get max value', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });

  it('get mit value', () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });

  it('get avg value', () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });

  describe('median', () => {
    it('sorts the array', () => {
      expect(stats.sort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
    });
    it('median odd length', () => {
      expect(stats.median([1, 2, 3, 4, 5])).toBe(3);
    });
    it('median even length', () => {
      expect(stats.median([1, 2, 3, 4, 5, 6])).toBe(3.5);
    });
    describe('mode', () => {
      it('one mode ', () => {
        expect(stats.mode([1, 2, 2, 2, 3])).toBe(2);
      });
      it('no mode', () => {
        expect(stats.mode([1, 2, 3])).toBe(null);
      });
      it('multiple mode', () => {
        expect(stats.mode([1, 2, 2, 3, 3, 4])).toEqual([2, 3]);
      });
    })
  })
});
