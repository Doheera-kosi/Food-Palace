import commentCounter from './commentCounter.js';

describe('CommentCounter', () => {
  test('Array Length should be 0', () => {
    const arr = [];
    expect(commentCounter(arr)).toBe(0);
  });

  test('Array Length should be 4', () => {
    const arr = [1, 2, 3, 4];
    expect(commentCounter(arr)).toBe(4);
  });
});
