function stockBroker(pricesByDay) {
  let lowestPriceSoFar = null
  let maxProfitSoFar = 0

  pricesByDay.forEach(function(dailyPrice) {
    // first, if there is lowestPriceSoFar
      // do some calculation
    if (lowestPriceSoFar !== null) {
      let profit = dailyPrice - lowestPriceSoFar
      // replace maxProfitSoFar?
      if (profit > maxProfitSoFar) {
        console.log('replace: ', maxProfitSoFar, ' with: ', profit)
        maxProfitSoFar = profit
      }
    }

    if (lowestPriceSoFar === null || dailyPrice < lowestPriceSoFar) {
      console.log('new lowestPriceSoFar: ', lowestPriceSoFar, ' new: ', dailyPrice)
      lowestPriceSoFar = dailyPrice
    }
  })

  return maxProfitSoFar
}

// tests
var pricesOne = [3, 2, 1, 0]
console.log(stockBroker(pricesOne)) // return 0, because you should not buy

var pricesTwo = [1, 2, 3, 4]
console.log(stockBroker(pricesTwo))
