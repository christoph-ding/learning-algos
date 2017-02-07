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

}

StackArray.prototype.push = function() {

}

StackArray.prototype.pop = function() {

}

StackArray.prototype.peek = function() {

}

StackArray.prototype.isEmpty = function() {

}

// Basic Tests for LL stack
var testStackLL = new StackLL
var nodeOne = new stackNode(1);
var nodeTwo = new stackNode(2);
var nodeThree = new stackNode(3);

console.log('empty at start: ', testStackLL.isEmpty())

testStackLL.push(nodeOne);
testStackLL.push(nodeTwo);
testStackLL.push(nodeThree);

console.log(testStackLL.pop());
console.log(testStackLL.pop());
console.log(testStackLL.pop());
console.log(testStackLL.pop());
console.log(testStackLL);
