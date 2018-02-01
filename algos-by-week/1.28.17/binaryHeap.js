function BinaryHeap() {
  this.heap = []
  this.size = 0
}

BinaryHeap.prototype.getMin = function() {
  return this.heap[0] || 'empty heap'
}

BinaryHeap.prototype.insert = function(val) {
  this.heap[this.size] = val
  this.percUp(this.size)
  this.size = this.size + 1
}

BinaryHeap.prototype.extract = function() {
  const minimum = this.getMin()

  // make the last element the root
  this.heap[0] = this.heap[this.size - 1]
  this.heap[this.size - 1] = null
  this.size = this.size - 1

  // percDown
  this.percDown()
  return minimum
}

BinaryHeap.prototype.percDown = function() {
  let calc = () => {
    parentValue = this.heap[parentIndx]

    lcIndx = parentIndx * 2 + 1
    lcValue = this.heap[lcIndx]

    rcIndx = parentIndx * 2 + 2
    rcValue = this.heap[rcIndx]

    if (!(rcValue) || lcValue < rcValue) {
      oneToUseIndx = lcIndx
      oneToUseValue = lcValue
    } else {
      oneToUseIndx = rcIndx
      oneToUseValue = rcValue
    }
  }

  let parentIndx = 0
  let parentValue = null
  let lcIndx = null
  let lcValue = null
  let rcIndx = null
  let rcValue = null
  let oneToUseIndx = null
  let oneToUseValue = null

  calc()

  // compare parent to small child, swap if neccesary, until no swap is made, or parent is a leaf
  while (lcValue) {
    if (parentValue > oneToUseValue) {
      // swap
      this.heap[parentIndx] = oneToUseValue
      this.heap[oneToUseIndx] = parentValue

      parentIndx = oneToUseIndx
    } else {
      break
    }
    calc()
  }

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
testBinaryHeap.insert(7)
testBinaryHeap.insert(3)
console.log(testBinaryHeap)

console.log("extracted min: ", testBinaryHeap.extract())
console.log(testBinaryHeap)

console.log("extracted min: ", testBinaryHeap.extract())
console.log(testBinaryHeap)

console.log("extracted min: ", testBinaryHeap.extract())
console.log(testBinaryHeap)
