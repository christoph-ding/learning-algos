function nextGreaterElement (inputList) {
  // this is the 
  var helperStack = []
  var output = new Array(inputList.length)

  inputList.forEach(function(currentElem, indx) {
    var nextElem = inputList[indx + 1]
    if (nextElem > currentElem) {
      output[indx] = nextElem
    } else {
      var helperPlate = {'elem': currentElem, 'indx': indx}
      helperStack.push(helperPlate)
    }
  })

  for (var i = 0; i < output.length; i++) {
    if (output[i] === undefined) {
      output[i] = -1
    }
  }

  console.log(helperStack)
  return output
}

// tests
var listOne = [1,2,3,2]
console.log(nextGreaterElement(listOne))
