// a node
function stackNode(val) {
  this.val = val;
  this.next = null;
}

// two implementations of a stack

// Linked List implementation
function StackLL() {
  this.topOfStack = null;
}

StackLL.prototype.push = function(node) {
  node.next = this.topOfStack;
  this.topOfStack = node; 
}

StackLL.prototype.pop = function() {
  if (!this.isEmpty()) {
    var currentTop = this.topOfStack;
    this.topOfStack = this.topOfStack.next;
    currentTop.next = null;
    return currentTop.val;
  } else {
    return null;
  }
}

StackLL.prototype.peek = function() {
  if (!this.isEmpty()) {
    return this.topOfStack.val;
  } else {
    return null;
  }
}

StackLL.prototype.isEmpty = function() {
  return this.topOfStack === null;
}

// Array implementation
function StackArray() {
  this.data = [];
  this.topIndex = 0;
}

StackArray.prototype.push = function(val) {
  this.topIndex++;
  this.data[topIndex] = val;
}

StackArray.prototype.pop = function() {
  var topValue = this.data[this.topIndex];
  this.topIndex--;
  return topValue;
}

StackArray.prototype.peek = function() {
  return this.data[this.topIndex];
}

StackArray.prototype.isEmpty = function() {
  return this.data[this.topIndex] === null;
}
