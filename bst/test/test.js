var assert = require('assert');
var treeNode = require('../bst.js').treeNode;

describe('BinarySearchTree Class', function() {
  // hooks and such
  beforeEach(function() {
    var value = 10;
    this.leftChild = new treeNode(9);
    this.rightChild = new treeNode(12);
    this.testTree = new treeNode(value, this.leftChild, this.rightChild);
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
    assert('leftChild' in this.testTree, 'treeNode should have a left child');
    assert(this.testTree.leftChild.value === 9, 'treeNode left child incorrect');
  });

  it('should have a potential right child', function() {
    assert('rightChild' in this.testTree, 'treeNode should have a right child');
    assert(this.testTree.rightChild.value === 12, 'treeNode right child incorrect');
  });

  it('should have a search by depth method', function() {
    assert('searchDepth' in this.testTree, 'tree should be searchable');
  });

});

describe('Searching', function() {
  // hooks and such
  beforeEach(function() {
    var value = 10;
    this.leftChild = new treeNode(9);
    this.rightChild = new treeNode(12);
    this.testTree = new treeNode(value, this.leftChild, this.rightChild);
  });

  it('should return false if node is not in tree', function() {
    assert(this.testTree.searchDepth(3) === false, '3 should not be found')
  });

  it('should return true if node is in tree', function() {
    
  })
    // assert(this.testTree.searchDepth(3) === false, '3 should not be found')
});
