function stockBroker(pricesByDay) {
  let lowestPriceSoFar = null
  let maxProfitSoFar = 0

  pricesByDay.forEach(function(dailyPrice) {
    // first, if there is lowestPriceSoFar
      // do some calculation

    // 2nd, if there is no lowestPriceSoFar or if 
    // the current dailyPrice is lower, set new lowestPriceSoFar 
  })

  return maxProfitSoFar
}

// tests
var pricesOne = [3, 2, 1, 0]
console.log(stockBroker(pricesOne))
