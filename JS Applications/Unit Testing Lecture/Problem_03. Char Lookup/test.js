const assert = require('chai').assert;
const lookupChar = require('./lookupChar'); // receives directly the function

describe('Char Lookup Tests', () => {
    it("should return undefined because first param isn't a string", () => {
        let result = lookupChar(100, 1);
        assert.equal(result, undefined);
    });
    it("should return undefined because second param isn't an integer", () => {
        let result = lookupChar('some text', '1');
        assert.equal(result, undefined);
    });
    it("should return undefined because second param is a floating number", () => {
        let result = lookupChar('some text', 3.5);
        assert.equal(result, undefined);
    });
    it("should return undefined because both params aren't valid", () => {
        let result = lookupChar([], '10');
        assert.equal(result, undefined);
    });
    it("index is bigger than the string", () => {
        let result = lookupChar('text', 10);
        assert.equal(result, "Incorrect index");
    });
    it("index is negative", () => {
        let result = lookupChar('text', -1);
        assert.equal(result, "Incorrect index");
    });
    it("index is the length of the string", () => {
        let result = lookupChar('text', 4);
        assert.equal(result, "Incorrect index");
    });
    it("should return the correct char", () => {
        let result = lookupChar('text', 0);
        assert.equal(result, "t");
    });
    it("should return the correct char", () => {
        let result = lookupChar('ocean', 4);
        assert.equal(result, "n");
    });
});