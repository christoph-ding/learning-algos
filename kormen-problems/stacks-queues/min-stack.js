function minStack() {
  this.top = 1
  this.plates = new Array(2)
}

minStack.prototype.isEmpty = function() {
  return this.top === 1
}

minStack.prototype.peek = function() {
  if (this.isEmpty()) {
    return "underflow"
  }
}

minStack.prototype.push = function(val) {

}

minStack.prototype.pop = function() {

}

minStack.prototype.getMin = function() {

}
// tests
var inputOne = [1, 2, 3]
var minStackOne = new minStack()
console.log(minStackOne.isEmpty()) // true
console.log(minStackOne.peek()) // underflow

console.log(minStackOne)
