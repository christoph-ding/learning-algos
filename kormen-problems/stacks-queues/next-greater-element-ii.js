function nextGreaterElement (inputList) {
  let output = []
  let helperStack = []

  inputList.forEach(function(num, indx) {
    while (helperStack.length > 0) {
      let stackTopIndex = helperStack.length - 1
      let topPlace = helperStack[stackTopIndex]
      if (num > topPlace.val) {

      } else {
        
      }
    }

  })

  return output
}

// tests
let inputOne = [1, 2, 1]
console.log(nextGreaterElement(inputOne)) // [2, -1, 2]
