var assert = require('assert');
var mergeSorter = require("../merge-sort.js").mergeSorter;

describe('MergeSorter', function() {

  // hooks and such
  beforeEach(function() {
    // reset the test variables
    var testList = [4,3,2,1];
    var testSorter = new mergeSorter(testList);
  })

  after(function() {
  })

  describe('MergeSorter Class', function() {

    it('should return an object, not a primitive', function() {
      function isActualObject(testObject) {
        // there are many cases in which something which isn't really 
        // what we mean by 'object' will be typeof 'object'
        if (typeof testObject === 'object' && testObject !== null && !(testObject instanceof Array)) {
            return true;
          }
        return false;
      }
      assert(isActualObject(testSorter),'mergeSorter is NOT an object');
    });

    it('should have a list property', function() {
      assert(testSorter.hasOwnProperty('list'), 'mergeSorter does not have a list property');
      assert(testSorter.list === testList, 'mergeSorter did not take our list properly');
    });

    it('should have a sort method', function() {
      assert('sortList' in testSorter, 'mergeSorter lacks a sorting method');
    });

    it('should have a method to break apart the input list', function() {
      assert('breakApart' in testSorter, 'mergeSorter lacks a way to break lists apart');
    }); 
  });

  describe('Merge sort algorithm', function() {
    it('should return a sorted list of 1 length as itself', function() {
      //
    });
    it('should sort lists properly', function() {
      // provide 3 example lists
    });
    it('should handle negative numbers', function() {
      //
    });
    it('should handle duplicates', function() {
      //
    });
  });
});
