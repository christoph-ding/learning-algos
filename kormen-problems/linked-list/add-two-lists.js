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
function reverseLinkedList(head) {
  let newHead = null

  let previous = null
  let currentNode = head
  let originalNext = currentNode.next

  while (currentNode !== null) {
    if (previous !== null) {
      console.log('previous: ', previous.key, ' currentNode: ', currentNode.key, ' originalNext: ', originalNext.key)
    }

    // when we get to the 'end' we have to remember that this is the node to return
    if (currentNode.next === null) {
      newHead = currentNode
    } 
    originalNext = currentNode.next
    currentNode.next = previous
    previous = currentNode
    currentNode = originalNext
  }


  return newHead
}

function addTwoList(listOneHead, listTwoHead) {
  let outputHead = null
  let currentNode = null

  // reverse both lists in place ...

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

    if (outputHead === null) {
      outputHead = newDigit
      currentNode = newDigit
    } else {
      currentNode.next = newDigit
      currentNode = newDigit
    }


    // console.log('valueListOne: ', valueListOne, ' valueListTwo: ', valueListTwo, ' sum: ', sum, ' carryOne: ', carryOne)

    // add the 'rest' of whichever linked list still has 'digits' left
    if (nodeListOne !== null) {
      nodeListOne = nodeListOne.next  
    }

    if (nodeListTwo !== null) {
      nodeListTwo = nodeListTwo.next
    }    
  }

  if (carryOne) {
    currentNode.next = new linkedListNode(1)
  }

  return outputHead
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

// test reverse
console.log(logAllLLNode((reverseLinkedList(nodeOne)))) // 4 -> 3 -> 2 -> 1
// console.log(reverseLinkedList(nodeFour)) // 4

// console.log('adding ... ')
// console.log(logAllLLNode(nodeOne))
// console.log(logAllLLNode(nodeOneB))

// console.log(logAllLLNode(addTwoList(nodeOne, nodeOneB)))  //  6 -> 9 -> 1 -> 2

