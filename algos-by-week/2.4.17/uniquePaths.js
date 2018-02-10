function robotPaths(height, width) {
  let grid = makeGrid(height, width)

  // TraverseGrid
  grid.forEach(function(row, yPos) {
    console.log('yPos: ', yPos)

    for (let xPos = 0; xPos < width; xPos++) {
      // bounds
      let totalNumberOfPathsToThisCell;
      if (xPos === 0 || yPos === 0) {        
        totalNumberOfPathsToThisCell = 1
      } else {
        // each cell should be sum of up 1, left 1
        let upOneNumPaths = grid[yPos - 1][xPos]
        let leftOneNumberPaths = grid[yPos][xPos - 1] 
        totalNumberOfPathsToThisCell = upOneNumPaths + leftOneNumberPaths
      }
      row[xPos] = totalNumberOfPathsToThisCell
    }
  })
 
  return grid[height - 1][width - 1]
}

function makeGrid(height, width) {
  let grid = new Array(height)

  let size = grid.length
  while (size--) {
    grid[size] = new Array(width)
  }

  return grid
}

// tests
console.log(robotPaths(3, 3)) // 2

