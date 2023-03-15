const pricing = require("./pricing.js");

test('given 100000 to return 0', () => {
  expect(pricing.calculate(100000)).toBe(0);
});

test('given 400000 to return 13350', () => {
  expect(pricing.calculate(400000)).toBe(13350);
});

test('given 657894 to return 39139', () => {
  expect(pricing.calculate(657894)).toBe(39139);
});

test('given 1200000 to return 102350', () => {
  expect(pricing.calculate(1200000)).toBe(102350);
});
test('given hello to return please enter a full number', () => {
    expect(pricing.calculate("hello")).toBe("Please enter a full number");
})
test('give -5 to return please enter a full number', () => {
  expect(pricing.calculate(-5)).toBe("Please enter a full number");
})
test('given 20.2 to return please enter a full number', () => {
    expect(pricing.calculate(20.2)).toBe("Please enter a full number");
})