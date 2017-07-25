function relativeRanks(input) {
  var helper = {}  
  var sortedList = input.sort().reverse()

  input.forEach(function(elem, i) {
    helper[elem] = i
    console.log(elem, i)
  })

}

// tests
var listOne = [1, 3, 2]

          //  [3, 2, 1]
var listTwo = [3, 2, 1]

console.log(relativeRanks(listOne)) // [3, 2, 1]
// console.log(relativeRanks(listTwo)) // [1, 2, 3]
