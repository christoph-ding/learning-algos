function treeNode(val, lc, rc) {
  this.val = val || null
  this.lc = lc || null
  this.rc = rc || null
}

function inOrder(root) {
  if (root !== null) {
    inOrder(root.lc)
    console.log(root.val)
    inOrder(root.rc)
  }
}

function preOrder(root) {
  if (root !== null) {
    console.log(root.val)
    preOrder(root.lc)
    preOrder(root.rc)
  }
}

function postOrder(root) {
  if (root !== null) {
    postOrder(root.rc)
    postOrder(root.lc)
    console(root.val)
  }
}

let nodeSeven = new treeNode(17, null, null)
let nodeSix = new treeNode(12, null, null)
let nodeFive = new treeNode(7, null, null)
let nodeFour = new treeNode(3, null, null)
let nodeTwo = new treeNode(5, nodeFour, nodeFive)
let nodeThree = new treeNode(15, nodeSix, nodeSeven)
let nodeOne = new treeNode(10, nodeTwo, nodeThree)

console.log('in order: ')
inOrder(nodeOne)
