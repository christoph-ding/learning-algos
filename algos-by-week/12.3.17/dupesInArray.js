// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

function dupesInArray(inputArray) {
  const output = []

  inputArray.forEach(function(element) {
    let indexPointedTo = Math.abs(element)
    let valueAtIndexPointTo = inputArray[indexPointedTo - 1]
    console.log(' indexPointedTo: ', indexPointedTo, ' valueAtIndexPointTo: ', valueAtIndexPointTo)

    if (valueAtIndexPointTo < 0) {
      output.push(Math.abs(valueAtIndexPointTo))
    } else {
      inputArray[indexPointedTo] = Math.abs(valueAtIndexPointTo) * -1
    }
  })

  return output
}

// tests
inputOne = [4, 3, 2, 7, 8, 3, 4, 2, 1]

console.log(dupesInArray(inputOne))
