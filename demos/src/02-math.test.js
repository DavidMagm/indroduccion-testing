const {sum,multiply,divide,par} = require('./02-math');

test("adds 1 + 3 should be 4", () => {
    let res = sum(1,3);
    expect(res).toBe(4)
});

test("should be 4", () => {
    let res = multiply(2,2);
    expect(res).toBe(4)
});

test("divide 6 in 3", () => {
    let res = divide(6,3);
    expect(res).toBe(2)
});

test("divide 6 in 3", () => {
    let res = par(6,0);
    expect(res).toBeNull()
});