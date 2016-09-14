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

// testing
module.exports = {
  treeNode: treeNode
}
