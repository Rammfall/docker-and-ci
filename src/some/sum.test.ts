import sum from './sum';

describe('Test sum function', () => {
  test('Test subtest', () => {
    const result: number = sum(5, 5);

    expect(result).toEqual(10);
  });
});
