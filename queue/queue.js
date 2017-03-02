// Node
function stackNode(val) {
  this.val = val;
  this.next = null;
}

// Queue Linked List
function QueueLL () {
  this.frontOfQ = null;
  this.backOfQ = null;
}

QueueLL.prototype.enqueue = function(node) {
  // there are elements
  if (this.backOfQ) {
    this.backOfQ.next = node;
    this.backOfQ = node;
  } else {
  // there are no elements in the q
    this.frontOfQ = node;
    this.backOfQ = node;
  }
}

QueueLL.prototype.dequeue = function() {
  // there are elements
  if (this.frontOfQ) {
    var deQueuedNode = this.frontOfQ;
    this.frontOfQ = this.frontOfQ.next;
    return deQueuedNode;
  }
  // there are no elements in the q
  {
    return null;
  }
}

QueueLL.prototype.peek = function() {
  return this.frontOfQ;
}

QueueLL.prototype.isEmpty = function() {
  return this.frontOfQ === null;
}

// Array implementation
function QueueArray() {
  this.Q = [];
  this.frontOfQ = 0;
  this.backOfQ = 0;
}

QueueArray.prototype.enqueue = function(val) {
  this.Q[this.backOfQ] = val;
  this.backOfQ = this.backOfQ + 1;
}

QueueArray.prototype.dequeue = function() {
  var dequeued = this.frontOfQ[this.frontOfQ];
  this.frontOfQ = this.frontOfQ + 1;
  return dequeued;
}

QueueArray.prototype.peek = function() {
  return this.Q[this.frontOfQ];
}

QueueArray.prototype.isEmpty = function() {
  return this.frontOfQ === this.backOfQ;
}
// Basic Tests for LL
var nodeOne = new stackNode(3);
var nodeTwo = new stackNode(4);
var nodeFour = new stackNode(6);

var queueOneLL = new QueueLL();
queueOneLL.enqueue(nodeOne);
queueOneLL.enqueue(nodeTwo);
queueOneLL.enqueue(nodeFour);

console.log(queueOneLL.dequeue());
console.log(queueOneLL.dequeue());
console.log(queueOneLL);

// Basic Tests for Array
var queueWithArray = new QueueArray();
queueWithArray.enqueue(4);
queueWithArray.enqueue(5);
queueWithArray.enqueue(6);

console.log(queueWithArray);
