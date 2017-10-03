function mergeSort(inputList) {

  if (inputList.length < 2 ) {
    return inputList
  } else {
    // split the list into 2 sorted lists
    let midpointIndex = Math.floor(inputList.length / 2)

    let leftList = inputList.slice(0, midpointIndex)
    console.log(leftList)
    let sortedLeft = mergeSort(leftList)

    let rightList = inputList.slice(midpointIndex)
    console.log(rightList)
    let sortedRight = mergeSort(rightList)

    return combineLists(sortedLeft, sortedRight)
  }
}

function combineLists(listOne, listTwo) {

}

// tests
let inputOne = [3, 2, 4, 5, 1]
console.log(mergeSort(inputOne))
