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
function node(val) {
  this.val = val;
}

// tests
