function topKFrequentElements(elemList, k) {
  var output = []

  // step 1, O(n): get a DS with the frequency of each unique elem
  var frequencyHash = {}

  elemList.forEach(placeInFrequencyHash)

  // step 2, O(n): place each elem:frequency pair into a helper list that naturally sorts
  var helperSortList = []

  var uniqueElems = Object.keys(frequencyHash)
  uniqueElems.forEach(placeInFrequencySortList)

  // step 3, O(n): use 'sorted', helper list to build output

  helperSortList.reverse()
  helperSortList.forEach(function(elem) {
    console.log(elem)
  })

  return output

  // helper functions
  function placeInFrequencyHash(elem) {
    if (frequencyHash.hasOwnProperty(elem)) {
      frequencyHash[elem]++
    } else {
      frequencyHash[elem] = 1
    }
  }

  function placeInFrequencySortList(uniqueElem) {
    var elemFrequency = frequencyHash[uniqueElem]
    helperSortList[elemFrequency] = uniqueElem
  }

}

// tests
var testOne = [1, 1, 1, 2]
console.log(topKFrequentElements(testOne, 1)) // [1]
// console.log(topKFrequentElements(testOne, 2) // [1, 2]
