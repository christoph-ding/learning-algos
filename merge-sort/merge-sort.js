function mergeSorter(list) {
  this.list = list;
};

mergeSorter.prototype.sortList = function(list) {
  
  debugger;

  if (list.length === 1) {
    return list;
  } else {
    // divide the list into two
    var midPoint = Math.floor(list.length / 2);
    
    // sort the 'left' and the 'right' lists
    var leftList = this.sortList(list.slice(0, midPoint));
    var rightList = this.sortList(list.slice(midPoint));    

    // merge the sorted lists
    return this.merge(leftList, rightList);
  }
};

mergeSorter.prototype.merge = function(leftList, rightList) {
  var combinedSortedList = [];

  // compare the smallest element of each list until one list is empty
  while (leftList.length && rightList.length) {
    if (leftList[0] < rightList[0]) {
      combinedSortedList.push(leftList.shift());
    } else if (rightList[0] < leftList[0]) {
      combinedSortedList.push(rightList.shift());
    }
  }

  // take the 'remainder' of whatever list
  if (leftList.length) {
    combinedSortedList = combinedSortedList.concat(leftList);
  }
  if (rightList.length) {
   combinedSortedList = combinedSortedList.concat(rightList); 
  }

  return combinedSortedList;  
}


var testList = [1, 22, 11, 3, 7, 32];
var sorter = new mergeSorter(testList);
console.log(sorter.sortList(sorter.list));

// module.exports = {
//   mergeSorter: mergeSorter
// }
