function bubbleSorter(list) {
  this.list = list;
};

bubbleSorter.prototype.run = function() {
  var sortedList = this.sortList(this.list);
  return sortedList;
}

bubbleSorter.prototype.sortList = function(list) {

  // did we make any swaps?
  var swapped = false;

  // compare each element to the 'next' element in the list
  var currentIndex = 0;
  var listLastIndex = list.length - 1;

  // compare until currentIndex is the last element
  while (currentIndex < listLastIndex) {
    var currentValue = list[currentIndex];
    var nextValue = list[currentIndex + 1];

    if ( currentValue > nextValue ) {
      list = this.swap(list, currentIndex, currentIndex + 1);
      // we swapped this time
      swapped = true;
    }
    currentIndex++;
  };

  // we are done if we went through an entire pass without swapping ?
  if (swapped) {
    return this.sortList(list);
  } else {
    return list;
  }

};

bubbleSorter.prototype.swap = function(list, firstIndex, secondIndex) {
  // first we 'remember' the element in the secondIndex position
  var temp = list[secondIndex];
  // then, set the secondIndex element to firstIndex element
  list[secondIndex] = list[firstIndex];
  // finally, set the firstIndex element to original 'remembered' element
  list[firstIndex] = temp;
  return list;
};

module.exports = {
  bubbleSorter: bubbleSorter
}
