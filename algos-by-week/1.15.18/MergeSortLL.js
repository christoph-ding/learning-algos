function llNode(val, next) {
  this.val = val || 0
  this.next = next || null
}

function mergeSort(head) {
  // if head represents a single element list, just return head
  if (head.next == null) {
    return head
  } else {
  // find the middle of the list,
  // so that we can have a 'left' and 'right' list to recurse on
  let leftListHead = head
  let leftListEnd = findBeforeMiddle(head)
  let rightListHead = leftListEnd.next
  leftListEnd.next = null

  // mergeSort the left and the right
  // so that we have 2 sorted lists
  let leftSortedListHead = mergeSort(leftListHead)
  let rightSortedListHead = mergeSort(rightListHead)

  // merge both sorted lists
  // return a sorted-list
  let combinedList = combineSortedLists(leftSortedListHead, rightSortedListHead)
  return combinedList
  }
}

function findBeforeMiddle(head) {
  // fast and slow runners!
  let currentSlow = currentFast = head

  while (currentFast && currentFast.next !== null && currentFast.next.next !== null) {
    currentSlow = currentSlow.next
    currentFast = currentFast.next.next
  }

  return currentSlow
}

function combineSortedLists(headOne, headTwo) {
  // the smallest of the two input heads will be returned
  let headOfCombinedList = null

  let currentOne = headOne
  let currentTwo = headTwo

  if (headOne.val < headTwo.val || headTwo === null) {
    currentOne = headOne.next
    headOfCombinedList = headOne
  } else if (headTwo.val < headTwo.val || headOne === null) {
    currentTwo = headTwo.next
    headOfCombinedList = headTwo
  }

  let currentCombinedTail = headOfCombinedList

  while (currentOne && currentTwo) {
    if (currentOne.val < currentTwo.val) {
      currentCombinedTail.next = currentOne
      currentOne = currentOne.next
    } else if (currentTwo.val < currentOne.val) {
      currentCombinedTail.next = currentTwo
      currentTwo = currentTwo.next
    }
    currentCombinedTail = currentCombinedTail.next
  }

  if (currentOne === null) {
    currentCombinedTail.next = currentTwo
  } else if (currentTwo === null) {
    currentCombinedTail.next = currentOne
  }


  return headOfCombinedList
}

// tests
let nodeSix = new llNode(6)
let nodeFive = new llNode(5)
let nodeFour = new llNode(4)
let nodeThree = new llNode(3)
let nodeTwo = new llNode(2)
let nodeOne = new llNode(1)

nodeOne.next = nodeThree
nodeThree.next = nodeFive
nodeFive.next = nodeTwo
nodeTwo.next = nodeFour
nodeFour.next = nodeSix

function logAll(head) {
  const listNodes = []

  let currentNode = head

  while (currentNode) {    
    listNodes.push(currentNode.val)
    currentNode = currentNode.next
  }

  return listNodes.join(' -> ')
}

mergeSort(nodeOne)
console.log(logAll(nodeOne))
