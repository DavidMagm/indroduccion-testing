const {sum, multiply, divide, par} = require('./02-math_test');

test("adds 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});


test('multiply two numbers', () => {
    expect(multiply(2, 2)).toBe(4);
});


test('divide 6 and 3', () => {
    expect(divide(6, 3)).toBe(2);
});


test('show number par', () => {
    expect(par(8, 2)).toBe(0);
});
