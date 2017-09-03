function bottomLeftMost(node, depth) {
  depth = depth + 1 || 0

  // if there are no children, return oneself
  if (!(node.lc || node.rc)) {
    return {node: node, depth: depth}
  }

  // find left child's bottom left most node
  if (node.lc) {
    console.log('looking in LC of ', node.val)
    var bottomLeftMostLC = bottomLeftMost(node.lc, depth)
  }
  // find right child's bottom right most node
  if (node.rc) {
    console.log('looking in RC of ', node.val)
    var bottomLeftMostRC = bottomLeftMost(node.rc, depth)
  }

  // compare
  console.log('comparing ... lc: ', bottomLeftMostLC, ' rc: ', bottomLeftMostRC)
  if (!(node.rc) || bottomLeftMostLC.depth > bottomLeftMostRC.depth) {
    return bottomLeftMostLC
  } else if (!(node.lc) || bottomLeftMostRC.depth > bott) {
    return bottomLeftMostRC
  }
}

// nodes
function Node(val, lc, rc) {
  this.val = val
  this.lc = lc || null
  this.rc = rc || null
}

function makeABunchOfNodes(input) {
  var nodes = []

  input.forEach(function(key) {
    var nodeInstance = new Node(key)
    nodes.push(nodeInstance)
  })

  return nodes
}

// tests
var setOneNodes = makeABunchOfNodes([1,2,3,4,5])

// make tree one
var treeOneRoot = setOneNodes[2]

setOneNodes[1].lc = setOneNodes[0]
treeOneRoot.lc = setOneNodes[1]
setOneNodes[3].rc = setOneNodes[4]
treeOneRoot.rc = setOneNodes[3]

// console.log(treeOneRoot)

// var leftBottomOne = bottomLeftMost(treeOneRoot)
var testNodeTwo = new Node(2)
var testNodeOne = new Node(1, testNodeTwo)
console.log(bottomLeftMost(testNodeOne))
