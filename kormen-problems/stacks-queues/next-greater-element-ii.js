function nextGreaterElement (inputList) {
  let output = new Array(inputList.length)
  let helperStack = []

  inputList.forEach(function(num, indx) {
    while (helperStack.length > 0) {
      let stackTopIndex = helperStack.length - 1
      let topPlace = helperStack[stackTopIndex]
      if (num > topPlace.val) {
        output[topPlace.indx] = num
        helperStack.pop()
      } else {
        break
      }
    }
    let newPlate = {'val': num, 'indx': indx}
    helperStack.push(newPlate)
  })

  // the largest plate is the 'bottom' plate in the helperStack
  let largestValInHelper = helperStack.shift().val

  for (var i = 0; i < output.length; i++) {
    if (largestValInHelper > inputList[i]) {
      output[i] = largestValInHelper
    } else {
      output[i] = -1
    }
  }

  return output
}

// tests
let inputOne = [1, 2, 1]
console.log(nextGreaterElement(inputOne)) // [2, -1, 2]

let inputTwo = [1, 1, 1]
console.log(nextGreaterElement(inputTwo)) // [-1, -1, -1]

let inputThree = [3, 2, 3]
console.log(nextGreaterElement(inputThree)) // [-1, 3, -1]

let inputFour = [3, 2, 1]
console.log(nextGreaterElement(inputFour)) // [-1, 3, 3]

let inputFive = [3, 2, 1, 4]
console.log(nextGreaterElement(inputFive)) // [4, 4, 4, -1]
