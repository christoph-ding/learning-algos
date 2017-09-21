// with overflow and no sizing ...
function QueueWithArray(initialSize) {
  this.front = 1
  this.back = 1
  this.size = 0

  // we initialize the array to an arbitrary number
  this.arrayInitialSize = initialSize || 1
  this.array = Array(this.arrayInitialSize + 1)
}

QueueWithArray.prototype.isEmpty = function() {
  return this.size === 0
}

QueueWithArray.prototype.isFull = function() {
  return this.size === this.arrayInitialSize
}

QueueWithArray.prototype.enqueue = function(val) {
  // will it overflow?
  if (this.isFull()) {
    return 'overflows'
  } else {
    this.array[this.back] = val
    // then increment, 'circling' if we need to
    if (this.back === this.arrayInitialSize + 1) {
      this.back = 1
    } else {
      this.back = this.back + 1
    }
    this.size = this.size + 1
  }
}

QueueWithArray.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return 'underflow'
  } else {
    var dequeued = this.array[this.front]
    this.array[this.front] = undefined
    // then increment, 'circling' if we need to
    if (this.front === this.arrayInitialSize + 1) {
      this.front = 1
    } else {
      this.front = this.front + 1
    }
    this.size = this.size - 1
    return dequeued
  }
}

// tests
var queueOne = new QueueWithArray(5)
console.log(queueOne.dequeue()) // underflow
queueOne.enqueue(1)
queueOne.enqueue(2)
queueOne.enqueue(3)
console.log(queueOne.dequeue()) // 1
console.log(queueOne.dequeue()) // 2
console.log(queueOne.dequeue()) // 3
console.log(queueOne.dequeue()) // underflow
console.log(queueOne)





function QueueWithArrayResizing() {
  this.front = 0
  this.rear = 0
  // we initialize the array to an arbitrary number
  var arrayInitialSize = 10
  this.array = Array(arrayInitialSize)
}

QueueWithArrayResizing.prototype.isEmpty = function() {
  return this.front === this.rear
}


QueueWithArrayResizing.prototype.shouldLoop = function(marker) {
  return marker === this.array.length - 1
}

QueueWithArrayResizing.prototype.willOverFlow = function() {
  // 2 cases i can think of immediately ... 
    // rear is to the 'left' of front
    // [4, 5, tail, head, 2, 3] <-- it has 'looped around'
    // tail = head - 1
    // rear is to the 'right' of front
    // [head, 2, 3, 4, tail] 
    // tail = array.length - 1
}

QueueWithArrayResizing.prototype.enqueue = function() {

}

QueueWithArrayResizing.prototype.dequeue = function() {
  
}

// tests
// var queueOneResize = new QueueWithArrayResizing()
// console.log(queueOneResize)
// console.log(queueOneResize.isEmpty())
