// the function
function mergeSort(list) {

  // if the list is more than a single element, break it apart
    if (list.length > 1) {
      // left and right half of the list
      var halfIndex = Math.floor(list.length / 2);
      var left = list.slice(0, halfIndex);
      var right = list.slice(halfIndex);

      // recursion!
      var sortedLeft = mergeSort(left);
      var sortedRight = mergeSort(right);

      // merge the two
      var mergedSortedList = combine(sortedLeft, sortedRight);
    } else if (list.length === 1) {
      return list;
    }
};

function combine(listOne, listTwo) {
  
  // output is the sorted combination of both input lists
  var output = [];

  // 


};

// the tests
var listOne = [1]; // 1
var listTwo = [3, 2, 1]; // [3, 2, 1]
var listThree = [10, 11, 3, 4, 9, 2, 5]; // [2, 3, 4, 5, 9, 10, 11]
