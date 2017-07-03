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
    else {
      if (newNode.value < currentNode.value) {
        if (!currentNode.lc) {
          currentNode.lc = newNode
        } else {
          currentNode = currentNode.lc          
        }
      } else if (newNode.value > currentNode.value) {
          if (!currentNode.rc) {
            currentNode.rc = newNode
          } else {
          currentNode = currentNode.rc
        }
      }
      _insertion()
    }
  }

  _insertion()

}
 
BinarySearchTree.prototype.contains = function() {

}

BinarySearchTree.prototype.preOrderTraversal = function() {

}

BinarySearchTree.prototype.inOrderTraversal = function() {

}

BinarySearchTree.prototype.postOrderTraversal = function() {

}

BinarySearchTree.prototype.widthFirstTraversal = function() {

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
var newNodeTwo = new Node(7)
var newNodeThree = new Node(3)

BSTOne.insert(newNode)
BSTOne.insert(newNodeTwo)
BSTOne.insert(newNodeThree)
