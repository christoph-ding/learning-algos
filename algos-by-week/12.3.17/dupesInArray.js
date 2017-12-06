// https://leetcode.com/problems/find-all-duplicates-in-an-array/description/

function dupesInArray(inputArray) {
  const output = []

  inputArray.forEach(function(element) {
    let indexPointedTo = Math.abs(element)
    let valueAtIndexPointTo = inputArray[indexPointedTo - 1]

    if (valueAtIndexPointTo < 0) {
      output.push(Math.abs(element))
    } else {
      inputArray[indexPointedTo - 1] = Math.abs(valueAtIndexPointTo) * -1
    }
  })

  return output
}

// tests
inputOne = [4, 3, 2, 7, 8, 3, 4, 2, 1]
inputTwo = [1, 1, 2, 3, 3, 4]
console.log(dupesInArray(inputOne))
console.log(dupesInArray(inputTwo))
