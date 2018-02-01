function treeNode(val, lc, rc) {
  this.val = val || null
  this.lc = lc || null
  this.rc = rc || null
}

function zigZagTraversal(root) {
  const output = []
  const currentLevel = [root]
  const nextLevel = []
  let zigRight = true

  while (currentLevel.length) {
    console.log('doing somthing ...')




  }
}

// tests
let nodeOne = new treeNode(5, null, null)
zigZagTraversal(nodeOne)
