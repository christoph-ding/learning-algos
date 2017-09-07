function StackWithArray() {
  this.nextToBeFilled = 0
  this.stack = []
}

StackWithArray.prototype.push = function(val) {
  this.stack[this.nextToBeFilled] = val
  this.nextToBeFilled = this.nextToBeFilled + 1
}

StackWithArray.prototype.isEmpty = function() {
  return this.nextToBeFilled === 0
}

StackWithArray.prototype.peek = function() {
  var indexOfHighestPlate = this.nextToBeFilled - 1
  var topOfStack = this.stack[indexOfHighestPlate]
  return topOfStack
}

StackWithArray.prototype.pop = function() {
  if (this.isEmpty()) {
    return "underflow"
  } else {
    var plateToPop = this.peek()
    this.nextToBeFilled = this.nextToBeFilled - 1
    return plateToPop
  }
}

// tests
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


