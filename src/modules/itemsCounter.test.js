import itemsCounter from './itemsCounter.js';

describe('Items Counter', () => {
  test('Array Length should be 0', () => {
    const arr = [];
    expect(itemsCounter(arr)).toBe(0);
  });

  test('Array Length should be 6', () => {
    const arr = [1, 2, 3, 4, 5, 6];
    expect(itemsCounter(arr)).toBe(6);
  });
});
