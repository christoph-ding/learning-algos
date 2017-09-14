function parensBalanceChecker(inputString) {
  var helperStack = []
  var balancedSoFar = true

  inputString.split('').some(function(character) {
    if (character === '(') {
      helperStack.push(character)
    } else if (character === ')') {
      // 'peek' at the top of helperStack
      var stackPeek = helperStack.slice(-1).pop()
      if (stackPeek !== '(') {
        balancedSoFar = false
        return true
      } else {
        helperStack.pop()
      }
    }
  })

  if (helperStack.length) {
    balancedSoFar = false
  }

  return balancedSoFar

}

// test
var testOne = 'abc' 
console.log(parensBalanceChecker(testOne)) // true
var testTwo = '(abc)'
console.log(parensBalanceChecker(testTwo)) // true
var testThree = '(abc))'
console.log(parensBalanceChecker(testThree)) // false
var testFour = '('
console.log(parensBalanceChecker(testFour)) // false
var testFive = '(()('
console.log(parensBalanceChecker(testFive)) // false
var testSix = ''
console.log(parensBalanceChecker(testSix)) // true
