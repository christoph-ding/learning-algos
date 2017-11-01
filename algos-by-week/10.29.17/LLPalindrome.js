function findCenter(head) {
  if (head === null || head.next === null) {
    return head   
  }

  while (true) {
    if (fast === null || fast.next === null) {
      return slow.next
    }
    slow = slow.next
    fast = fast.next.next
  }
}

// node functions
function linkedListNode(key) {
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

console.log(logAllLLNode(nodeOne))
console.log(findCenter(nodeFour))
