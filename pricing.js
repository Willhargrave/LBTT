let bandA = 145000;
let bandB = 250000;
let bandC = 325000;
let bandD = 750000;
let bandE = 1000000;

let rateA = 0.02;
let rateB = 0.05;
let rateC = 0.1;
let rateD = 0.12;
let rateE = 0.15;
// Put the bands and the rates in an object
const rate = (level, tax) => ({level, tax});
const bracket = {
  bandA: rate(145000, 0.02),
  bandB: rate(250000, 0.05),
  bandC: rate(325000, 0.1),
  bandD: rate(750000, 0.12)
}
function calculate(price) {
  if (isNaN(price, bracket) || !Number.isInteger(price)) {
    return "Please enter a full number";
  }  else if (price < bandA) {
    return 0;
  } else {
    for (let i = 0; i < bracket.length; i++) {
       //(price - bandA) * 0.02
    }
  }
  //for loop where the price is lower than each band
  //inside the for loop minus the price from the band and then times it by the rate
  // else if (price <= bandB) {
  //   return Math.floor((price - bandA) * rateA);
  // } else if (price <= bandC) {
  //   return Math.floor((bandB - bandA) * rateA + (price - bandB) * rateB);
  // } else if (price <= bandD) {
  //   return Math.floor((bandB - bandA) * rateA + (bandC - bandB) * rateB + (price - bandC) * rateC);
  // } else if (price <= bandE) {
  //   return Math.floor((bandB - bandA) * rateA + (bandC - bandB) * rateB + (bandD - bandC) * rateC + (price - bandD) * rateD);
  // }  else {
  //   return Math.floor((bandB - bandA) * rateA + (bandC - bandB) * rateB + (bandD - bandC) * rateC + (price - bandD) * rateD + (price - bandE) * rateE);
  // } 
}

module.exports = {
  calculate
};