function treeNode(val, lc, rc) {
  this.val = val || null
  this.lc = lc || null
  this.rc = rc || null
}

function BSTFromSortedArray(inputList, leftBound, rightBound) {
  // find bounds of the inputList - 'left tree', 'the root of the current tree', 'right tree'
  var leftBound = leftBound || 0
  var rightBound = rightBound || inputList.length - 1
  var middleIndex = Math.floor((rightBound + leftBound) / 2)

  var currentRoot = new treeNode(inputList[middleIndex])

  console.log('middleIndex: ', middleIndex)
  console.log('leftBound: ', leftBound)
  console.log('rightBound: ', rightBound)

  // if there is a leftTree:
  if (leftBound < middleIndex) {
    console.log('a left tree exists!')
    
    var newRightBound = middleIndex - 1
    rootOfLeftTree = BSTFromSortedArray(inputList, leftBound, newRightBound)
    currentRoot.lc = rootOfLeftTree 
  }

  // if there is a rightTree:
  if (rightBound > middleIndex) {
    console.log('a right tree exists!')
    
    var newLeftBound = middleIndex + 1  
    rootOfRightTree = BSTFromSortedArray(inputList, newLeftBound, rightBound)  
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
var test = [1, 2, 3, 4, 5]

var rootOfTree = BSTFromSortedArray(test)
console.log(rootOfTree)
