function treeNode(val, lc, rc) {
  this.val = val
  this.lc = lc || null
  this.rc = rc || null
}

function linkedListNode(val, next) {
  this.val = val
  this.next = next || null
}

function produceByDepth(root) {
  const linkedListByDepth = []

  return linkedListByDepth
}

// tests
// tree one
/*    1
    2   3
*/
let nodeThree = new treeNode(3)
let nodeTwo = new treeNode(2)
let nodeOne = new treeNode(1, nodeTwo, nodeThree)

console.log(nodeOne)
