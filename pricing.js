
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
    for (let i = 0; price < bracket[i + 1]?.level; i++) {
         (price - bracket.level[i]) * bracket.rate[i] 
        }
  }
}

module.exports = {
  calculate
};
