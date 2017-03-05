// a stack using queues
// we will implement a stack with queues.

function stackWQueuesSlowPop() {
  this.Q1 = [];
  this.Q2 = [];
  this.mainQ = this.Q1;
  this.secondQ = this.Q2;
}

stackWQueuesSlowPop.prototype.transferBetweenStacks = function() {
  while (this.mainQ.length > 1) {
    this.secondQ.push(this.mainQ.shift());
  }
  var temp = this.mainQ;
  this.mainQ = this.secondQ;
  this.secondQ = temp;  
}

stackWQueuesSlowPop.prototype.push = function(val) {
  this.mainQ.push(val);
}

stackWQueuesSlowPop.prototype.pop = function() {
  this.transferBetweenStacks();
  return this.secondQ.pop();
}

stackWQueuesSlowPop.prototype.isEmpty = function() {
  return this.Q1.length + this.Q2.length === 0;
}

// tests
var testStackOne = new stackWQueuesSlowPop();
testStackOne.push(1);
testStackOne.push(2);
testStackOne.push(3);
console.log(testStackOne.pop());
console.log(testStackOne.pop());
testStackOne.push(4);
console.log(testStackOne.pop());
console.log(testStackOne.pop());
