function linkedList(head, tail) {
  this.head = head
  this.tail = tail
}

function linkedListNode(val, next) {
  this.val = val
  this.next = next || null 
}

function generateLLNodes(input) {
  input.forEach(function(val, indx) {
    var newNode = new linkedListNode(val)


    if (indx < )
    console.log(val, '    ', indx)
  })
}

function checkPalindrome(linkedList) {

}



// tests
var nodeOne = new linkedListNode(1, null)
var nodeTwo = new linkedListNode(2, nodeOne)
var nodeThree = new linkedListNode(2, nodeTwo)

var nodeList = [1,2,3,4,5,6,7,8,9]
generateLLNodes(nodeList)

