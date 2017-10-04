function mergeSort(inputList) {

  if (inputList.length < 2 ) {
    return inputList
  } else {
    // split the list into 2 sorted lists
    let midpointIndex = Math.floor(inputList.length / 2)

    let leftList = inputList.slice(0, midpointIndex)
    let sortedLeft = mergeSort(leftList)

    let rightList = inputList.slice(midpointIndex)
    let sortedRight = mergeSort(rightList)

    let combinedSortedList = combineLists(sortedLeft, sortedRight)
    return combinedSortedList
  }
}

function combineLists(listOne, listTwo) {
  let indexOne = 0
  let indexTwo = 0

  let sortedCombined = []

  while (indexOne < listOne.length && indexTwo < listTwo.length) {
    let valOne = listOne[indexOne]
    let valTwo = listTwo[indexTwo]

    if (valOne < valTwo) {
      sortedCombined.push(valOne)
      indexOne = indexOne + 1
    } else {
      sortedCombined.push(valTwo)
      indexTwo = indexTwo + 1
    }
  }

  // put the 'rest' of the remaining list in
  if (indexTwo > indexOne) {
    while (indexOne < listOne.length) {
      let valOne = listOne[indexOne]
      sortedCombined.push(valOne)
      indexOne = indexOne + 1
    }
  } else {
    while (indexTwo < listTwo.length) {
      let valTwo = listTwo[indexTwo]
      sortedCombined.push(valTwo)
      indexTwo = indexTwo + 1
    }
  }


  return sortedCombined
}

// tests
let inputOne = [3, 2, 4, 5, 1]
console.log(mergeSort(inputOne))

// let left = [3]
// let right = [2]
// console.log(combineLists(left, right))

