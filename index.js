let bandA = 145000;
let bandB = 250000;
let bandC = 325000;
let bandD = 750000;

let rateA = 0.02;
let rateB = 0.05;
let rateC = 0.1;
let rateD = 0.12;
  function calculate(price) {
    if (price < bandA) {
      return 0;
    } else if (price > bandA && price <= bandB) {
      return price * rateA;
    } else if (price > bandB && price <= bandC) {
      return (price - bandB) * rateB + (bandB - bandA) * rateA;
    } else if (price > bandC && price <= bandD) {
      return (price - bandC) * rateC + (bandC - bandB) * rateB + (bandB - bandA) * rateA;
    } else {
      return (price - bandD) * rateD + (bandD - bandC) * rateC + (bandC - bandB) * rateB + (bandB - bandA) * rateA;
    }
  }
  