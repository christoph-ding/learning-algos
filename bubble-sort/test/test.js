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
    assert('sort' in this.testSorter, 'bubbleSorter lacks a sort method');
  });
});

describe('Sort algo', function() {



});
