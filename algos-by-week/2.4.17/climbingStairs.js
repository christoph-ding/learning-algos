function runClimbStairsNoMemo(n) {
  let noMemoCalcs = 0  
  let calculatedByN = []
  let redundantCalcs = 0

  function climbingStairsNoMemo(n) {

    // this is just to help count complexity
    if (!(calculatedByN[n])) {
      calculatedByN[n] = true
    } else {
      redundantCalcs = redundantCalcs + 1
    }
    noMemoCalcs = noMemoCalcs + 1
    console.log('calculated at: ', n, ' noMemoCalcs: ', noMemoCalcs)

    // this is the algo itself
    if (n <= 2 && n >= 0) {
      return n
    } else if (n > 2) {
      return climbingStairsNoMemo(n - 1) + climbingStairsNoMemo(n - 2)
    } else {
      return 0
    }
  }

  let answer = climbingStairsNoMemo(n)
  console.log('to get ', n, ' calculations: ', noMemoCalcs, ' redundantCalcs: ', redundantCalcs)
  return answer
}


// tests for no memoization
// base cases
// console.log(runClimbStairsNoMemo(0))
// console.log(runClimbStairsNoMemo(1))
// console.log(runClimbStairsNoMemo(2))

// more cases
// console.log(runClimbStairsNoMemo(3))
// console.log(runClimbStairsNoMemo(4))
console.log(runClimbStairsNoMemo(5)) 
console.log(runClimbStairsNoMemo(6)) 
