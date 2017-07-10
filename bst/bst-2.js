// code
var BinarySearchTree = function(root) {
  this.root = root
}

var Node = function(value, lc, rc) {
  // number
  this.value  = value
  // Nodes
  this.lc = lc
  this.rc = rc
}

BinarySearchTree.prototype.insert = function(newNode) {

  var currentNode = this.root
  
  function _handleSmaller() {
    if (!currentNode.lc) {
      currentNode.lc = newNode
    } else {
      currentNode = currentNode.lc
      // recur if necceary
      _insertion()
    }
  }

  function _handleLarger() {
    if (!currentNode.rc) {
      currentNode.rc = newNode
    } else {
      currentNode = currentNode.rc
      // recur if necceary
      _insertion()
    }
  }

  function _insertion() {
    // insert based upon comparison
    if (newNode.value < currentNode.value) {
      _handleSmaller()
    } else if (newNode.value > currentNode.value) {
      _handleLarger()
    }

  }

  _insertion()

}
 
// this is a BST method, that takes advantage of the data structure 
BinarySearchTree.prototype.containsBst = function(target) {

  function _find(root) {
    if (target === root.value) {
      return true
    }
    if (target > root.value && root.rc) {
      return _find(root.rc)
    }
    if (target < root.value && root.lc) {
      return _find(root.lc)
    }
    return false
  }

  return _find(this.root)
}

// this method finds a target, then does something to it, more general
BinarySearchTree.prototype.findAndDo = function(target, cb) {

  function _find(root) {
    if (target === root.value) {
      return cb(root)
    }
    if (target > root.value && root.rc) {
      return _find(root.rc) 
    }
    if (target < root.value && root.lc) {
      return _find(root.lc)
    }
    return 'this target is not in the tree'
  }

  return _find(this.root)
}

BinarySearchTree.prototype.contains = function(target) {
  
}

// this is really a tree method, not just a BST method
BinarySearchTree.prototype.preOrderTraversal = function(cb) {
  _traverse(this.root)

  function _traverse(root) {
    cb(root)
    if (root.lc) {
      _traverse(root.lc)
    }
    if (root.rc) {
      _traverse(root.rc)
    }
  }
}

// this is really a tree method, not just a BST method
BinarySearchTree.prototype.inOrderTraversal = function(cb) {
  _traverse(this.root)

  function _traverse(root) {
    if (root.lc) {
      _traverse(root.lc)
    }    
    cb(root)
    if (root.rc) {
      _traverse(root.rc)
    }
  }
}

// this is really a tree method, not just a BST method
BinarySearchTree.prototype.postOrderTraversal = function(cb) {
  _traverse(this.root)

  function _traverse(root) {
    if (root.lc) {
      _traverse(root.lc)
    }        
    if (root.rc) {
      _traverse(root.rc)
    }
    cb(root)
  }
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
var newNodeFour = new Node(10)

BSTOne.insert(newNode)
BSTOne.insert(newNodeTwo)
BSTOne.insert(newNodeThree)
BSTOne.insert(newNodeFour)

// console.log(BSTOne)

// test contains

