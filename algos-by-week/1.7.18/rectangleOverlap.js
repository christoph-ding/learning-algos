function rectangleOverlap (Arectangle, Brectangle) {
  // declare variables
  // overlap is an integer that can be evaluated as a boolean
  let horizontalOverlap = verticalOverlap = 0

  console.log('Arectangle', Arectangle)
  console.log('BRectangle', Brectangle)

  const AlcX = Arectangle[0][0]
  const AlcY = Arectangle[0][1]
  const ArcX = Arectangle[1][0]
  const ArcY = Arectangle[1][1]

  const BlcX = Brectangle[0][0]
  const BlcY = Brectangle[0][1]
  const BrcX = Brectangle[1][0]
  const BrcY = Brectangle[1][1]

  // are there overlaps?
  // horizontal
  if (BlcX < ArcX && BlcX > AlcX) {
    horizontalOverlap = absoluteDifference(BlcX, ArcX)
  } else if (BrcX > AlcX && BrcX < ArcX) {
    horizontalOverlapS = absoluteDifference(Brcx, Alcx)
  }

  // vertical
  if (BlcY < ArcY && BlcY > AlcY) {
    verticalOverlap = absoluteDifference(BlcY, ArcY)
  } else if (BrcY > AlcY && BrcY < ArcY) {
    verticalOverlap = absoluteDifference(BrcY, AlcY)
  }

  // testing
  console.log('horizontalOverlap: ', horizontalOverlap)
  console.log('verticalOverlap: ', verticalOverlap)

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
