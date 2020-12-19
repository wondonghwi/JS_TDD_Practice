const stats = require('./stats');

describe('stats', () => {
  it('get max value', () => {
    expect(stats.max([1, 2, 3, 4])).toBe(4);
  });
  it('get mit value', () => {
    expect(stats.min([1, 2, 3, 4])).toBe(1);
  });
});
