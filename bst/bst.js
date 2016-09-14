var treeNode = function(value, leftChild, rightChild) {
  this.value = value;
  this.leftChild = leftChild;
  this.rightChild = rightChild;
}

// operations:

// searching:
treeNode.prototype.searchDepth = function(trgtValue, currentNode) {
  var currentNode = currentNode || this;

  // search children
  // use the ordered nature of the tree
  if (currentNode.value < trgtValue && currentNode.rightChild) {
    return this.searchDepth(trgtValue, currentNode.rightChild);
  } else if (currentNode.value > trgtValue && currentNode.leftChild) {
    return this.searchDepth(trgtValue, currentNode.leftChild);
  }

  // found the node
  if (currentNode.value === trgtValue) {
    return true;
  }
  // not found
  return false;
}

treeNode.prototype.widthSearch = function(trgtValue) {
  // I should implement an actual queue class
  var queue = [this];

  while (queue.length) {
    var currentNode = queue.shift();
    
    // check
    if (currentNode.value === trgtValue) {
      return true;
    };

    // add child nodes to queue
    if (currentNode.leftChild) {
      queue.push(currentNode.leftChild);
    };

    if (currentNode.rightChild) {
     queue.push(currentNode.rightChild);
    };
  }

  return false;
}


// testing
var value = 10;
var leftChild = new treeNode(9);
var rightChild = new treeNode(12);
var testTree = new treeNode(value, leftChild, rightChild);

testTree.widthSearch(12);

module.exports = {
  treeNode: treeNode
}
