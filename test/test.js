var assert = require('assert');
var mergeSorter = require("../merge-sort.js").mergeSorter;

describe('MergeSorter', function() {
  var testList = [1,2,3];
  var testSorter = new mergeSorter(testList); 

  // hooks and such
  beforeEach(function() {
    testList = [1,2,3];
    testSorter = new mergeSorter(testList);
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
      assert(testSorter.list === list, 'mergeSorter did not take our list properly');
    })

  });
});


