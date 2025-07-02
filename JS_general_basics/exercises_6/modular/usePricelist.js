import { setPriceList, getPrice, examplePriceList } from './pricelist.js';

setPriceList(examplePriceList);

console.log(getPrice(1, 150));
console.log(getPrice(2, 60));
console.log(getPrice(1, 5));
