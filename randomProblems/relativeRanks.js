function relativeRanks(input) {
  var sortedList = input.sort().reverse()
  console.log(sortedList)


}

// tests
var listOne = [1, 2, 3]
var listTwo = [3, 2, 1]

console.log(relativeRanks(listOne)) // [3, 2, 1]
// console.log(relativeRanks(listTwo)) // [1, 2, 3]
