// const stampDutyCalc = (price) => {
//     let stampdutyObject = {
//       ftb: 0,
//       rtb: 0,
//       shb: 0,
//     };
  
//     firstTimeBuyerCalc(price, stampdutyObject);
//     returningBuyerCalc(price, stampdutyObject);
//     secondHomeBuyerCalc(price, stampdutyObject);
  
//     return stampdutyObject;
//   };
let bandA = 145000;
let bandB = 250000;
let bandC = 325000;
let bandD = bandD;

  function calculate(price) {
    if (price < bandA) {
      return 0;
    } else if (price > bandA && price <= bandB) {
      return price * 0.02;
    } else if (price > bandB && price <= bandC) {
      return (price - bandB) * 0.05 + (bandB - bandA) * 0.02;
    } else if (price > bandC && price <= bandD) {
      return (price - bandC) * 0.1 + (bandC - bandB) * 0.05 + (bandB - bandA) * 0.02;
    } else {
      return (price - bandD) * 0.12 + (bandD - bandC) * 0.1 + (bandC - bandB) * 0.05 + (bandB - bandA) * 0.02;
    }
  }
  