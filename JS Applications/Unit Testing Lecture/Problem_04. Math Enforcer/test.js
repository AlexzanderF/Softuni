const assert = require('chai').assert;
const mathEnforcer = require('./mathEnforcer');   // receives the object

describe('Math Enforcer Tests', () => {
    describe('Tests for addFive functionality', () => {
        it("first param isn't a number", () => {
            let result = mathEnforcer.addFive('10');
            assert.equal(result, undefined);
        });
        it("should work correctly with a positive number", () => {
            let result = mathEnforcer.addFive(5);
            assert.equal(result, 10);
        });
        it("should work with negative number", () => {
            let result = mathEnforcer.addFive(-10);
            assert.equal(result, -5);
        });
        it("should work with zero", () => {
            let result = mathEnforcer.addFive(0);
            assert.equal(result, 5);
        });
        it("should work correctly with floating number", () => {
            let result = mathEnforcer.addFive(5.34);
            assert.closeTo(result, 10.34, 0.01);
        });
        it("should work correctly with floating number", () => {
            let result = mathEnforcer.addFive(-5.30);
            assert.closeTo(result, -0.30, 0.01);
        });
    });

    describe('Tests for subtractTen functionality', () => {
        it("parameter isn't a number", () => {
            let result = mathEnforcer.subtractTen('10');
            assert.equal(result, undefined);
        });
        it("should return 0 when subtracting from 10", () => {
            let result = mathEnforcer.subtractTen(10);
            assert.equal(result, 0);
        });
        it("should work with negative number", () => {
            let result = mathEnforcer.subtractTen(-10);
            assert.equal(result, -20);
        });
        it("should work correctly with positive number", () => {
            let result = mathEnforcer.subtractTen(30);
            assert.equal(result, 20);
        });
        it("should work correctly with positive number", () => {
            let result = mathEnforcer.subtractTen(5);
            assert.equal(result, -5);
        });
        it("should work correctly with a floating number", () => {
            let result = mathEnforcer.subtractTen(5.5);
            assert.closeTo(result, -4.5, 0.01);
        });
        it("should work correctly with zero", () => {
            let result = mathEnforcer.subtractTen(0);
            assert.equal(result, -10);
        });
        it("should work correctly with a floating number", () => {
            let result = mathEnforcer.subtractTen(15.34);
            assert.closeTo(result, 5.34, 0.01);
        });
        it("should work correctly with a negative floating number", () => {
            let result = mathEnforcer.subtractTen(-15.34);
            assert.closeTo(result, -25.34, 0.01);
        });
    });

    describe('Tests for sum functionality', () => {
        it("first param isn't a number", () => {
            let result = mathEnforcer.sum('10', 5);
            assert.equal(result, undefined);
        });
        it("second param isn't a number", () => {
            let result = mathEnforcer.sum(10, '5');
            assert.equal(result, undefined);
        });
        it("both params aren't numbers", () => {
            let result = mathEnforcer.sum('10', []);
            assert.equal(result, undefined);
        });
        it("should work correctly", () => {
            let result = mathEnforcer.sum(10, 5);
            assert.equal(result, 15);
        });
        it("should work correctly", () => {
            let result = mathEnforcer.sum(10, -5);
            assert.equal(result, 5);
        });
        it("should work correctly", () => {
            let result = mathEnforcer.sum(-10, 5);
            assert.equal(result, -5);
        });
        it("should work correctly with 2 negative numbers", () => {
            let result = mathEnforcer.sum(-10, -5);
            assert.equal(result, -15);
        });
        it("should work correctly with 2 floating numbers", () => {
            let result = mathEnforcer.sum(5.55, 2.26);
            assert.closeTo(result, 7.81, 0.01);
        });
        it("should work correctly with number and a floating number", () => {
            let result = mathEnforcer.sum(5, 2.26);
            assert.closeTo(result, 7.26, 0.01);
        });
        it("should work correctly with 2 floating numbers(1 negative)", () => {
            let result = mathEnforcer.sum(-5.55, 2.26);
            assert.closeTo(result, -3.29, 0.01);
        });
        it("should work correctly with a number and a negative floating number", () => {
            let result = mathEnforcer.sum(5, -2.26);
            assert.closeTo(result, 2.74, 0.01);
        });
        it("should work correctly with 2 negative floating numbers", () => {
            let result = mathEnforcer.sum(-5.55, -2.26);
            assert.closeTo(result, -7.81, 0.01);
        });
        it("should work correctly with 2 zeros", () => {
            let result = mathEnforcer.sum(0, 0);
            assert.equal(result, 0);
        });
        it("should work correctly with a zero and a postive number", () => {
            let result = mathEnforcer.sum(0, 10);
            assert.equal(result, 10);
        });
        it("should work correctly with a zero and a negative number", () => {
            let result = mathEnforcer.sum(0, -10);
            assert.equal(result, -10);
        });
        it("should work correctly with a zero and a floating number", () => {
            let result = mathEnforcer.sum(0, 10.63);
            assert.closeTo(result, 10.63, 0.01);
        });
        it("should work correctly with a zero and a negative floating number", () => {
            let result = mathEnforcer.sum(0, -10.63);
            assert.closeTo(result, -10.63, 0.01);
        });
    });
});