function treeNode(val, lc, rc) {
  this.val = val || null
  this.lc = lc || null
  this.rc = rc || null
}

function inOrder(root) {

}

function preOrder(root) {

}

function postOrder(root) {

}

let nodeSeven = (17, null, null)
let nodeSix = (12, null, null)
let nodeFix = (7, null, null)
let nodeFour = (3, null, null)
let nodeTwo = (5, nodeFour, nodeFive)
let nodeThree = (15, nodeSix, nodeSeven)
let nodeOne = (10, nodeTwo, nodeThree)
