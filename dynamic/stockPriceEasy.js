function stockEasy(prices) {
  var maxProfit = 0;
  var minPrice = prices[0];

  for (var i = 1; i < prices.length; i++) {
    var currentPrice = prices[i];
    var currentMaxProfit = currentPrice - minPrice;

    minPrice = Math.min(currentPrice, minPrice);
    maxProfit = Math.max(currentMaxProfit, maxProfit);

  }

  return maxProfit;
}

// tests
var listOne = [9, 10, 21, 4, 7, 23];
var listTwo = [22, 24, 14, 6, 28, 10];

console.log(stockEasy(listOne));
console.log(stockEasy(listTwo));
