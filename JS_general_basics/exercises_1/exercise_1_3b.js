const deposits = [12.11, 34.22, 31.95, 50.0, 22.5, 200.0];

const sumDepositsWhileLessThan100 = (deposits) => {
  let sum = 0;

  for (let i = 0; i < deposits.length; i++) {
    if (sum < 100) {
      sum += deposits[i];
      console.log(`Adding ${deposits[i]}, new sum: ${sum.toFixed(2)}`);
    } else {
      console.log(
        `Sum ${sum.toFixed(2)} is >= 100, stopping before adding {
          deposits[i]
        }`,
      );
      break;
    }
  }

  return sum;
};

console.log('Deposits array:', deposits);
