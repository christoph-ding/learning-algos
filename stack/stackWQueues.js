// a stack using queues
// we will implement a stack with queues.

function stackWQueuesSlowPop() {
  this.Q1 = [];
  this.Q2 = [];
  this.mainQ = this.Q1;
  this.secondQ = this.Q2;
}

stackWQueuesSlowPop.prototype.transferBetweenStacks() {
  while (this.mainQ.length > 1) {
    this.secondQ.push(this.mainQ.unshift());
  }
  var temp = this.mainQ;
  this.mainQ = this.secondQ;
  this.secondQ = temp;  
}

stackWQueuesSlowPop.prototype.push(val) {
  this.mainQ.push(val);
}

stackWQueuesSlowPop.prototype.pop() {
  this.transferBetweenStacks();
  return this.secondQ.pop();
}

stackWQueuesSlowPop.prototype.isEmpty() {
  return this.Q1.length + this.Q2.length === 0;
}

// tests
var testStackOne = new stackWQueuesSlowPop();
