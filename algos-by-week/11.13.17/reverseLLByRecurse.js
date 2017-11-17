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

console.log(logAllLLNode(nodeOne))

function reverseLLrecurse(LLhead) {
  // reverse the next list

  // set the return of the next list.next to this LLhead

  // return the input head (now no longer the head of this list)
} 

reverseLLrecurse(nodeOne)
console.log(logAllLLNode(nodeFour))
