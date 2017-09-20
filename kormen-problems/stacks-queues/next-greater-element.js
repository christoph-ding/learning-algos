function nextGreaterElement (inputList) {
  var helperStack = []
  var output = []

  function check(num) {
    console.log(num)
  }

  inputList.forEach(function(num) {
    check(num)
  })

  return output
}

// tests
var listOne = [1,2,3,2]
console.log(nextGreaterElement(listOne))
