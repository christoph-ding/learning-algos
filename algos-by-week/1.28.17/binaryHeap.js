function BinaryHeap() {
  this.heap = [0]
  this.size = 0
}

BinaryHeap.prototype.getMin = function() {
  return this.heap[0]
}

BinaryHeap.prototype.insert = function(val) {
  let lastIndex = 
  this.heap[this.size + 1]
}

let testBinaryHeap = new BinaryHeap
console.log(testBinaryHeap.getMin())
