function singleLinkedNode(key) {
  this.key = key
  this.next = null
}

singleLinkedNode.prototype.insertAfterTail = function(node) {
  this.next = node
}

// no circular
function singleLinkedList(head) {
  this.head = head || null
  this.tail = head || null
}

singleLinkedList.prototype.isEmpty = function() {

}

singleLinkedList.prototype.searchForNode = function(key, cb) {

}

singleLinkedList.prototype.deleteNode = function(key) {

}

singleLinkedList.prototype.insertNodeAfterK = function(key) {

}

singleLinkedList.prototype.insertAfterTail = function(key) {

}

singleLinkedList.prototype.insertBeforeHead = function(key) {

}

// tests
var nodeOne = new singleLinkedNode(1)
var nodeTwo = new singleLinkedNode(2)
var nodeThree = new singleLinkedNode(3)
nodeOne.insertAfterTail(nodeTwo)
nodeTwo.insertAfterTail(nodeThree)
console.log(nodeOne)

