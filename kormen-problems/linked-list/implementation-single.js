function singleLinkedNode(key) {
  this.key = key
  this.next = null
}

singleLinkedNode.prototype.insertAfterTail = function(node) {
  this.next = node
}

// no circular
function singleLinkedList(head) {
  this.head = head || null
  this.tail = this.findTail()
}

singleLinkedList.prototype.iterateThroughLL = function(searchCondition, cb) {
    var cb = cb || undefined

    let currentNode = this.head

    while (currentNode !== null) {
      let foundNode = searchCondition(currentNode)
      if (foundNode) {
        if (cb) {
          cb(foundNode)
        }
        break
      }
      currentNode = currentNode.next
    }

    return currentNode
}

singleLinkedList.prototype.findTail = function() {
  function isTail(node) {
    return node.next === null
  }

  return this.iterateThroughLL(isTail)
}

singleLinkedList.prototype.searchForNode = function(target) {
  function isTarget(node) {
    return node.key === target
  }

  return this.iterateThroughLL(isTarget)
}

singleLinkedList.prototype.deleteNode = function(key) {

}

singleLinkedList.prototype.insertNodeAfterK = function(key) {

}

singleLinkedList.prototype.insertAfterTail = function(key) {

}

singleLinkedList.prototype.insertBeforeHead = function(key) {

}

// tests
let nodeOne = new singleLinkedNode(1)
let nodeTwo = new singleLinkedNode(2)
let nodeThree = new singleLinkedNode(3)
nodeOne.insertAfterTail(nodeTwo)
nodeTwo.insertAfterTail(nodeThree)

// let listEmpty = new singleLinkedList()
// console.log(listEmpty)

let listOne = new singleLinkedList(nodeOne)
console.log(listOne.searchForNode(3)) // finds
console.log(listOne.searchForNode(4)) // does not find
console.log(listOne)


