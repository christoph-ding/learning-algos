let noMemoCalcs = 0

function runClimbStairsNoMemo(n) {
  let answer = climbingStairsNoMemo(n)
  console.log('to get ', n, ' calculations: ', noMemoCalcs)
  return answer
}


function climbingStairsNoMemo(n) {
  noMemoCalcs = noMemoCalcs + 1  
  if (n <= 2 && n >= 0) {
    return n
  } else if (n > 2) {
    return climbingStairsNoMemo(n - 1) + climbingStairsNoMemo(n - 2)
  } else {
    return 0
  }
}

// tests for no memoization

// base cases
console.log(runClimbStairsNoMemo(0)) // 0
