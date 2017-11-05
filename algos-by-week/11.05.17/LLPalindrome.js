function LLPalindrome(head) {
  // handle edge case
  if (head === null || head.next === null) {
    return true
  }

  // find the head of the '2nd list' <- the 2nd half of the list
  let firstRunner = head
  let secondRunner = findCenter(head)

  // reverse the 2nd half of the list, in place 
  reverseList(secondRunner)

  // iterate 'both lists' using 2 runners
  return allMatch(firstRunner, secondRunner)
}

// helper function
function allMatch(one, two) {

  while (one !== null && two !== null) {
    if (one.key !== two.key) {
      return false
    } 
    one = one.next
    two = two.next
  }

  return true
}


function reverseList(head) {
  let previous = null
  let currentNode = head
  let originalNext = currentNode.next

  while (currentNode !== null) {
    currentNode.next = previous
    previous = currentNode
    currentNode = originalNext

    if (currentNode !== null) {
      originalNext = currentNode.next    
    }
  }
}

function findCenter(head) {
  if (head === null || head.next === null) {
    return head   
  }

  let slow = head
  let fast = head.next

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

nodeOne = new linkedListNode('a')
nodeTwo = new linkedListNode('b')
nodeThree = new linkedListNode('a')

console.log(LLPalindrome(nodeOne)) // true 

nodeOne.next = nodeTwo
console.log(LLPalindrome(nodeOne)) // false

nodeTwo.next = nodeThree
console.log(LLPalindrome(nodeOne)) // true
