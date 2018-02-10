function robotPaths(height, width) {
  let numberOfPaths = 0

  let grid = makeGrid(height, width)






  return numberOfPaths
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
// console.log(robotPaths(2, 2)) // 2
// console.log(makeGrid(2, 2))
let grid = makeGrid(2, 2)
console.log(grid)

