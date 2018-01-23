// bst
function treeNode(val) {
  this.val = val
  this.lc = null
  this.rc = null
}

treeNode.prototype.setLeft = function(node) {
  this.lc = node
}

treeNode.prototype.setRight = function(node) {
  this.rc = node
}

treeNode.prototype.insert = function(node) {
  if (node) {
    if (node.val < this.val) {
      // node has children?
      if (this.lc) {
        this.lc.insert(node)
      }
      else if (!(this.lc)) {
        this.lc = node
      }
    } else if (node.val > this.val) {
      // node has children?
      if (this.rc) {
        this.rc.insert(node)
      } else {
        this.rc = node
      }
    }
  }
}

treeNode.prototype.traverseInOrder = function() {

}

// tests
let nodeOne = new treeNode(15)
let nodeTwo = new treeNode(8)
let nodeThree = new treeNode(23)
let nodeFour = new treeNode(5)
let nodeFive = new treeNode(2)
let nodeSix = new treeNode(29)
let fakeNode = null

// nodeOne.insert(fakeNode)
// console.log(nodeOne) // should have no children
nodeOne.insert(nodeTwo) 
nodeOne.insert(nodeThree) 
nodeOne.insert(nodeFour)
nodeOne.insert(nodeFive)
nodeOne.insert(nodeSix)
console.log(nodeOne) // should have lc and rc
