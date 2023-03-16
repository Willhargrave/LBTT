
// Put the bands and the rates in an object
const rate = (level, tax) => ({level, tax});
const bracket = {
  bandA: rate(145000, 0.02),
  bandB: rate(250000, 0.05),
  bandC: rate(325000, 0.1),
  bandD: rate(750000, 0.12)
}
function calculate(price, bracket) {
  if (isNaN(price) || !Number.isInteger(price)) {
    return "Please enter a full number";
  }  else if (price < bandA.level) {
    return 0;
  } else {
    for (let i = 0; price < bracket.level[i + 1]; i++) {
         (price - bracket.level[i]) * bracket.rate[i] 
        }
  }
}

module.exports = {
  calculate
};