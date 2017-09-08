function StackWithArray() {
  this.top = 0
  this.stack = []
}

StackWithArray.prototype.isEmpty = function() {
  return this.top === 0
}

StackWithArray.prototype.peek = function() {
  if (this.isEmpty()) {
    return 'underflow' 
  } else {
    return this.stack[this.top - 1]
  }
}

StackWithArray.prototype.push = function(val) {
  this.stack[this.top] = val
  this.top = this.top + 1
}

StackWithArray.prototype.pop = function() {
  if (this.isEmpty()) {
    return "underflow"
  } else {
    var topItem = this.peek()
    this.top = this.top - 1
    return topItem
  }
}

// tests for array

// var stack = new StackWithArray()
// console.log(stack.isEmpty() === true)
// stack.push(1)
// console.log(stack.isEmpty() === false)
// stack.push(2)
// console.log(stack.peek() === 2)
// console.log(stack.pop() === 2)
// console.log(stack.peek() === 1)
// console.log(stack.isEmpty() === false)
// console.log(stack.pop() === 1)
// console.log(stack.isEmpty() === true)

// implementing with a linkedList
function LinkedList(head, tail) {
  this.head = head || null
  this.tail = tail || null
}

function LLNode(val, next) {
  this.val = val
  this.next = next || null
}

function StackWithLL() {
  this.LL = new LinkedList()
}

StackWithLL.prototype.isEmpty = function() {
  return this.LL.head === null && this.LL.tail === null
}

StackWithLL.prototype.peek = function() {
  if (this.isEmpty()) {
    return 'underflow'
  } else {
    return this.LL.tail
  }
}

StackWithLL.prototype.push = function(val) {
  var newNode = new LLNode(val)

  if (this.LL.head === null) {
    this.LL.head = newNode
  } 

  if (this.LL.tail === null) {
    this.LL.tail = newNode
  } else {
    newNode.next = this.LL.tail
    this.LL.tail = newNode
  }
}

StackWithLL.prototype.pop = function() {
  if (this.isEmpty()) {
    return 'underflow'
  } else {
    var topPlate = this.peek()
    this.LL.tail = this.LL.tail.next
    return topPlate
  }
}

// tests for Linked List
var stackOne = new StackWithLL()
console.log(stackOne.isEmpty()) // true
console.log(stackOne.peek()) // underflow
stackOne.push(1)
stackOne.push(2)
stackOne.push(3)
traverseStack(stackOne)
console.log(stackOne.pop())
console.log(stackOne.pop())
traverseStack(stackOne)

function traverseStack(stack) {
  var currentPlate = stack.peek()
  while (currentPlate) {
    console.log(currentPlate.val)
    currentPlate = currentPlate.next
  }
}

