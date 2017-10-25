// 
function productOfArrayExceptSelf(nums) {
  const output = []

  let productIncludingSelfandLeft = 1

  nums.forEach(function(num, index) {
    productIncludingSelfandLeft = productIncludingSelfandLeft * num
    output[index] = productIncludingSelfandLeft 
  })

  // interate through the right, setting output to the final 
  let productToRight = 1

  for (let i = output.length - 1; i >= 0; i--) {
    let firstIterationOutputVal = output[i]
    let productOfAllToLeft;
    if (i === 0) {
      productToLeft = 1
    } else {
      productToLeft = output[i - 1]
    }

    let finalOutputVal = productToLeft * productToRight
    productToRight = productToRight * nums[i]
  }

  return output
}

// tests
const listOne = [1,2,3,4]
console.log(productOfArrayExceptSelf(listOne))
