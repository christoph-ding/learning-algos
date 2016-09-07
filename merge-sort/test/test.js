var assert = require('assert');
var mergeSorter = require("../merge-sort.js").mergeSorter;

describe('MergeSorter', function() {


  describe('MergeSorter Class', function() {
    // hooks and such
    beforeEach(function() {
      // reset the test variables
      this.testList = [4,3,2,1];
      this.testSorter = new mergeSorter(this.testList);
    });

    it('should return an object, not a primitive', function() {
      function isActualObject(testObject) {
        // there are many cases in which something which isn't really 
        // what we mean by 'object' will be typeof 'object'
        if (typeof testObject === 'object' && testObject !== null && !(testObject instanceof Array)) {
            return true;
          }
        return false;
      }
      assert(isActualObject(this.testSorter),'mergeSorter is NOT an object');
    });

    it('should have a list property', function() {
      assert(this.testSorter.hasOwnProperty('list'), 'mergeSorter does not have a list property');
      assert(this.testSorter.list === this.testList, 'mergeSorter did not take our list properly');
    });

    it('should have a run method', function() {
      assert('run' in this.testSorter, 'mergeSorter lacks a run method');
    });

    it('should have a sort method', function() {
      assert('sortList' in this.testSorter, 'mergeSorter lacks a sorting method');
    });

    it('should have a method to merge left and right sorted', function() {
      assert('merge' in this.testSorter, 'mergeSorter lacks a way to break lists apart');
    }); 
  });

  describe('Merge sort algorithm', function() {
    it('should return a sorted list of 1 length as itself', function() {
      var testList = [ 1 ];
      var testSorter = new mergeSorter(testList);
      sortedList = testSorter.run();
      assert(sortedList === testList, 'did not return single element list');
    });
    it('should sort lists properly', function() {
      // first example
      var testListOne = [ 4, 11, 13, 1, 12, 2, 3 ];
      var testSorterOne = new mergeSorter(testListOne);
      var sortedListOne = testSorterOne.run();
      assert.deepEqual(sortedListOne, [ 1, 2, 3, 4, 11, 12, 13 ], 'did not sort properly!');

      // second example
      var testListTwo = [ 44, 1, 412, 11, 14, 8, 2 ];
      var testSorterTwo = new mergeSorter(testListTwo);
      var sortedListTwo = testSorterTwo.run();
      assert.deepEqual(sortedListTwo, [ 1, 2, 8, 11, 14, 44, 412], 'did not sort properly!');

      // third example
      var testListThree = [ 1, 2, 8, 73, 3, 15 ];
      var testSorterThree = new mergeSorter(testListThree);
      var sortedListThree = testSorterThree.run();
      assert.deepEqual(sortedListThree, [ 1, 2, 3, 8, 15, 73], 'did not sort properly!');
    });

    it('should handle negative numbers', function() {
      var testList = [ 1, -1, 10 ];
      var testSorter = new mergeSorter(testList);
      sortedList = testSorter.run();
      assert.deepEqual(sortedList, [ -1, 1, 10 ], 'did not sort negative numbers!');
    });

    it('should handle duplicates', function() {
      var testList = [ 1, 1, 5, 4, 5, 10, 4 ];
      var testSorter = new mergeSorter(testList);
      sortedList = testSorter.run();
      assert.deepEqual(sortedList, [ 1, 1, 4, 4, 5, 5, 10 ], 'did not sort duplicates');
    });
  });

});
