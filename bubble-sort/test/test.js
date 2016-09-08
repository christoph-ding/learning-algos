var assert = require('assert');
var bubbleSorter = require('../bubble-sort.js').bubbleSorter;

describe('BubbleSorter Class', function() {
  // hooks and such
  beforeEach(function() {
    this.testList = [4,3,2,1];
    this.testSorter = new bubbleSorter(this.testList);
  });

  it('should return return an object, not a primitive', function() {
    function isActualObject(testObject) {
      // there are many cases in which something which isn't really 
      // what we mean by 'object' will be typeof 'object'
      if (typeof testObject === 'object' && testObject !== null && !(testObject instanceof Array)) {
        return true;
      }
      return false;
    }
    assert(isActualObject(this.testSorter), 'bubbleSorter is NOT an object');
  });

  it('should have a list property', function() {
    assert('list' in this.testSorter, 'bubbleSorter lacks a list property');
    assert(this.testSorter.list === this.testList, 'bubbleSorter did not take the list');
  });

  it ('should have a run method', function() {
    assert('run' in this.testSorter, 'bubbleSorter lacks a run method');
  });

  it ('should have a sort method', function() {
    assert('sortList' in this.testSorter, 'bubbleSorter lacks a sort method');
  });

  it ('should have a swap method', function() {
    assert('swap' in this.testSorter, 'bubbleSorter lacks a swap method');
  });

});

describe('Sort algo', function() {
  it('should return a sorted list of 1 length as itself', function() {
    var testList = [ 1 ];
    var testSorter = new bubbleSorter(testList);
    sortedList = testSorter.run();
    assert(sortedList === testList, 'did not return single element list');
  });

  it('should sort correctly when it is all positive, unique numbers', function() {
    // first example
    var testList = [ 1, 3, 2, 5, 11, 9];
    var testSorter = new bubbleSorter(testList);
    sortedList = testSorter.run();
    assert.deepEqual(sortedList, [ 1, 2, 3, 5, 9, 11], 'it did not sort!');

    // second example
    var testList = [ 5, 4, 3, 2, 1];
    var testSorter = new bubbleSorter(testList);
    sortedList = testSorter.run();
    assert.deepEqual(sortedList, [ 1, 2, 3, 4, 5], 'it did not sort!');

    // third example
    var testList = [ 15, 44, 63, 21, 10];
    var testSorter = new bubbleSorter(testList);
    sortedList = testSorter.run();
    assert.deepEqual(sortedList, [ 10, 15, 21, 44, 63], 'it did not sort!');
  });

  it('should handle negative numbers', function() {
    var testList = [ 5, 3, -1, 2, -6];
    var testSorter = new bubbleSorter(testList);
    sortedList = testSorter.run();
    assert.deepEqual(sortedList, [ -6, -1, 2, 3, 5], 'it did not handle negative numbers!');
  });

  it('should handle duplicates', function() {
    // first example
    var testList = [ 1, 3, 1, 3, 5];
    var testSorter = new bubbleSorter(testList);
    sortedList = testSorter.run();
    assert.deepEqual(sortedList, [ 1, 1, 3, 3, 5], 'it did not handle duplicates!');

    // second example
    var testList = [ 1, -3, 1, -3, 5];
    var testSorter = new bubbleSorter(testList);
    sortedList = testSorter.run();
    assert.deepEqual(sortedList, [ -3, -3, 1, 1, 5], 'it did not handle duplicates!');
  })

});

describe('Swap', function() {
  it('should swap two elements in an array', function() {
    // perform a swap
    var originalList = [1,2];
    var firstIndex = 0;
    var secondIndex = 1;
    var testSorter = new bubbleSorter(originalList);
    var swappedList = testSorter.swap(originalList, firstIndex, secondIndex);

    assert.deepEqual(swappedList, [2,1], 'swap did not work!');

    // another example
    var originalList = [1,2,3];
    var firstIndex = 0;
    var secondIndex = 2;
    var testSorter = new bubbleSorter(originalList);
    var swappedList = testSorter.swap(originalList, firstIndex, secondIndex);

    assert.deepEqual(swappedList, [3, 2, 1], 'swap did not work!');
  });
});
