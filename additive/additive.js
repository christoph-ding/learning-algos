// Additive number is a string whose digits can form additive sequence.
// A valid additive sequence should contain at least three numbers. Except for the first two numbers, each subsequent number in the sequence must be the sum of the preceding two.

// "112358" is an additive number because the digits can form an additive sequence: 1, 1, 2, 3, 5, 8.

// "199100199" is also an additive number, the additive sequence is: 1, 99, 100, 199.

var addingMachine = function(numString) {
  this.numString = numString;
};

addingMachine.prototype.determine = function() {
  // variables
  var numberList = this.numString;
  var listLength = numberList.length;

  // 'f' is 'first', 's' is 'second', 't' is 'third'
  var fSize = 1;
  var fIndex = 0;
  var sSize = 1;
  var sIndex = 1;
  var tSize = 1;
  var tIndex = 2;

  var fValue;
  var sValue;
  var tValue;

  updateNums();

  while (fIndex < listLength - 2) {
    // is there an additive Run?
    if (fValue + sValue === tValue) {
      checkAdditive();
      shiftRank();
    } else if (fValue + sValue < tValue) {
      tIndex++;
      sSize++;
    } else if (fValue + sValue > tValue) {
      tSize++;
    }
    updateNums();
  }  

  function updateNums() {
    fValue = Number(numberList.slice(fIndex, fIndex + fSize));
    sValue = Number(numberList.slice(sIndex, sIndex + sSize));
    tValue = Number(numberList.slice(tIndex, tIndex + tSize));
  }

  function shiftRank(){
    // the first number 'becomes' the second
    fIndex = sIndex;
    fSize = sSize;
    // the second number 'becomes' the third
    sIndex = tIndex
    sSize = tSize;    
    // we set a new third;
    tIndex = tSize + tIndex;
    tSize = 1;
  }

  function checkAdditive() {
    // it is considered an additive string IF the third element is the last 'number'
    if (tIndex + tSize > listLength) {
      return true;
    }
  }
};

// testing
var testString = '199100199';
var testAdding = new addingMachine(testString);
debugger;
testAdding.determine();

// module.exports = {
//   addingMachine: addingMachine
// }

