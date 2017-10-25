// node functions
function linkedListNode (key) {
  this.key = key 
  this.next = null
}

function logAllLLNode(head) {
  let currentNode = head
  let output = []

  while (currentNode !== null) {
    output.push(currentNode.key)
    currentNode = currentNode.next
  }

  return output.join(' -> ')
}

// 

function mergeTwoLists(headOne, headTwo) {
  // instantiate variables / runners
  let sortedHead = null
  let sortedTail = null
  let runnerOne = headOne
  let runnerTwo = headTwo


  // in case of null
  if (headOne === null && headTwo !== null) {
    sortedHead = headTwo
  } 

  if (headTwo === null && headOne !== null) {
    sortedHead = headOne
  }

  // find the first node
  if (runnerOne.key < runnerTwo.key) {
    sortedTail = runnerOne
    runnerOne = runnerOne.next
  } else {
    sortedTail = runnerTwo
    runnerTwo = runnerTwo.next
  }

  console.log(sortedTail)
  // until both runners are exhausted ...
  while ()
    // compare both runners
    // set next of sortedTail to smaller runner, increment that runner

}

// tests
let nodeOne = new linkedListNode(1) 
let nodeTwo = new linkedListNode(3)
let nodeThree = new linkedListNode(5)
let nodeFour = new linkedListNode(7)
nodeThree.next = nodeFour
nodeTwo.next = nodeThree
nodeOne.next = nodeTwo

let nodeOneB = new linkedListNode(0) 
let nodeTwoB = new linkedListNode(4)
let nodeThreeB = new linkedListNode(6)
let nodeFourB = new linkedListNode(8)
nodeThreeB.next = nodeFourB
nodeTwoB.next = nodeThreeB
nodeOneB.next = nodeTwoB

// console.log(logAllLLNode(nodeOne))
// console.log(logAllLLNode(nodeOneB))

mergeTwoLists(nodeOne, nodeOneB)
