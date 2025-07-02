let pricelist = [
  {
    itemid: 1,
    itemname: 'bottle',
    prices: [
      { qty: 1, price: 1.25 },
      { qty: 100, price: 1.1 },
      { qty: 1000, price: 1.0 },
    ],
  },
  {
    itemid: 2,
    itemname: 'glass',
    prices: [
      { qty: 1, price: 2.5 },
      { qty: 50, price: 2.0 },
      { qty: 200, price: 1.6 },
    ],
  },
];

const setPriceList = (thePriceList) => {
  pricelist = thePriceList;
};

const getPrice = (itemId, quantity) => {
  const item = pricelist.find((item) => item.itemid === itemId);
  if (!item) return undefined;
  const priceObj = item.prices
    .filter((p) => p.qty <= quantity)
    .sort((a, b) => b.qty - a.qty)[0];
  if (!priceObj) return undefined;
  return +(quantity * priceObj.price).toFixed(2);
};

module.exports = { pricelist, setPriceList, getPrice };
