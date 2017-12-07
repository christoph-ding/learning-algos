function treeNode (val, lc, rc) {
  this.val = val
  this.lc = lc || null
  this.rc = rc || null
}

function preOrderTraversal (root) {
  console.log(root.val)
  if (root.lc) {
    preOrderTraversal(root.lc)
  } 
  if (root.rc) {
    preOrderTraversal(root.rc)
  }
}

function inOrderTraversal (root) {
  if (root.lc) {
    inOrderTraversal(root.lc)
  } 
  console.log(root.val)
  if (root.rc) {
    inOrderTraversal(root.rc)
  }
}

function postOrderTraversal (root) {
  if (root.lc) {
    postOrderTraversal(root.lc)
  }
  if (root.rc) {
    postOrderTraversal(root.rc)
  }
  console.log(root.val)
}

// tests
let five = new treeNode('5')
let four = new treeNode('4', null, five)
let three = new treeNode('3', null, four)
let one = new treeNode('1')
let two = new treeNode('2', one, three)

console.log('pre order')
preOrderTraversal(two)

console.log('in order')
inOrderTraversal(two)

console.log('post order')
postOrderTraversal(two)
