// bst
function treeNode(val) {
  this.val = val
  this.lc = null
  this.rc = null
}

treeNode.prototype.setLeft(node) {
  this.lc = node
}

treeNode.prototype.setRight(node) {
  this.rc = node
}

treeNode.prototype.insertRight(node) {

}

treeNode.prototype.insertLeft(node) {

}

treeNode.prototype.traverseInOrder() {

}

// tests
let nodeOne = new treeNode(15)
let nodeTwo = new treeNode(8)
let nodeThree = new treeNode(23)
let nodeFour = new treeNode(5)

