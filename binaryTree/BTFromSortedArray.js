function treeNode(val, lc, rc) {
  this.val = val || null
  this.lc = lc || null
  this.rc = rc || null
}

function BSTFromSortedArray(inputList, leftBound, rightBound) {
  // find bounds of the inputList - 'left tree', 'the root of the current tree', 'right tree'
  var middleIndex = Math.floor(inputList.length / 2)
  var leftBound = leftBound || 0
  var rightBound = rightBound || inputList.length - 1

  currentRoot = new treeNode(inputList[middleIndex])

  console.log('middleIndex: ', middleIndex)
  console.log('leftBound: ', leftBound)
  console.log('rightBound: ', rightBound)

  // if there is a leftTree:
  if (leftBound < middleIndex) {
    console.log('a left tree exists!')
    rootOfLeftTree = BSTFromSortedArray(inputList, newLeftBound, newRightBound)
    currentRoot.lc = rootOfLeftTree 
  }

  // if there is a rightTree:
  if (rightBound > middleIndex) {
    console.log('a right tree exists!')
    rootOfRightTree = BSTFromSortedArray(inputList, newLeftBound, newRightBound)  
    currentRoot.rc = rootOfRightTree
  }

  return currentRoot
}

// is this neccesary?
function createNodesFromValues(listOfValues) {
  var nodesList = listOfValues.map(function(value) {
    return new treeNode(value)
  })
  return nodesList
}

// test
var test = [1, 2, 3, 4, 5, 6]
// var test = [1, 2, 3, 4, 5]

BSTFromSortedArray(test)
