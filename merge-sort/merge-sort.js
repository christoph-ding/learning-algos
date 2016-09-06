function mergeSorter(list) {
  this.list = list;
  this.something = 'something';
};

mergeSorter.prototype.sortList = function() {
};

module.exports = {
  mergeSorter: mergeSorter
}
