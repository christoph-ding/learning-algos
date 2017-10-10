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

// reverse linked list
function reverseLinkedList(head) {
  if (head.next !== null) {
    reverseLinkedList(head.next)
    head.next.next = head
    head.next = null
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

console.log(logAllLLNode(nodeOne))
reverseLinkedList(nodeOne)
console.log(logAllLLNode(nodeFour))
