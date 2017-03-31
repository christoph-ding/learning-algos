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
  var combinedSorted = [];

  while (listOne.length && listTwo.length) {
    // compare the leftmost - and therefore, smallest of each sorted list
    var listOneFirst = listOne[0];
    var listTwoFirst = listTwo[0];

    if (listOneFirst < listTwoFirst) {
      combinedSorted.push(listOne.shift());
    } else if (listTwoFirst < listOneFirst) {
      combinedSorted.push(listTwo.shift());
    }
  }

  // put the 'rest' of one of the lists into combinedSorted
  if (listOne.length === 0) {
    while (listTwo.length) {
      combinedSorted.push(listTwo.shift());
    }
  } else if (listTwo.length === 0 ) {
    while (listOne.length) {
      combinedSorted.push(listOne.shift());
    }
  }

  return combinedSorted
};

// the tests
var listOne = [1]; // 1
var listTwo = [3, 2, 1]; // [3, 2, 1]
var listThree = [10, 11, 3, 4, 9, 2, 5]; // [2, 3, 4, 5, 9, 10, 11]

// test functions seperately
var sortOne = [1, 3, 5];
var sortTwo = [ 2, 4, 9];
var sortThree = [6, 7, 11, 12];

console.log(combine(sortOne, sortTwo));
