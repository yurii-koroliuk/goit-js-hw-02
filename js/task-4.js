function getShippingCost(country) {
  let deliveryCost = 0;
  switch (country) {
    case 'China':
      deliveryCost = 100;
      return `Shipping to ${country} will cost ${deliveryCost} credits`;
      break;
    case 'Chile':
      deliveryCost = 250;
      return `Shipping to ${country} will cost ${deliveryCost} credits`;
      break;
    case 'Australia':
      deliveryCost = 170;
      return `Shipping to ${country} will cost ${deliveryCost} credits`;
      break;
    case 'Jamaica':
      deliveryCost = 120;
      return `Shipping to ${country} will cost ${deliveryCost} credits`;
      break;
    default:
      return `Sorry, there is no delivery to your country`;
  }
}

console.log(getShippingCost('Australia')); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost('Germany')); // "Sorry, there is no delivery to your country"
console.log(getShippingCost('China')); // "Shipping to China will cost 100 credits"
console.log(getShippingCost('Chile')); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost('Jamaica')); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost('Sweden')); // "Sorry, there is no delivery to your country"
