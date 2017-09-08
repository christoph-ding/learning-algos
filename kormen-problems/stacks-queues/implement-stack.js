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
var stack = new StackWithArray()
console.log('empty: ', stack.isEmpty())
stack.push(1)
stack.push(2)
console.log('peeking: ', stack.peek())
console.log('empty: ', stack.isEmpty())
console.log(stack)

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

}

StackWithLL.prototype.peek = function() {

}

StackWithLL.prototype.push = function(val) {

}

StackWithLL.prototype.pop = function() {

}

// tests for Linked List
