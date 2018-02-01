function BinaryHeap() {
  this.heap = []
  this.size = 0
}

BinaryHeap.prototype.getMin = function() {
  return this.heap[0] || 'empty heap'
}

BinaryHeap.prototype.insert = function(val) {
  console.log('insert: ', val)
  this.heap[this.size] = val
  this.percUp(this.size)
  this.size = this.size + 1
  console.log('heap after: ', this.heap)
  console.log('===================')
}

BinaryHeap.prototype.percUp = function(indx) {
  let childIndx = indx
  let childValue = this.heap[childIndx]  
  let parentIndx = Math.floor((indx - 1)/ 2)
  let parentValue = this.heap[parentIndx]

  while (childIndx > 0) {
    if (childValue < parentValue) {
      // swap
      this.heap[childIndx] = parentValue
      this.heap[parentIndx] = childValue

      // update
      childIndx = parentIndx
      childValue = this.heap[childIndx]
      parentIndx = Math.floor((childIndx - 1)/ 2)
      parentValue = this.heap[parentIndx]
    } else {
      break
    }
  } 
}

let testBinaryHeap = new BinaryHeap
testBinaryHeap.insert(30)
testBinaryHeap.insert(40)
testBinaryHeap.insert(11)
testBinaryHeap.insert(100)
testBinaryHeap.insert(50)
testBinaryHeap.insert(10)
console.log('min: ', testBinaryHeap.getMin())
