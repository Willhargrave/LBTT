const bracket = [145000, 250000, 325000, 750000, Infinity]


function calculator(price) {
  if(price <= 145000) {
    return 0;
  } else if (price > 145000 && price <= 250000){
    return price * 0.02;
  } else if (price > 250000 && price <= 325000) {
    return (price - 250000) * 0.05 + (250000 - 125000) * 0.02;
  } else if (price > 325000 && price <= 750000) {
    return (price - 325000) * 0.1 + (325000 - 250000) * 0.05 + (250000 - 125000) * 0.02;
  } else {
    return (price - 750000) * 0.12 + (750000 - 325000) * 0.1 + (325000 - 250000) * 0.05 + (250000 - 125000) * 0.02
  }
}