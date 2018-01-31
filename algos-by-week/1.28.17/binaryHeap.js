function BinaryHeap() {
  this.heap = [0, 1]
}

BinaryHeap.prototype.getMin = function() {
  return this.heap[0]
}

let testBinaryHeap = new BinaryHeap
console.log(testBinaryHeap.getMin())
