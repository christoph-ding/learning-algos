// code
var BinarySearchTree = function(root) {
  this.root = root
}

var Node = function(value, lc, rc) {
  // number
  this.value = value
  // Nodes
  this.lc = lc
  this.rc = rc
}

BinarySearchTree.prototype.insert = function(newNode) {

  var currentNode = this.root
  
  function _insertion() {
    // insert based upon comparsion

    // no children
    if (!currentNode.lc && !currentNode.rc) {
      if (newNode.value < currentNode.value) {
        currentNode.lc = newNode
      } else if (newNode.value > currentNode.value) {
        currentNode.rc = newNode
      }
    }
    // has children
      // compare ...
        // insert left
        // insert right
  }

  function _compareAndInsert(value) {

  }

  _insertion()

}
 
BinarySearchTree.prototype.contains = function() {

}

BinarySearchTree.prototype.depthFirstTraversal = function() {

}

// testing

// var nodeTwo = new Node(5)
// var nodeOne = new Node(8, nodeTwo)

// var BSTOne = new BinarySearchTree(nodeOne)

// test the constructor for node and BST
// console.log(BSTOne)

// test BST class has relevant BST methods
// var BSTProperties = Object.getOwnPropertyNames(BinarySearchTree.prototype)
// console.log(BSTProperties.indexOf('insert') !== -1)
// console.log(BSTProperties.indexOf('contains') !== -1)
// console.log(BSTProperties.indexOf('depthFirstTraversal') !== -1)

// test insert is correct
var nodeOne = new Node(8)
var BSTOne = new BinarySearchTree(nodeOne)

var newNode = new Node(11)
BSTOne.insert(newNode)
console.log(BSTOne)
