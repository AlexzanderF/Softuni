const assert = require('chai').assert;

// # 4
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe('Sum of numbers', () => {
    it('Should return positive number as a sum', () => {
        let arr = [2, 3, 4, 5];
        let result = sum(arr);
        assert.equal(result, 14);
    });
    it('Should return negative number as a sum', () => {
        let arr = [-1, 3, -9, 5];
        let result = sum(arr);
        assert.equal(result, -2);
    });
    it('Should return zero', () => {
        let arr = [-1, 1, -9, 9];
        let result = sum(arr);
        assert.equal(result, 0);
    });
});

// # 5
function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;
}

describe('Check if array is symetric', () => {
    it('Should return true', () => {
        let arr = [1, 3, 3, 1];
        let result = isSymmetric(arr);
        assert.equal(result, true);
    });
    it('Should return false - non-symetric', () => {
        let arr = ['a', 'a', 'a', 'b'];
        let result = isSymmetric(arr);
        assert.equal(result, false);
    });
    it(`Should return false because input isn't array`, () => {
        let arr = { a: 1, b: 1 };
        let result = isSymmetric(arr);
        assert.equal(result, false);
    });
    it(`Should return false because input isn't array`, () => {
        let arr = 'some string';
        let result = isSymmetric(arr);
        assert.equal(result, false);
    });
    it('Should return false - not symetric', () => {
        let arr = [1, 1, 2, '1', 1];
        let result = isSymmetric(arr);
        assert.equal(result, false);
    });
    it('Should return true - only 1 element', () => {
        let arr = [0];
        let result = isSymmetric(arr);
        assert.equal(result, true);
    });
    it('Should return true - empty array', () => {
        let arr = [];
        let result = isSymmetric(arr);
        assert.equal(result, true);
    });
});


// # 6
function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}

describe('rgb to hexColor converter tests', () => {
    it('Should return #121CE0', () => {
        let result = rgbToHexColor(18, 28, 224);
        assert.equal(result, '#121CE0');
    });
    it('Should return #000302', () => {
        let result = rgbToHexColor(0, 3, 2);
        assert.equal(result, '#000302');
    });
    it('Should return #0A03C8', () => {
        let result = rgbToHexColor(10, 3, 200);
        assert.equal(result, '#0A03C8');
    });
    it('Should return #090307', () => {
        let result = rgbToHexColor(9, 3, 7);
        assert.equal(result, '#090307');
    });
    it('Should return #000000', () => {
        let result = rgbToHexColor(0, 0, 0);
        assert.equal(result, '#000000');
    });
    it('Should return #2D6350', () => {
        let result = rgbToHexColor(45, 99, 80);
        assert.equal(result, '#2D6350');
    });
    it('Should return #0A0B0C', () => {
        let result = rgbToHexColor(10, 11, 12);
        assert.equal(result, '#0A0B0C');
    });
    it('Should return #FFACBA', () => {
        let result = rgbToHexColor(255, 172, 186);
        assert.equal(result, '#FFACBA');
    });
    it("Should return undefined because one of the inputs isn't integer", () => {
        let result = rgbToHexColor('18', 28, 224);
        assert.equal(result, undefined);
    });
    it("Should return undefined because one of the inputs isn't integer", () => {
        let result = rgbToHexColor(18, '28', 224);
        assert.equal(result, undefined);
    });
    it("Should return undefined because one of the inputs isn't integer", () => {
        let result = rgbToHexColor(18, 28, '224');
        assert.equal(result, undefined);
    });
    it("Should return undefined because all of the inputs aren't integers", () => {
        let result = rgbToHexColor('18', [], true);
        assert.equal(result, undefined);
    });
    it("Should return undefined because the blue isn't in the allowed range", () => {
        let result = rgbToHexColor(0, 0, 400);
        assert.equal(result, undefined);
    });
    it("Should return undefined because the red isn't in the allowed range", () => {
        let result = rgbToHexColor(-1, 65, 210);
        assert.equal(result, undefined);
    });
    it("Should return undefined because the green isn't in the allowed range", () => {
        let result = rgbToHexColor(19, -12, 210);
        assert.equal(result, undefined);
    });
    it("Should return undefined because all colors aren't in the allowed range", () => {
        let result = rgbToHexColor(266, -20, 1203);
        assert.equal(result, undefined);
    });
    it("Should return undefined because a color is missing", () => {
        let result = rgbToHexColor(266, -20);
        assert.equal(result, undefined);
    });
    it("Should return undefined because there isn't any input", () => {
        let result = rgbToHexColor();
        assert.equal(result, undefined);
    });
});

