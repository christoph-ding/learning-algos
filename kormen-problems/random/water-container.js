function waterContainer(heights) {
  let lInd = 0
  let rInd = heights.length - 1
  let lH = heights[lInd]
  let rH = heights[rInd]
  let width = rInd + 1 - lInd
  let waterLevel = Math.min(lH, rH)

  let currentVolume = {
    vol: width * waterLevel,
    rIndex: rInd,
    lIndex: lInd
  }

  while (rInd > lInd) {
    let rightMoveWaterLevel = Math.min(lH, heights[rInd - 1])
    let leftMoveWaterLevel = Math.min(rH, heights[lInd + 1])
    // we should move the left index
    if (leftMoveWaterLevel > rightMoveWaterLevel) {
      lInd = lInd + 1
    } else {
    // we should move the right index
      rInd = rInd - 1
    }
    recalculate()
  }

  return currentVolume
  
  // helper function
  function recalculate() {
    lH = heights[lInd]
    rH = heights[rInd]
    width = rInd - lInd
    waterLevel = Math.min(lH, rH)

    let newVolume = {
      vol: width * waterLevel,
      rIndex: rInd,
      lIndex: lInd  
    }

    if (newVolume.vol > currentVolume.vol) {
      currentVolume = newVolume
    }
  }
}

// tests
// let heightsOne = [1, 5, 3, 2, 4]
let heightsOne = [11, 20, 100, 1, 5, 6]
console.log(waterContainer(heightsOne)) // 16
