function pathSum(root, target) {

  var leftChildMakesSum = false;
  var rightChildMakesSum = false;

  // root has no childern
  if (!(root.lc || root.rc)) {
    console.log('checking with base case')
    return root.val === target    
  }

  if (root.lc) {
    console.log('checking left child')
    leftChildMakesSum = pathSum(root.lc, target - root.val)
  }

  if (root.rc) {
    console.log('checking right child')    
    rightChildMakesSum = pathSum(root.rc, target - root.val)
  }

  return leftChildMakesSum || rightChildMakesSum
}

// we need to define a BST first ... blagh!
function treeNode(val, left, right) {
  this.val = val
  this.lc = left || null
  this.rc = right || null
}

function generateBST(listOfValues) {
      
}

// tests
var nodeValuesOne = [1,2,3]

var nodeOne = new treeNode(1)
var nodeTwo = new treeNode(1)
nodeOne.lc = nodeTwo

var testOne = pathSum(nodeOne, 2)
console.log(testOne)
