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

}

QueueArray.prototype.push = function() {

}

QueueArray.prototype.pop = function() {

}

QueueArray.prototype.peek = function() {

}

QueueArray.prototype.isEmpty = function() {

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
