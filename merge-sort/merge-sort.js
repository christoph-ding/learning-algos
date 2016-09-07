function mergeSorter(list) {
  this.list = list;
  this.something = 'something';
  this.pieces;
};

mergeSorter.prototype.run = function() {
  var pieces = this.breakApart(this.list);
  return pieces;
}

mergeSorter.prototype.sortList = function(list) {
};

mergeSorter.prototype.breakApart = function(list) {
  if (list.length === 1) {
    return list;
  } else {
    // divide the list into two
    var midPoint = Math.floor(list.length / 2);
    var leftList = list.slice(0, midPoint);
    var rightList = list.slice(midPoint);
    // break apart the 'left' and the 'right'
    list.push(this.breakApart(leftList), this.breakApart(rightList));
  }
}

var breakApart = function(list) {
  debugger;
  if (list.length === 1) {
    return list;
  }
}

var testList = [4];
console.log(breakApart(testList));

// var testList = [4,3,2,1];
// var testSorter = new mergeSorter(testList);
// var output = testSorter.run(testList);
// console.log(output);

module.exports = {
  mergeSorter: mergeSorter
}
