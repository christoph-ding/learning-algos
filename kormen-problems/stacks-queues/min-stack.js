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
  } else {
    var topPlate = this.plates[this.top - 1]
    return topPlate
  }
}

minStack.prototype.push = function(val) {
  var newMin = null;  

  if (this.isEmpty()) {
    newMin = val      
  } else {
    currentMin = this.getMin()
    newMin = Math.min(currentMin, val)
  }
  var newPlate = {'val': val, 'min': newMin}

  this.plates[this.top] = newPlate
  this.top = this.top + 1
  return
}

minStack.prototype.pop = function() {

}

minStack.prototype.getMin = function() {
  if (this.isEmpty()) {
    return 'underflow'
  } else {    
    return this.peek().min
  }
}
// tests
var inputOne = [1, 2, 3]
var minStackOne = new minStack()
minStackOne.push(2)
minStackOne.push(3)
minStackOne.push(1)
console.log(minStackOne)
