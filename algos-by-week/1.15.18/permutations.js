function permutations(elements) {
  const permutations = []
  let currentPerm = []

  function inner(subElements) {
    if (!(subElements.length)) {
      let currentPermAsString = currentPerm.join('')
      permutations.push(currentPermAsString))
    } else {
      subElements.forEach( (elem, index) => {
        currentPerm.push(elem)
        let otherElements = subElements.slice(0, index).concat(subElements.slice(index + 1))
        inner(otherElements)
        currentPerm.pop()
      })
    }
  }

  inner(elements)

  return permutations
}

// tests
 var testOne = [1, 2, 3]
console.log(permutations(testOne))
