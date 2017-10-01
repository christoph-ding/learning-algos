// without recursion
function decode_stringWithoutRecursion (inputString) {
  let output = ''

  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g',
                    'h', 'i', 'j', 'k', 'l', 'm', 'n',
                    'o', 'p', 'q', 'r', 's', 't', 'u',
                    'v', 'w', 'x', 'y', 'z'
                   ]

  const alphabetSet = new Set(alphabet)

  // we are imitating stacks using an array
  let characterStack = []
  let currentSubString = []

  function moveToOutput() {
    currentSubString.forEach(function(char) {
      output.push(char)
    })
    currentSubString = []
  }

  function multiplyString(multiplier) {
    let counter = 1
    let newSubString = []
    let currentSubStringAsString = currentSubString.join('')

    while (counter <= multiplier) {
      newSubString.push(currentSubStringAsString)
      counter = counter + 1
    }
    currentSubString = newSubString
  }

  function rewind() {
    while (true) {
      let currentCharacter = characterStack.pop()
      if (alphabetSet.has(currentCharacter)) {
        currentSubString.push(currentCharacter)
      } else if ((!(isNan(currentCharacter)))) {
        multiplyString(currentCharacter)

        if (characterStack.length() === 0) {
          moveToOutput()
        }
      }
    }
    console.log(characterStack)
  }

  inputString.split('').forEach(function(char) {
    if (char === ']') {
      rewind()
    } else {
      characterStack.push(char)
    }
  })

  return output
}

// tests
let inputStringOne = "3[a]2[bc]"
console.log(decode_stringWithoutRecursion(inputStringOne)) // "aaabcbc"


// with recursion
function decode_stringUsingRecursion (inputString) {

}
