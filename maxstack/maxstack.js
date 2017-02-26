var MaxStackFactory  = function() {
  this.stack = [];
  this.maxStack = [];
}

MaxStackFactory.prototype.push = function(val) {
  // determine if this is a new max
  if (!(this.maxStack.length) || val > this.getMax()) {
    this.maxStack.push(val)
  }

  this.stack.push(val);
}

MaxStackFactory.prototype.pop = function() {
  var topValue = this.stack.pop();
  // update the maxStack, if the max is being popped
  if (topValue === this.getMax()) {
    this.maxStack.pop();
  }
  return topValue;
}

MaxStackFactory.prototype.top = function() {
  return this.stack[this.stack.length - 1];
}

MaxStackFactory.prototype.getMax = function() {
  
  return this.maxStack[this.maxStack.length - 1];
}

// testing
testOne = new MaxStackFactory();
testOne.push(13);
