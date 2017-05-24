function permutations (input) {
  var output = []

  for (var i = 0; i < input.length; i++) {
    var currentElem = input[i]
    var restOfElem = getRestOfList(i, input.slice())

    console.log(restOfElem)

    var comboesOfRest = permutations(restOfElem)


    for (var j = 0; j < comboesOfRest.length; j++) {
      var totalCombo = currentElem + comboesOfRest[j]

      output.push(totalCombo)
    }
  }
  return output;
}

function getRestOfList(index, list) {
  var restOfList = list.slice(0, index).concat(list.slice(index + 1))
  return restOfList
}

// test cases
var listOne = [1,2,3]
console.log(permutations(listOne))
