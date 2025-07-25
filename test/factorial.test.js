const factorial = require('./factorial');

test('0! is 1', () => {
  expect(factorial(0)).toBe(1);
});

test('5! is 120', () => {
  expect(factorial(5)).toBe(120);
});

test('negative input throws error', () => {
  expect(() => factorial(-1)).toThrow('Negative input not allowed');
});
