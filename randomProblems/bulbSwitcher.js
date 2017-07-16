function bulbSwitcher(n) {
  // how many perfect squares are between 1 and n, inclusive?
  var numberOfRoots = 0
  var counter = 1

  while (counter <= n) {
    _isSquare(counter)
    counter++
  }

  return numberOfRoots

  function _isSquare(num) {
    var root = Math.sqrt(num)
    if (root % 1 === 0) {
      numberOfRoots++
    }
  }
}

// the entire algorithm
console.log(bulbSwitcher(1)) // 1
console.log(bulbSwitcher(2)) // 1
console.log(bulbSwitcher(3)) // 1
console.log(bulbSwitcher(4)) // 2

// thinking / conjecture

// all bulbs are turned off in 'pairs'
// whenever a bulb I is toggled by the nth run,
// it is toggled again (two toggles 'resets' a bulb)
// by the complement of n.
// the EXCEPTION to this are perfect squares.
// console.log(bulbSwitcher._isSquare(1))



