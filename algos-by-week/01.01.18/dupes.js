function findDupes(inputList) {
  const output = []

  inputList.forEach(function(number, index) {

    let correctNumber = number

    if (Array.isArray(number)) {
      correctNumber = number[0]
    } 

    // we wanna be 1 indexed
    let targetIndex = correctNumber - 1
    let thingAtTargetIndex = inputList[targetIndex]

    if (Array.isArray(thingAtTargetIndex)) {
      output.push(correctNumber)
    } else {
      let newFormat = [thingAtTargetIndex]
      inputList[targetIndex] = newFormat
    }
  })

  return output
}

// tests
const inputOne = [3, 2, 2, 1, 3]
console.log(findDupes(inputOne))
