function LLHasCycle(head) {
  if (head === null || head.next === null) {
    return false
  }

  let slow = head
  let fast = head.next

  while (slow !== fast) {
    if (fast === null || fast.next === null) {
      return false
    }
    slow = slow.next
    fast = fast.next.next
  }
  return true
}

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

// console.log(logAllLLNode(nodeOne))
console.log(LLHasCycle(null))
console.log(LLHasCycle(nodeFour))
console.log(LLHasCycle(nodeOne))

nodeThree.next = null
console.log(LLHasCycle(nodeOne))
