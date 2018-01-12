function rectangleOverlap (Arectangle, Brectangle) {
  // declare variables
  // overlap is an integer that can be evaluated as a boolean
  let horizontalOverlap = verticalOverlap = 0

  const ALeftBound = Arectangle[0][0]
  const ABottomBound = Arectangle[0][1]
  const ARightBound = Arectangle[1][0]
  const ATopBound = Arectangle[1][1]

  const BLeftBound = Brectangle[0][0]
  const BBottomBound = Brectangle[0][1]
  const BRightBound = Brectangle[1][0]
  const BTopBound = Brectangle[1][1]

  // are there overlaps?
  // horizontal
  if (BLeftBound < ARightBound && BLeftBound > ALeftBound) {
    horizontalOverlap = absoluteDifference(BLeftBound, ARightBound)
  } else if (BRightBound > ALeftBound && BRightBound < ARightBound) {
    horizontalOverlapS = absoluteDifference(BRightBound, ALeftBound)
  }

  // vertical
  if (BBottomBound < ATopBound && BBottomBound > ABottomBound) {
    verticalOverlap = absoluteDifference(BBottomBound, ATopBound)
  } else if (BTopBound > ABottomBound && BTopBound < ATopBound) {
    verticalOverlap = absoluteDifference(BTopBound, ABottomBound)
  }

  return horizontalOverlap * verticalOverlap
}

function absoluteDifference(a, b) {
  return Math.abs(a - b)
}

// tests
const ARectangleOne = [[0, 0], [10, 10]]
const BRectangleOne = [[5, 5], [15, 15]]
console.log(rectangleOverlap(ARectangleOne, BRectangleOne))

console.log("===============================")

const ARectangleTwo = [[0, 0], [10, 10]]
const BRectangleTwo = [[12, 12], [15, 15]]
console.log(rectangleOverlap(ARectangleTwo, BRectangleTwo))

console.log("===============================")

const ARectangleThree = [[0, 0], [10, 10]]
const BRectangleThree = [[7, 5], [10, 11]]
console.log(rectangleOverlap(ARectangleThree, BRectangleThree))
