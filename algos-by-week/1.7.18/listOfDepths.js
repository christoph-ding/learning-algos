function treeNode(val, lc, rc) {
  this.val = val
  this.lc = lc || null
  this.rc = rc || null
}

function linkedListNode(val, next) {
  this.val = val
  this.next = next || null
}

function constructLinkedList(listOfNodes) {
  const currentNode = listOfNodes[0]
  const nextNode = null

  listOfNodes.forEach(function())


  return 
}

function produceByDepth(root) {
  const linkedListByDepth = []




  // a list of the nodes in the next depth, from which we make the next depth's linked-list
  const nextDepth = []

  // it should make a list for each depth
  // it should make a linked-list out of that list



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
