function rectangleOverlap (Arectangle, Brectangle) {
  // declare variables
  let horizontalOverlapExists = verticalOverlapExists = false
  let horizontalOverlapSize = verticalOverlapSize = 0

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

  console.log("AlcX: ", AlcX)
  console.log("AlcY: ", AlcY)
  console.log("ArcX: ", ArcX)
  console.log("ArcY: ", ArcY)

  console.log("BlcX: ", BlcX)
  console.log("BlcY: ", BlcY)
  console.log("BrcX: ", BrcX)
  console.log("BrcY: ", BrcY)

  // are there overlaps?
  // horizontal
  if (BlcX < ArcX && BlcX > AlcX) {
    horizontalOverlapExists = true
  }

  else if () {
     
  }

  // // vertical
  // if () {

  // }

  // else if () { 

  // }

  // // if so, return area
  // let overlapExists = (horizontalOverlapExists && verticalOverlapExists)

  // if (overlapExists) {
  //   return horizontalOverlapSize * verticalOverlapSize
  // }

  // else {
  //   return 0
  // }

}

// tests
const ARectangle = [[0, 0], [10, 10]]
const BRectangle = [[5, 5], [15, 15]]

console.log(rectangleOverlap(ARectangle, BRectangle))
