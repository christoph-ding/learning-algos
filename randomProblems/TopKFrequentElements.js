function topKFrequentElements(elemList, k) {
  var output = []

  // step 1, O(n): get a DS with the frequency of each unique elem


  // step 2, O(n): place each elem:frequency pair into a helper list that naturally sorts


  // step 3, O(n): use 'sorted', helper list to build output


  return output
}

// tests
var testOne = [1,1,2]
console.log(topKFrequentElements(testOne, 1) // [1]
console.log(topKFrequentElements(testOne, 2) // [1, 2]
