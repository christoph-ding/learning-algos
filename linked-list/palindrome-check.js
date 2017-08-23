function linkedList(head, tail) {
  this.head = head || null
  this.tail = tail || null
}

function linkedListNode(val, next) {
  this.val = val
  this.next = next || null 
}

function generateLLNodes(input) {
  var generatedLL = new linkedList()
  var previousNode = null

  input.forEach(function(val, indx) {    
    var newNode = new linkedListNode(val)

    if (indx === 0) {
      generatedLL.head = newNode
    }

    if (indx > 0) {
      previousNode.next = newNode
    }

    if (indx === input.length - 1) {
      generatedLL.tail = newNode
    }

    previousNode = newNode
  })

  return generatedLL
}

function checkPalindrome(linkedList) {

}



// tests
var nodeOne = new linkedListNode(1, null)
var nodeTwo = new linkedListNode(2, nodeOne)
var nodeThree = new linkedListNode(2, nodeTwo)

var nodeList = [1,2,3,4,5,6,7,8,9]
generateLLNodes(nodeList)

