function maxSubArray(numberList) {
  // we use a helper queue
  var helper = [];

  // iterate through the numberList
  for (var i = 0; i < numberList.length; i++) {
    var currentNumber = numberList[i];

    // apply Kidane's algorithm
    if (i === 0) {
      var numberToAddToHelper = currentNumber;
    } else {
      var previousMaxSum = helper[i - 1];
      // add to the helped queue based upon a comparison
      // either add the currentNumber number to the current run sum, or start a new run
      var numberToAddToHelper = Math.max(previousMaxSum + currentNumber, currentNumber);
    }
    helper.push(numberToAddToHelper);
  }



  // go through the helper queue and find the max

}

// tests
var listOne = [-1, 5, 4, -2, 10, -1];
var listTwo = [-10, 23, 100, -30, 24, 93, 1, -9, 23, -4, 11];

var maxOne = maxSubArray(listOne);
