// a Queue
function Queue() {
  this.q = []
}

Queue.prototype.enqueue = function(val) {
  this.q.push(val)
}

Queue.prototype.isEmpty = function() {
  return this.q.length === 0
}

Queue.prototype.dequeue = function() {
  return this.q.shift()
}

Queue.prototype.peek = function() {
  if (this.isEmpty()) {
    return 'underflow'
  } else {
    return this.q[0]
  }  
}

Queue.prototype.isOnlyTop = function() {
  return this.q.length === 1
}

// efficient pop
function StackEfficientPop() {
  this.top = new Queue()
  this.restQ = new Queue()
}

StackEfficientPop.prototype.isEmpty = function () {
  return this.top.isEmpty()
}

StackEfficientPop.prototype.peek = function () {
  return this.top.peek()
}

StackEfficientPop.prototype.push = function (val) {
  if (!(this.top.isEmpty())) {
    while (this.restQ.length > 0) {
      this.top.push(this.restQ.dequeue())
    }
    this.restQ = this.top
    this.top = new Queue()    
  }
    this.top.enqueue(val)
}

StackEfficientPop.prototype.pop = function () {
  
}

// tests
let stackOne = new StackEfficientPop()
console.log(stackOne.isEmpty()) // true
console.log(stackOne.peek()) // underflow
stackOne.push(1)

console.log(stackOne.isEmpty()) // false
console.log(stackOne.peek()) // 1

stackOne.push(2)
stackOne.push(3)
console.log(stackOne.isEmpty()) // false
console.log(stackOne.peek()) // 3
console.log(stackOne)


// efficient push
function StackEfficientPush() {
  this.mainQ = new Queue()
  this.tempQ = new Queue()
}

StackEfficientPush.prototype.isEmpty = function () {
  return this.mainQ.isEmpty()
}

StackEfficientPush.prototype.peek = function () {
  
}

StackEfficientPush.prototype.push = function (val) {
  this.mainQ.enqueue(val)
}

StackEfficientPush.prototype.pop = function () {
  if (this.mainQ.isEmpty()) {
    return "underflow"
  }

  while (!(this.mainQ.isOnlyTop())) {
    this.tempQ.enqueue(this.mainQ.dequeue())
  }

  let topPlate = this.mainQ.dequeue()
  this.mainQ = this.tempQ
  this.tempQ = new Queue()
  return topPlate
}

// tests
// let stackOne = new StackEfficientPush()
// console.log(stackOne.pop(1)) // underflow
// console.log(stackOne.isEmpty()) // true
// stackOne.push(1)
// stackOne.push(2)
// console.log(stackOne.isEmpty()) // false
// stackOne.push(3)
// console.log(stackOne.pop()) // 3
// console.log(stackOne.pop()) // 2
// console.log(stackOne)
