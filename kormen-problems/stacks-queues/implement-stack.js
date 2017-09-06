function stackWithArray() {
  this.top = 0
  this.stack = []
}

stackWithArray.prototype.push = function(val) {
  this.stack[this.top] = val
  this.top = this.top + 1
}

stackWithArray.prototype.isEmpty = function() {
  return this.top === 0
}

// tests
var stack = new stackWithArray()
console.log(stack.isEmpty())
stack.push(1)
stack.push(2)
console.log(stack.isEmpty())
console.log(stack)
