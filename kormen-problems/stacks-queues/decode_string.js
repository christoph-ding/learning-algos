// without recursion
function decode_stringWithoutRecursion (inputString) {
  let output = ''

  // we are imitating stacks using an array
  let characterStack = []
  let currentSubString = ''

  inputString.split('').forEach(function(char) {
    if (char === ']') {
      console.log('rewind')
      // 'rewind'
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
