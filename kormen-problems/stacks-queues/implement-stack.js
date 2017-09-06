function stackWithArray() {
  this.nextToBeFilled = 0
  this.stack = []
}

stackWithArray.prototype.push = function(val) {
  this.stack[this.nextToBeFilled] = val
  this.nextToBeFilled = this.nextToBeFilled + 1
}

stackWithArray.prototype.isEmpty = function() {
  return this.nextToBeFilled === 0
}

stackWithArray.prototype.peek = function() {
  var indexOfHighestPlate = this.nextToBeFilled - 1
  var topOfStack = this.stack[indexOfHighestPlate]
  return topOfStack
}

stackWithArray.prototype.pop = function() {
  if (this.isEmpty()) {
    return "underflow"
  } else {
    var plateToPop = this.peek()
    this.nextToBeFilled = this.nextToBeFilled - 1
    return plateToPop
  }
}

// tests
var stack = new stackWithArray()
console.log('empty: ', stack.isEmpty())
stack.push(1)
stack.push(2)
console.log('peeking: ', stack.peek())
console.log('empty: ', stack.isEmpty())
console.log(stack)
