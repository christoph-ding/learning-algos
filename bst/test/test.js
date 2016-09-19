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
    assert('searchDepth' in this.testTree, 'tree should be searchable by depth');
  });

  it('should have a search by width method', function() {
    assert('widthSearch' in this.testTree, 'tree should be searchable by width');
  });

  it('should have an insertion method', function() {
    assert('insert' in this.testTree, 'tree should have insertion method');
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

  it('Search depth should return false if node is not in tree', function() {
    assert(this.testTree.searchDepth(3) === false, '3 should not be found')
  });

  it('Search depth should return true if node is in tree', function() {
    assert(this.testTree.searchDepth(12) === true, '12 should not be found')
  });

  it('Search width should return false if node is not in tree', function() {
    assert(this.testTree.widthSearch(3) === false, '3 should not be found')
  });

  it('Search width should return true if node is not in tree', function() {
    assert(this.testTree.widthSearch(12) === true, '12 should be found')
  });
});

describe('Insertion', function() {
  // hooks and such
  beforeEach(function() {
    var value = 10;
    this.leftChild = new treeNode(6);
    this.rightChild = new treeNode(12);
    this.testTree = new treeNode(value, this.leftChild, this.rightChild);
  });

  it('Insertion should work with multiple examples', function() {
    var newNode = new treeNode(13);
    this.testTree.insert(newNode);

    assert(this.testTree.rightChild.rightChild.value === 13, '13 was not inserted correctly');
  });

  it('Insertion should work with multiple examples', function() {
    var newNode = new treeNode(4);
    this.testTree.insert(newNode);

    assert(this.testTree.leftChild.leftChild.value === 4, '4 was not inserted correctly');
  });

  it('Insertion should work with multiple examples', function() {
    var newNode = new treeNode(9);
    this.testTree.insert(newNode);

    assert(this.testTree.leftChild.rightChild.value === 9, '9 was not inserted correctly');
  });

  it('Insertion should not insert duplicates', function() {
    var newNode = new treeNode(6);
    
    assert(this.testTree.insert(newNode) === "this node is already in the tree", 'a duplicate was inserted');
  });
});

describe('Delete', function() {
  // hooks and such
});

