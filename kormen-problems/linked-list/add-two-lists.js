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
function addTwoList(listOneHead, listTwoHead) {
  let output = null
  let nodeListOne = listOneHead
  let nodeListTwo = listTwoHead 
  let carryOne = false 

  while (nodeListOne !== null || nodeListTwo !== null) {

    let valueListOne = nodeListOne.key || 0
    let valueListTwo = nodeListTwo.key || 0

    let sum = valueListOne + valueListTwo

    if (carryOne) {
      sum = sum + 1
      carryOne = false
    }

    if (sum > 9) {
      sum = sum % 10
      carryOne = true
    }

    let newDigit = new linkedListNode(sum)    


    if (nodeListOne !== null) {
      nodeListOne = nodeListOne.next  
    }

    if (nodeListTwo !== null) {
      nodeListTwo = nodeListTwo.next
    }    
  }

  return output
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

console.log(logAllLLNode(nodeOne))
console.log(logAllLLNode(nodeOneB))
