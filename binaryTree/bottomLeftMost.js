function bottomLeftMost(node, depth) {
  depth = depth + 1 || 0

  // if there are no children, return oneself
  if (!(node.lc || node.rc)) {
    return {node: node, depth: depth}
  }

  // find left child's bottom left most node
  if (node.lc) {
    var bottomLeftMostLC = bottomLeftMost(node.lc, depth)
  }
  // find right child's bottom right most node
  if (node.rc) {
    var bottomLeftMostRC = bottomRightMost(node.rc, depth)
  }

  // compare
  if (!(node.rc) || bottomLeftMostLC.depth > bottomLeftMostRC.depth) {
    return bottomLeftMostLC
  } else if (!(node.lc) || bottomLeftMostRC.depth > bott) {
    return bottomLeftMostRC
  }

  // or ... return oneself 

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

console.log(treeOneRoot)
