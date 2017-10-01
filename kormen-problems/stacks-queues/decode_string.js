// without recursion
function decode_stringWithoutRecursion (inputString) {
  let output = []

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                    'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u',
                    'v', 'w', 'x', 'y', 'z'
                   ]

  const alphabetSet = new Set(alphabet)

  // we are imitating stacks using an array
  let characterStack = []

  // currentSubstring is actually also a stack, because we add characters to it 'in reverse order'
  // of their occurent in inputString, because we rewind 'in reverse order'
  let currentSubStringCharacters = []

  inputString.split('').forEach(function(char) {
    if (char === ']') {
      rewind()
    } else {
      characterStack.push(char)
    }
  })

  return output.join('')

  // helpers
  function rewind() {
    while (true) {
      let currentCharacter = characterStack.pop()
      if (alphabetSet.has(currentCharacter)) {
        currentSubStringCharacters.push(currentCharacter)
      } else if ((!(isNaN(currentCharacter)))) {
        multiplyString(currentCharacter)
        if (characterStack.length === 0) {
          moveToOutput()
          break
        }
      } else if (currentCharacter === undefined) {
        break
      }
    }
  }

  function multiplyString(multiplier) {
    let counter = 1
    let newSubString = []

    while (counter <= multiplier) {
      currentSubStringCharacters.forEach(function(char) {
        newSubString.push(char)
      })
      counter = counter + 1
    }

    currentSubStringCharacters = newSubString
  }
  
  function moveToOutput() {
    while (currentSubStringCharacters.length) {
      output.push(currentSubStringCharacters.pop())  
    }
  }
}

// tests
let inputStringOne = "3[a]2[bc]"
// console.log(decode_stringWithoutRecursion(inputStringOne)) // "aaabcbc"

let inputStringTwo = "3[a2[c2[d]]]"
console.log(decode_stringWithoutRecursion(inputStringTwo)) // acddcddacddcddacddcdd

// with recursion
function decode_stringUsingRecursion (inputString) {

}
