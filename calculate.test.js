const javascript = require("./pricing.js");


test('given 100000 to return 0', () => {
    expect(javascript.calculate(100000).toBe(0))
});

test('given 400000 to return 13350', () => {
    expect(javascript.calculate(400000).toBe(13350))
});

test('given 657894 to return 39139', () => {
    expect(javascript.calculate(657894).toBe(39139))
});

test('given 1200000 to return 102350', () => {
    expect(javascript.calculate(1200000).toBe(102350))
});