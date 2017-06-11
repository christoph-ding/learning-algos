function maxConsecutiveOnes(input) {
  var longestSoFar = 0;
  var currentRun = 0;

  input.forEach( function(elem) {
    if (elem === 1) {
      currentRun++
      compareAndUpdate()
    } else {
      compareAndUpdate()
      currentRun = 0
    }
  })

  function compareAndUpdate () {
    if (currentRun > longestSoFar) {
      longestSoFar = currentRun;
    }
  }

  return longestSoFar;
}

// tests
var listOne = [1,1,0,0,1,1,1,1,0,1,1,1,1,1];

console.log(maxConsecutiveOnes(listOne));
