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
var testOne = '(abc)'
console.log(parensBalanceChecker(testOne)) // true
var testOne = '(abc))'
console.log(parensBalanceChecker(testOne)) // false
var testOne = '('
console.log(parensBalanceChecker(testOne)) // false

