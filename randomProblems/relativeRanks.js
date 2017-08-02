function relativeRanks(input) {
  var helper = {}  
  var sortedList = input.sort().reverse()
  var output = []

  input.forEach(function(elem, i) {
    helper[elem] = i + 1
  })

  input.forEach(function(elem) {
    var rank = helper.get(elem)
    output.push(rank)
  })

  return output
}

// tests
var listOne = [1, 3, 2]
          //  [3, 2, 1]
var listTwo = [3, 2, 1]

console.log(relativeRanks(listOne)) // [3, 2, 1]
// console.log(relativeRanks(listTwo)) // [1, 2, 3]
