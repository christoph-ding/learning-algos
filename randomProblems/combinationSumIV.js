function comboSum(nums, target) {
  var answers = []

  // all function calls of gatherCombos will manipulate this DS
  // each function call will add, then remove from singleCombo
  var singleCombo = []

  function gatherCombos(innerTarget) {
    if (innerTarget === 0) {
      // we have to remember to 'copy' singleCombo, 
      // because arrays are called by reference
      answers.push(singleCombo.slice())
    } else {      
      nums.forEach(function(num) {
        if (num <= innerTarget) {
          singleCombo.push(num)
          gatherCombos(innerTarget - num)
          singleCombo.pop()
        }          
      })
    }
  }

  gatherCombos(target)
  return answers
}

var testCaseOne = {nums: [1, 2], target: 2}
var answerOne = comboSum(testCaseOne.nums, testCaseOne.target)
console.log(answerOne)

var testCaseTwo = {nums: [1, 2, 3], target: 4}
var answerTwo = comboSum(testCaseTwo.nums, testCaseTwo.target)
console.log(answerTwo)
