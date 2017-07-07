function longestPalindrome(inputArray) {
  var letters = {}
  var longestRun = 0
  var hasLeftOver = false

  // gather the occurrence of each letter in inputArray
  inputArray.forEach(function(letter) {
    if (letters.hasOwnProperty(letter)) {
      letters[letter]++
    } else {
      letters[letter] = 1
    }
  })

  // use letters and their occurrence to calculate longestRun
  lettersInInputArray = Object.keys(letters)
  lettersInInputArray.forEach(function(letter) {
    numberOccurrence = letters[letter]
    if (numberOccurrence % 2 == 0) {
      longestRun += numberOccurrence
    } else if (numberOccurrence % 2 == 1) {
      
      var numberOfPairedLetters = numberOccurrence - 1
      longestRun += numberOfPairedLetters

      // if there is a single number, we can use just one as the 'middle' letter in the palindrome
      if (!(hasLeftOver)) {
        longestRun++
        hasLeftOver = true
      }

    }
  })

  return longestRun
}

// tests
var inputOne = 'abcccbA'
var answerOne = longestPalindrome(inputOne.split(''))
console.log('input: ', inputOne, ' : ', answerOne)

var inputTwo = 'abcccbAA'
var answerTwo = longestPalindrome(inputTwo.split(''))
console.log('input: ', inputTwo, ' : ', answerTwo)

