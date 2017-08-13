function comboSum(nums, target) {
  var answers = []

  // all function calls of gatherCombos will manipulate this DS
  // each function call will add, then remove from singleCombo
  var singleCombo = []

  function gatherCombos(innerTarget) {
    console.log('combo: ', singleCombo, ' innerTarget: ', innerTarget)
    if (innerTarget === 0) {
      console.log('done!')
      answers.push(singleCombo)
    } else {      
      nums.forEach(function(num) {
        if (num <= innerTarget) {
          console.log('making recursive call!')
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
