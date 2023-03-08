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
  function calculate(price) {
    if (price <= 145000) {
      return 0;
    } else if (price > 145000 && price <= 250000) {
      return price * 0.02;
    } else if (price > 250000 && price <= 325000) {
      return (price - 250000) * 0.05 + (250000 - 145000) * 0.02;
    } else if (price > 325000 && price <= 750000) {
      return (price - 325000) * 0.1 + (325000 - 250000) * 0.05 + (250000 - 145000) * 0.02;
    } else {
      return (price - 750000) * 0.12 + (750000 - 325000) * 0.1 + (325000 - 250000) * 0.05 + (250000 - 145000) * 0.02;
    }
  }
  