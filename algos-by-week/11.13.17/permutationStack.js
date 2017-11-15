function permutationWithoutStack(input) {
  let permutations = []
  let currentCharacters = []

  function recurse(characters) {
    if (!(characters.length)) {
      let currentPermutation = currentCharacters.join('')
      permutations.push(currentPermutation)
      return
    } else {
      characters.forEach(function(char, indx) {
        currentCharacters.push(char)
        // find the 'sublist'
        let leftPart = test.slice(0, indx)
        currentCharacters.pop()
      })
    }
  }

  recurse(input)
  return permutations
}

// tests
let inputOne = ['a', 'b', 'c']
console.log(permutationWithoutStack(inputOne))

// let test = [1, 2, 3, 4, 5, 6, 7]
// let indx = 1
// let leftPart = test.slice(0, indx)
// console.log('left:' , leftPart)
// let rightPart = test.slice(indx + 1)
// console.log('right:' , rightPart)
// let list
