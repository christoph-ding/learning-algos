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

// reversed linked list 
function linkedListReverse(head) {
  let previous = null
  let current = head
  let origNext = current.next

  while (current !== null) {
    current.next = previous
    previous = current
    current = origNext
    if (current !== null) {
      origNext = current.next
    }
  }
}

// tests
let nodeOne = new linkedListNode(1) 
let nodeTwo = new linkedListNode(2)
let nodeThree = new linkedListNode(3)
let nodeFour = new linkedListNode(4)
nodeThree.next = nodeFour
nodeTwo.next = nodeThree
nodeOne.next = nodeTwo

linkedListReverse(nodeOne)
console.log(logAllLLNode(nodeFour))
