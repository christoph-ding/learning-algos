function nextGreaterElement (inputList) {
  // this is the 
  var helperStack = []
  var output = new Array(inputList.length)

  inputList.forEach(function(currentElem, indx) {

    while (helperStack.length > 0) {
      var topPlate = helperStack[helperStack.length - 1]
      if (currentElem > topPlate.val) {
        helperStack[topPlate.indx] = currentElem
        helperStack.pop()
      } else {
        break
      }
    }

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
  
  return output
}

// tests
var listOne = [121,3,6,5,11, 21]
console.log(nextGreaterElement(listOne))
