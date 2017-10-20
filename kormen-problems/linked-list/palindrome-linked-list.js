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
function palindromeChecker(head) {

  // find length 
  const length = findLLSize(head)

  // use length to have access to 'midpoint node'
    // is it even length?
    // if it is odd length -> the 'middle is a gimme'
    // ---> we have some 'node that the second half starts at
  const secondLLOrigHead = findSecondHalf(head, length)

  // reverse all after the midpoint node... 
    // so ... LL2 is the LL with head as mindpoint node
  const secondLLReversedHead = reverseLL(secondLLOrigHead)
    
  // have 1 runner at the head of 'LL1'
  // have 1 runner at the 'head' of 'LL2'
  let rOne = head
  let rTwo = secondLLReversedHead

  const secondHalfEqualToFirst = areLLEqual(rOne, rTwo)

  if (secondHalfEqualToFirst) {
    return true
  } else {
    return false
  }

}

// helper functions
function findLLSize(head) {

  // integer
}

function findSecondHalf(head, length) {

  // node
}

function reverseLL(head) {

  // node
}

function areLLEqual(headOne, headTwo) {
  // iterate over 'both' LL1 and LL2 using runners
    // we don't actually care about 'stopping' at null, just that:
    // ? runner 1 == runner 2:
      // y: w.e
      // n: (break) -> false
      
  // to have 'made it past the loop' -> true
  // boolean
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
