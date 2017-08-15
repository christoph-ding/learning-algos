function binaryCalculator(a, b) {
  var aVal = 0
  var aAsDigits = a.split('')

  var bVal = 0
  var bAsDigits = b.split('')

  aAsDigits.forEach(function(digit, indx) {
    var digitVal = convertToDecimal(digit, indx + 1)
    aVal += digitVal
  })

  console.log(aVal)
}

function convertToDecimal(digit, twosPlace) {
  var digitVal = Number(digit) * Math.pow(2, twosPlace)
  return digitVal
}

var testOne = ['11', '11']
binaryCalculator(testOne[0], testOne[1])
