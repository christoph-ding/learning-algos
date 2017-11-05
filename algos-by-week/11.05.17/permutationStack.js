function permutationWithoutStack(input) {
  let permutations = []
  let currentPermutation = []

  function recurse(skipIndx) {

    skipIndx == skipIndx || -1

    if (currentPermutation.length === input.length) {
      let currentPermutationAsString = currentPermutation.join('')
      return permutations.push(currentPermutationAsString)
    } else {

      for (let i = 0; i < input.length)



      input.forEach(function(char, indx) {
          if (skipIndx !== null && indx !== skipIndx) {
            currentPermutation.push(char)
            recurse(input, indx)
            currentPermutation.pop()            
          }
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
