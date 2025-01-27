const getMaxProfit = (stockPrices) => {
  let minIndex;
  let profit = 0;
  let min = Math.max(...stockPrices);
  let max = 0;

  for (let i = 0; i < stockPrices.length; i++) {
    if (stockPrices[i] < min) {
      min = stockPrices[i];
      minIndex = i;
      max = 0;
      for (let j = minIndex; j < stockPrices.length; j++) {
        if (stockPrices[j + 1] >= max) {
          max = stockPrices[j + 1];
        }
      }
      if (max - min > profit) {
        profit = max - min;
      }
    }
  }

  return profit;
};

console.log(getMaxProfit([7, 1, 5, 3, 6, 4]));
