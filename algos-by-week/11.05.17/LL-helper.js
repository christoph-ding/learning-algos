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

// tests
let nodeOne = new linkedListNode(1) 
let nodeTwo = new linkedListNode(2)
let nodeThree = new linkedListNode(3)
let nodeFour = new linkedListNode(4)
nodeThree.next = nodeFour
nodeTwo.next = nodeThree
nodeOne.next = nodeTwo

let nodeOneB = new linkedListNode(5) 
let nodeTwoB = new linkedListNode(6)
let nodeThreeB = new linkedListNode(7)
let nodeFourB = new linkedListNode(8)
nodeThreeB.next = nodeFourB
nodeTwoB.next = nodeThreeB
nodeOneB.next = nodeTwoB
