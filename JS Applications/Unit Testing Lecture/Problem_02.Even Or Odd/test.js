const assert = require('chai').assert;
const isOddOrEven = require('./isOddOrEven');  // receives directly the function

describe('Even or Odd Tests', () => {
    it("should return undefined because input isn't a string", () => {
        let result = isOddOrEven(10);
        assert.equal(result, undefined);
    });
    it("should return undefined because input isn't a string", () => {
        let result = isOddOrEven([]);
        assert.equal(result, undefined);
    });
    it("should return even", () => {
        let result = isOddOrEven('text');
        assert.equal(result, 'even');
    });
    it("should return odd", () => {
        let result = isOddOrEven('cat');
        assert.equal(result, 'odd');
    });
});