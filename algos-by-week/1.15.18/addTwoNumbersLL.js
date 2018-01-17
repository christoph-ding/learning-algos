function linkedListNode(val, next) {
  this.val = val || 0
  this.next = next || null
}

function addTwoNumbersLL(numOne, numTwo) {
  let currentTail  = null
  let currentOne = numOne || null
  let currentTwo = numTwo || null
  let carryOne = 0

  while (currentOne || currentTwo) {
    let digitOne = currentOne.val || 0
    let digitTwo = currentTwo.val || 0
    let newValue = digitOne + digitTwo + carryOne

    if (newValue >= 10) {
      carryOne = 1
      newValue = newValue % 10
    } else {
      carryOne = 0
    }

    let newDigitNode = new linkedListNode(newValue, null)

    if (!(currentTail)) {
      currentTail = newDigitNode
    } else {
      currentTail.next = newDigitNode
    }

    currentOne = currentOne.next || null
    currentTwo = currentTwo.next || null

    console.log('adding: ', digitOne, ' + ', digitTwo, ' newValue: ', newValue, ' digit: ', newValue % 10, ' carryOne: ', carryOne)
  }

  // testing


}

let llThree = new linkedListNode(3, null)
let llTwo = new linkedListNode(9, llThree)
let llOne = new linkedListNode(5, llTwo)

let llSix = new linkedListNode(2, null)
let llFive = new linkedListNode(1, llSix)
let llFour = new linkedListNode(4, llFive)

addTwoNumbersLL(llOne, llFour) 
