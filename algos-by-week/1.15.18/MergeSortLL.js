function llNode(val, next) {
  this.val = val || 0
  this.next = next || null
}

function mergeSort(head) {
  // if head represents a single element list, just return head

  // find the middle of the list,
  // so that we can have a 'left' and 'right' list to recurse on
  let leftListHead = head
  let leftListEnd = findBeforeMiddle(head)
  let rightListHead = leftListEnd.next
  leftListEnd.next = null

  console.log('leftList: ', leftListHead)
  console.log('rightList: ', rightListHead)

  // mergeSort the left and the right
  // so that we have 2 sorted lists

  // merge both sorted lists

  // return a sorted-list
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

function mergeTwoSortedLists(headOne, headTwo) {

}

// tests
let nodeFour = new llNode(4)
let nodeThree = new llNode(3)
let nodeTwo = new llNode(2)
let nodeOne = new llNode(1)

nodeOne.next = nodeThree
nodeTwo.next = nodeFour

function logAll(head) {
  const listNodes = []

  let currentNode = head

  while (currentNode) {    
    listNodes.push(currentNode.val)
    currentNode = currentNode.next
  }

  return listNodes.join(' -> ')
}

console.log(logAll(nodeOne))
console.log(logAll(nodeTwo))
console.log(' =================== ')

console.log('middle: ', findBeforeMiddle(nodeOne))

// console.log(mergeSort(nodeFour))
