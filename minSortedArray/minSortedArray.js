// Suppose a sorted array is rotated at some pivot unknown to you beforehand.

// (i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

// Find the minimum element.

var minSortedArray = function(list) {
  var leftIndex = 0;
  var rightIndex = list.length - 1;
  var midPointIndex = Math.floor(leftIndex + rightIndex / 2);

  




  return midPointIndex;
}

var testList = [4, 5, 6, 7, 0, 1, 2];
var answer = minSortedArray(testList);

console.log(answer);
