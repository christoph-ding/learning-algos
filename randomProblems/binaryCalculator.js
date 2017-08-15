function binaryCalculator(a, b) {
  var aVal = 0
  var aAsDigits = a.split('')


}

function convertToDecimal(digit, indx) {
  var digitVal = Number(digit) * Math.pow(2, indx + 1)
  return digitVal
}

// var testOne = [1, 11]
// binaryCalculator(testOne[0], testOne[1])

console.log(convertToDecimal('1', 2))
