function LLPalindrome(head) {
  // handle edge case
  if (head === null || head.next === null) {
    return true
  }

  // find the head of the '2nd list' <- the 2nd half of the list
  let firstRunner = head
  let secondRunner = findCenter(head)

  console.log('firstRunner: ', firstRunner.key, '   secondRunner: ', secondRunner.key)

  // reverse the 2nd half of the list, in place 

  // iterate 'both lists' using 2 runners
  // one at start of entire list, one at start of 2nd half of the list
  // if at anypoint, the 2 are not the same, list is NOT a palindrome

  // otherwise, at the end, it is a palindrome

}

// helper function
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

console.log(logAllLLNode(nodeOne))
console.log(LLPalindrome(nodeOne)) // 1 -> 2 -> 3 -> 4 ... 1, 3
console.log(LLPalindrome(nodeTwo)) // 2 -> 3 -> 4      ... 2, 4
console.log(LLPalindrome(nodeThree)) // 3 -> 4      ... 3, 4 

