// with overflow and no sizing ...
function QueueWithArray() {
  this.front = 0
  this.back = 0
  // we initialize the array to an arbitrary number
  var arrayInitialSize = 10
  this.array = Array(arrayInitialSize)
}

QueueWithArray.prototype.isEmpty = function() {
  return this.front === this.back
}

QueueWithArray.prototype.enqueue = function(val) {

}

QueueWithArray.prototype.dequeue = function() {

}

// tests
var queueOne = new QueueWithArray()
console.log('empty: ', queueOne.isEmpty())









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
