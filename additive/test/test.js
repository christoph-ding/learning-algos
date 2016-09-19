var assert = require('assert');
var addingMachine = require('../additive.js').addingMachine;


describe('AddingMachine Class', function() {
  // hooks and such
  beforeEach(function() {
    var testString = '123';
    this.addingMachine = new addingMachine(testString);
  });

  it('should return an object, not a primitive', function() {
    function isActualObject(testObject) {
    // there are many cases in which something which isn't really 
    // what we mean by 'object' will be typeof 'object'
    if (typeof testObject === 'object' && testObject !== null && !(testObject instanceof Array)) {
      return true;
    }
    return false;
    };
    assert(isActualObject(this.addingMachine), 'addingMachine is NOT an object');
  });

  it('should have a string number', function() {
    assert('numberString' in this.addingMachine, 'addingMachine does NOT have a numbstring');
  })

});

