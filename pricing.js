
// Put the bands and the rates in an object
const bracket = [
  { level: 145000, tax: 0.02 },
  { level: 250000, tax: 0.05 },
  { level: 325000, tax: 0.1 },
  { level: 750000, tax: 0.12 }
];
function calculate(price) {
  if (isNaN(price) || !Number.isInteger(price) || price < 0) {
    return "Please enter a full number";
  }  else if (price < bracket[0].level)  {
    return 0;
  } else {
    let tax = 0;
    for (let i = 0; i < bracket.length && price >= bracket[i]?.level; i++) {
      const bandPrice = Math.min(price, bracket[i + 1]?.level ?? Infinity) - bracket[i].level;
      const bandTax = bandPrice * bracket[i].tax;
      tax += bandTax;
        }
      return Math.floor(tax);
  }
}

module.exports = {
  calculate
};
