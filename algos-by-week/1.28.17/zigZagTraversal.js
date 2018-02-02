function treeNode(val, lc, rc) {
  this.val = val || null
  this.lc = lc || null
  this.rc = rc || null
}

function zigZagTraversalOne(root) {
  const output = []
  let currentLevel = [root]
  let currentVals = []
  let nextLevel = []
  let zigRight = false

  while (currentLevel.length) {
    for (let i = currentLevel.length - 1; i >= 0; i--) {
      let currentNode = currentLevel[i]
      currentVals.push(currentNode.val)

      console.log('currentNode: ', currentNode.val)

      if (zigRight) {
        if (currentNode.rc) {
          nextLevel.push(currentNode.rc)
        }
        if (currentNode.lc) {
          nextLevel.push(currentNode.lc)
        }
      } else {
        if (currentNode.lc) {
          nextLevel.push(currentNode.lc)
        }
        if (currentNode.rc) {
          nextLevel.push(currentNode.rc)
        }
      }
    }
    console.log(nextLevel)
    output.push(currentVals.slice())
    currentVals = []
    currentLevel = nextLevel
    nextLevel = []
    zigRight = !(zigRight)
  }

  return output
}

// tests
let nodeSeven = new treeNode(7)
let nodeSix = new treeNode(15)
let nodeFive = new treeNode(2)
let nodeFour = new treeNode(1)
let nodeThree = new treeNode(20, nodeSix, nodeSeven)
let nodeTwo = new treeNode(9, nodeFour, nodeFive)
let nodeOne = new treeNode(3, nodeTwo, nodeThree)
console.log(zigZagTraversalOne(nodeOne))
