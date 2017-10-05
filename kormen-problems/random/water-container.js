function waterContainer(heights) {
  let lInd = 0
  let rInd = heights.length - 1
  let lH = heights[lInd]
  let rH = heights[rInd]
  let width = rInd + 1 - lInd
  let waterLevel = Math.min(lH, rH)

  let volume = {
    vol: width * waterLevel,
    rIndex: rInd,
    lIndex: lInd
  }

  while (rInd > lInd) {
    if 
  }

}

// tests
let heightsOne = [1, 5, 3, 2, 4]
console.log(waterContainer(heightsOne)) // 16
