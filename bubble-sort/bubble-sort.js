function bubbleSorter(list) {
  this.list = list;
};

bubbleSorter.prototype.run = function() {
  var sortedList = this.sort(this.list);
  return sortedList;
}

bubbleSorter.prototype.sort = function(list) {

};


module.exports = {
  bubbleSorter: bubbleSorter
}
