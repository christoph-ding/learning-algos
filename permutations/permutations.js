function permutations (input) {
  var output = []

  for (var i = 0; i < input.length; i++) {
    var currentElem = input[i]
    var restOfElem = input.splice()

  }
  return output
}

// test cases
var listOne = [1,2,3]
// permutationsOne = permutations(listOne)
// console.log(permutations)

console.log(listOne.slice(0,1).concat(listOne.slice(1)))
