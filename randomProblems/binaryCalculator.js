function binaryCalculatorOne(a, b) {
  var aVal = 0
  var aAsDigits = a.split('')

  var bVal = 0
  var bAsDigits = b.split('')

  aAsDigits.forEach(function(digit, indx) {
    var digitVal = convertToDecimal(digit, indx)
    aVal += digitVal
  })

  bAsDigits.forEach(function(digit, indx) {
    var digitVal = convertToDecimal(digit, indx)
    bVal += digitVal
  })
 
  var sumAsDecimal = aVal + bVal
  console.log(sumAsDecimal)
}

function convertToDecimal(digit, twosPlace) {
  var digitVal = Number(digit) * Math.pow(2, twosPlace)
  return digitVal
}

// test for binaryCalculatorOne
var testOne = ['111', '11']
binaryCalculatorOne(testOne[0], testOne[1])


function binaryCalculatorTwo(a, b) {
  var aAsDigits = a.split('').reverse()
  var bAsDigits = b.split('').reverse()
  var longestNumberLength = Math.max(aAsDigits.length, bAsDigits.length)

  var sum = '' 

  // iterate through each digit index, adding 

  // testing
  console.log(aAsDigits)
  console.log(bAsDigits)
  console.log(longestNumberLength)
}

// test for binaryCalculatorTwo
// var testOne = ['11', '1']
// binaryCalculatorTwo(testOne[0], testOne[1])
