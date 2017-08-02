function makeChange(coins, target) {

  // we should start using the large numbers first
  var sortedCoins = coins.sort().reverse()

  function inner(newTarget) {
    for (var i = 0; i < sortedCoins.length; i++) {
      var coin = sortedCoins[i]
      var difference = newTarget - coin
      if (difference > 0) {
        var numberOfOtherCoins = 1 + inner(difference)
        return numberOfOtherCoins
      } else if (difference == 0) {
        return 1
      }
    }
  }

  var answer = inner(target)
  if (isNaN(answer)) {
    return -1
  } else {
    return answer
  }
}

// tests
var targetOne = 26
var coinsOne = [1,5]

var runOne = makeChange(coinsOne, targetOne)
console.log(runOne)
