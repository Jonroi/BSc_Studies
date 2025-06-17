const batch = {
  batchId: String,
  weightInOunces: Number,
  weightInGrams: Number,
};

const getBatchId = (batch) => {
  return batch.batchId;
};

const getWeightInOunces = (batch) => {
  return batch.weightInOunces;
};

const setWeightInGrams = (batch, weightInGrams) => {
  batch.weightInGrams = weightInGrams;
};

const convertOuncesToGrams = (measurements) => {
  return measurements.map((measurement) => {
    if (measurement.unit === 'ounce') {
      return {
        batchid: measurement.batchid,
        unit: 'gram',
        weight: Number((measurement.weight * 28.3495).toFixed(2)),
      };
    }
    return {
      batchid: measurement.batchid,
      unit: 'gram',
      weight: Number(measurement.weight.toFixed(2)),
    };
  });
};

const measurements = [
  { batchid: 434, unit: 'ounce', weight: 12.21 },
  { batchid: 414, unit: 'gram', weight: 199.54 },
  { batchid: 522, unit: 'ounce', weight: 18.88 },
];

console.log(JSON.stringify(convertOuncesToGrams(measurements), null, 0));
