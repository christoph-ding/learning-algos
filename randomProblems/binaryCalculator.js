function binaryCalculatorOne(a, b) {
  var aAsDigits = a.split('')
  var bAsDigits = b.split('')

  var aVal = 0
  var bVal = 0

  aAsDigits.forEach(function(digit, indx) {
    var digitVal = convertToDecimal(digit, indx)
    aVal += digitVal
  })

  bAsDigits.forEach(function(digit, indx) {
    var digitVal = convertToDecimal(digit, indx)
    bVal += digitVal
  })
 
  var sumAsDecimal = aVal + bVal
  var sumAsBinary = convertToBinary(sumAsDecimal)
  return sumAsBinary
}

// helper functions
function convertToDecimal(digit, twosPlace) {
  var digitVal = Number(digit) * Math.pow(2, twosPlace)
  return digitVal
}

function convertToBinary(number) {
  var remainder = number
  var answer = []

  while (remainder > 0) {
    var highestCanGetWithPowersOfTwo = Math.floor(Math.log2(remainder))
    answer[highestCanGetWithPowersOfTwo] = '1'
    remainder = remainder - Math.pow(2, highestCanGetWithPowersOfTwo)
  }

  answer.reverse()

  for (var i = 0; i < answer.length; i++ ) {
    if (answer[i] === undefined) {
      answer[i] = '0'
    }
  }
  return String(answer.join(''))
}

// test for binaryCalculatorOne
var testOne = ['111', '11']
// console.log(binaryCalculatorOne(testOne[0], testOne[1]))

function binaryCalculatorTwo(a, b) {
  var aAsDigits = a.split('').reverse()
  var bAsDigits = b.split('').reverse()
  var longestNumberLength = Math.max(aAsDigits.length, bAsDigits.length)

  var sum = ''
  var carryOne = false

  // iterate through each digit index, adding 
  for (var i = 0; i < longestNumberLength; i++) {
    var aBinary = Number(aAsDigits[i] || 0)
    var bBinary = Number(bAsDigits[i] || 0)
    var sumBinary = aBinary + bBinary + carryOne

    if (sumBinary > 1) {
      sumBinary = 0
      carryOne = true
    } else {
      carryOne = false
    }
    sum = sum + sumBinary
  }

  if (carryOne) {
    sum = '1' + sum
  }

  return sum
  
}

// test for binaryCalculatorTwo
var testOne = ['11', '1']
binaryCalculatorTwo(testOne[0], testOne[1])
