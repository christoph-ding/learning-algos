function nextGreaterElement(inputList) {
  // two helper stacks
  var stackOne = [];
  var stackTwo = [];
  
  var output = [];

  // iterate through the list backwards
  for (var i = 0; i < inputList.length; i++) {
    var currentNum = inputList[i];
    stackOne.push(currentNum);
  }

  // the 

  // iterate forward through the helper stack


  console.log(stackOne);

}

// tests
var listOne = [4, 5, 2, 25] // [5, 25, 25, -1]
var listTwo = [1, 2, 3, 4, 25] // [2, 3, 4, 25, -1]

nextGreaterElement(listOne);
