function permutationWithoutStack(input) {
  let permutations = []
  let currentPermutation = []

  function recurse(characters) {
    if (!(characters)) {
      let word = currentPermutation.join('')
      console.log(word)
      permutations.push(word)
      currentPermutation = []
      return 
    } else {
      characters.forEach(function(char, indx) {
        currentPermutation.push(char)
        let leftPart = test.slice(0, indx)
        let rightPart = test.slice(indx + 1)
        let subList = leftPart.concat(rightPart)
        recurse(subList)
      })
    }
  }

  recurse(input)
  return permutations
}

// tests
let inputOne = ['a', 'b', ]
console.log(permutationWithoutStack(inputOne))

// let test = [1, 2, 3, 4, 5, 6, 7]
// let indx = 1
// let leftPart = test.slice(0, indx)
// console.log('left:' , leftPart)
// let rightPart = test.slice(indx + 1)
// console.log('right:' , rightPart)
// let list
