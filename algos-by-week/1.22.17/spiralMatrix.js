function spiralMatrix(matrix) {
  let xCoord = 0
  let yCoord = 0

  let boundRight = Math.max(matrix[0].length - 1, 0)
  let boundUp = 0
  let boundDown = Math.max(matrix.length - 1, 0)
  let boundLeft = 0

  while (true) {
    goRight()
    boundUp = boundUp + 1

    if (!(stillGoing())) {
      break
    }

    goDown()
    boundRight = boundRight - 1

    if (!(stillGoing())) {
      break
    }

    goLeft()
    boundDown = boundDown - 1

    if (!(stillGoing())) {
      break
    }

    goUp()
    boundLeft = boundLeft + 1
    
    if (!(stillGoing())) {
      break
    }
  }

  function goRight() {
    for (let x = boundLeft; x <= boundRight; x++) {
      xCoord = x
      action()
    }
  }

  function goDown() {
    for (let y = boundUp; y <= boundDown; y++) {
      yCoord = y
      action()
    }
  }

  function goLeft() {
    for (let x = boundRight; x >= boundLeft; x--) {
      xCoord = x
      action()
    }
  }

  function goUp() {
    for (let y = boundDown; y >= boundUp; y--) {
      yCoord = y
      action()
    }
  }

  function stillGoing() {
    return ((boundRight >= boundLeft) && (boundDown >= boundUp))
  }

  function action() {
    let valueAtCoord = matrix[yCoord][xCoord]
    console.log(valueAtCoord)
  }
}

// tests
const matrixOne = [
        [1, 2, 3],
        [8, 9, 4],
        [7, 6, 5]
      ]
const matrixTwo = [
        [1, 2, 3],
        [6, 5, 4],
      ]
const matrixThree = [
        [1, 2, 3]
      ]
const matrixFour = [
        [ 1,  2, 3],
        [10, 11, 4],
        [ 9, 12, 5],
        [ 8,  7, 6],
      ]

console.log('======================\n')

spiralMatrix(matrixOne)
console.log('\n======================\n')

spiralMatrix(matrixTwo)
console.log('\n======================\n')

spiralMatrix(matrixThree)
console.log('\n======================\n')
spiralMatrix(matrixFour)