// # 7
function createCalculator() {
    let value = 0;
    return {
        add: function (num) { value += Number(num); },
        subtract: function (num) { value -= Number(num); },
        get: function () { return value; }
    }
}


describe('Add/Subtract function tests', () => {
    it('Should return an object', () => {
        let result = createCalculator();
        assert.typeOf(result, 'object');
    });
    it('Should be an instance of Object', () => {
        let result = createCalculator();
        assert.instanceOf(result, Object);
    });
    it('', () => {
        let result = createCalculator();
        assert.isObject(result);
    });
    it('Should contain all given props', () => {
        let result = createCalculator();
        assert.hasAllKeys(result, ['add', 'subtract', 'get']);
    });
    it('Should have a closure value', () => {
        let result = createCalculator().get();
        assert.notEqual(result, undefined);
    });
    it('Should have a closure value', () => {
        let result = createCalculator().get();
        assert.typeOf(result, 'number');
    });
    it('The inner sum should be 0 before adding anything', () => {
        let result = createCalculator().get();
        assert.equal(result, 0);
    });
    it('Should add 10 to the value', () => {
        let result = createCalculator();
        result.add(10);
        assert.equal(result.get(), 10);
    });
    it('Should subtract 5 from the value', () => {
        let result = createCalculator();
        result.add(10);
        result.subtract(5);
        assert.equal(result.get(), 5);
    });
    it('Should parse and subtract 6 from the value', () => {
        let result = createCalculator();
        result.add(10);
        result.subtract('6');
        assert.equal(result.get(), 4);
    });
    it('Should parse and add 3 to the value', () => {
        let result = createCalculator();
        result.add('3');
        assert.equal(result.get(), 3);
    });
    it('Should parse and subtract 3 from the value', () => {
        let result = createCalculator();
        result.subtract('3');
        assert.equal(result.get(), -3);
    });
    it('Should subtract 3 from the value', () => {
        let result = createCalculator();
        result.subtract(3);
        assert.equal(result.get(), -3);
    });
    it('Should add negative number to the value', () => {
        let result = createCalculator();
        result.add(-3);
        assert.equal(result.get(), -3);
    });
    it('Should subtract negative number from the value', () => {
        let result = createCalculator();
        result.subtract(-3);
        assert.equal(result.get(), 3);
    });
    it('', () => {
        let result = createCalculator();
        result.add('3');
        result.subtract('3');
        assert.equal(result.get(), 0);
    });
    it('add and parse float number', () => {
        let result = createCalculator();
        result.add('3.5');
        assert.equal(result.get(), 3.5);
    });
    it('subtract and parse float number', () => {
        let result = createCalculator();
        result.subtract('-3.5');
        assert.equal(result.get(), 3.5);
    });
    it('subtract float number', () => {
        let result = createCalculator();
        result.subtract(3.6);
        assert.equal(result.get(), -3.6);
    });
    it('add float number', () => {
        let result = createCalculator();
        result.add(3.6);
        assert.equal(result.get(), 3.6);
    });
    it('Should return Nan', () => {
        let result = createCalculator();
        result.subtract('string');
        assert.isNaN(result.get());
    });
    it('Should return Nan', () => {
        let result = createCalculator();
        result.add('string');
        assert.isNaN(result.get());
    });
    it('Should return 0 when adding false', () => {
        let result = createCalculator();
        result.add(false);
        assert.equal(result.get(), 0);
    });
    it('Should return 1 when adding true', () => {
        let result = createCalculator();
        result.add(true);
        assert.equal(result.get(), 1);
    });
    it('', () => {
        let result = createCalculator();
        result.add();
        assert.isNaN(result.get());
    });
    it('', () => {
        let result = createCalculator();
        result.subtract();
        assert.isNaN(result.get());
    });
    it('', () => {     // GAVE 100 POINTS !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
        let result = createCalculator();
        result.add('-5');
        result.subtract('-5');
        assert.equal(result.get(), 0);
    });

});


