function linkedListNode(val, next) {
  this.val = val || 0
  this.next = next || null
}

function addTwoNumbersLL(numOne, numTwo) {
  let starterLL = new linkedListNode(0, null)
  let currentTail = starterLL
  let currentOne = numOne || null
  let currentTwo = numTwo || null
  let carryOne = 0

  while (currentOne || currentTwo) {

    let digitOne = 0
    let digitTwo = 0
    if (currentOne) {
      digitOne = currentOne.val
    } 

    if (currentTwo) {
      digitTwo = currentTwo.val
    } 

    let newValue = digitOne + digitTwo + carryOne

    if (newValue >= 10) {
      carryOne = 1
      newValue = newValue % 10
    } else {
      carryOne = 0
    }

    currentTail.next = new linkedListNode(newValue, null)

    currentTail = currentTail.next

    if (currentOne !== null) {
      currentOne = currentOne.next  
    } else {
      currentOne = null
    }

    if (currentTwo !== null) {
      currentTwo = currentTwo.next  
    } else {
      currentTwo = null
    }

    console.log('adding: ', digitOne, ' + ', digitTwo, ' newValue: ', newValue, ' digit: ', newValue % 10, ' carryOne: ', carryOne)
  }

  // testing
  let currentLogging = starterLL.next
  console.log('=======================')

  while (currentLogging) {
    console.log(currentLogging)
    currentLogging = currentLogging.next
  }
}

let llThree = new linkedListNode(3, null)
let llTwo = new linkedListNode(9, llThree)
let llOne = new linkedListNode(5, llTwo)


// 5 -> 9 -> 3       4 -> 1 -> 2 -> 7
// 395 + 7214

let llSeven = new linkedListNode(7, null)
let llSix = new linkedListNode(2, llSeven)
let llFive = new linkedListNode(1, llSix)
let llFour = new linkedListNode(4, llFive)

addTwoNumbersLL(llOne, llFour) 
