function comboSum(nums, target) {
  var answer = []

  function gatherCombos(subNums, newTarget) {
    for (var i = 0; i < subNums.length; i++) {
      var currentNum = subNums[i]
      if (currentNum < newTarget) {
        
      } else if (currentNum === newTarget) {

      }
    }
  }
  // call the inner function
  gatherCombos(nums, target)
  return answers
}

var testCaseOne = {nums: [1, 2, 3], target: 4}
var answerOne = comboSum(testCaseOne.nums, testCaseOne.target)
