// with overflow and no sizing ...
function QueueWithArray() {
  this.front = 0
  this.back = 0
  // we initialize the array to an arbitrary number
  var arrayInitialSize = 5
  this.array = Array(arrayInitialSize)
}

QueueWithArray.prototype.isEmpty = function() {
  return this.front === this.back
}

QueueWithArray.prototype.wouldOverflow = function() {
  if (this.back === this.array.length - 1 && this.front === 0) {
    return true
  } else if ( this.back === this.front - 1) {
    return true
  }
  return false
}

QueueWithArray.prototype.enqueue = function(val) {
  // will it overflow?
  if (this.wouldOverflow()) {
    return 'overflows'
  } else {
    this.array[this.back] = val
    // then increment, 'circling' if we need to
    if (this.back === this.array.length - 1) {
      this.back = 0
    } else {
      this.back = this.back + 1   
    }
  }
}

QueueWithArray.prototype.dequeue = function() {
  if (this.isEmpty()) {
    return 'underflow'
  } else {
    var valueToReturn = this.array[this.front]
    // then move the front of the line 'up', 'circling' if we need to
    if (this.head = this.array.length - 1) {
      this.head = 0
    } else {
      this.head = this.head + 1
    }
    return valueToReturn
  }
}

// tests
var queueOne = new QueueWithArray()
console.log('empty: ', queueOne.isEmpty())
console.log('dequeue: ', queueOne.dequeue())
queueOne.enqueue(1)
console.log(queueOne)
console.log(queueOne.dequeue())
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
