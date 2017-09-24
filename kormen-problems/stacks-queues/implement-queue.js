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

