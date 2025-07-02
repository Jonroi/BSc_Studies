const { pricelist, setPriceList, getPrice } = require('./pricelist');

setPriceList(pricelist);

console.log(getPrice(1, 100));
console.log(getPrice(2, 50));
console.log(getPrice(1, 1000));
