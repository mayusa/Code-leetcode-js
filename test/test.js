var should = require('should');
var twoSum = require('../code/medium/01-twoSum');

describe("Two Sum: ", function() {
  it("Pass Two Sum", function() {
    JSON.stringify(twoSum([2,7,11,15], 9)).should.equal(JSON.stringify([1,2]));
    JSON.stringify(twoSum([-3,1,3,15], 0)).should.equal(JSON.stringify([1,3]));
  });
});