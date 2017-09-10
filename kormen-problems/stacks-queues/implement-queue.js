function QueueWithArray() {
  this.front = 0
  this.rear = 0
  // we initialize the array to an arbitrary number
  var arrayInitialSize = 10
  this.array = Array(arrayInitialSize)
}

QueueWithArray.prototype.isEmpty = function() {
  return this.front === this.rear
}


QueueWithArray.prototype.shouldLoop(marker) {
  return marker === this.array.length - 1
}

QueueWithArray.prototype.willOverFlow = function() {
  // 2 cases i can think of immediately ... 
    // rear is to the 'left' of front
    // [4, 5, tail, head, 2, 3] <-- it has 'looped around'
    // tail = head - 1
    // rear is to the 'right' of front
    // [head, 2, 3, 4, tail] 
    // tail = array.length - 1





}

QueueWithArray.prototype.enqueue = function() {

}

QueueWithArray.prototype.dequeue = function() {
  
}

// tests
var queueOne = new QueueWithArray()
console.log(queueOne)
console.log(queueOne.isEmpty())
