function linkedListNode (key) {
  this.key = key 
  this.next = null
}


function logAllLLNode(head) {
  let currentNode = head
  while (currentNode !== null) {
    console.log(currentNode.key)
    currentNode = currentNode.next
  }
}

// tests
let nodeOne = new linkedListNode(1) 
let currentNode = nodeOne
for (var i = 2; i < 7; i++) {
  let newNode = new linkedListNode(i)
  currentNode.next = newNode
  currentNode = newNode
}

logAllLLNode(nodeOne)
