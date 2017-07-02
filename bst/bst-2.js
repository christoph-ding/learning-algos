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

// testing
var nodeTwo = new Node(5)
var nodeOne = new Node(8, nodeTwo)

var BSTOne = new BinarySearchTree(nodeOne)

console.log(BSTOne)
