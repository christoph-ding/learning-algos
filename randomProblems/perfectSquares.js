function perfectSquares(target) {
  var root = 1;
  if (Math.sqrt(target) % 1 === 0) {
    return 1;
  }

  while (++root < Math.sqrt(target)) {
    var square = root * root;
    if (target % square === 0) {
      return 1 + perfectSquares(target - square);
    }
  }
  return 1 + perfectSquares(target - square);
}

// test cases
answerOne = perfectSquares(25)
answerTwo = perfectSquares(26)
answerThree = perfectSquares(12)
answerFour = perfectSquares(18)

console.log(answerOne) // 1
console.log(answerTwo) // 2
console.log(answerThree) // 3
console.log(answerFour) // 2
