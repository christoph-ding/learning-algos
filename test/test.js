var assert = require("assert");
var myCode = require("../merge-sort.js");

describe('adding', function() {
  describe('two positive numbers', function() {
    it('should return the sum of two positive numbers', function() {
      assert.equal(5, myCode.adding(2,3));
    });
  });
});
