let bandA = 145000;
let bandB = 250000;
let bandC = 325000;
let bandD = 750000;

let rateA = 0.02;
let rateB = 0.05;
let rateC = 0.1;
let rateD = 0.12;

function calculate(price) {
  if (isNaN(price) || !Number.isInteger(price)) {
    return "Please enter a full number";
  } else if (price < bandA) {
    return 0;
  } else if (price <= bandB) {
    return Math.floor((price - bandA) * rateA);
  } else if (price <= bandC) {
    return Math.floor((bandB - bandA) * rateA + (price - bandB) * rateB);
  } else if (price <= bandD) {
    return Math.floor((bandB - bandA) * rateA + (bandC - bandB) * rateB + (price - bandC) * rateC);
  } else {
    return Math.floor((bandB - bandA) * rateA + (bandC - bandB) * rateB + (bandD - bandC) * rateC + (price - bandD) * rateD);
  } 
}

module.exports = {
  calculate
};