var assert = require('assert');
var treeNode = require('../bst.js').treeNode;

describe('BinarySearchTree Class', function() {
  // hooks and such
  beforeEach(function() {
    var value = 10;
    // var leftChild = new treeNode(9);
    // this.testTree = new treeNode(value, leftChild);
    this.testTree = new treeNode(value);
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
    assert(isActualObject(this.testTree), 'treeNode is NOT an object');
  });

  it('should have a value, potential left child and potential right child', function() {
    assert('value' in this.testTree, 'treeNode should have a value');
  });

  it('should have a potential left child', function() {
    console.log(this.testTree);
    assert('leftChild' in this.testTree, 'treeNode should have a left child');
  });
});
