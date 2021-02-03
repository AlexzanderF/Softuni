const { assert } = require('chai');
const StringBuilder = require('./string-builder');   // receives the class 

describe('String Builder Tests', () => {
    it('can be initialised with a string argument', () => {
        let result = new StringBuilder('some text');
        assert.instanceOf(result, StringBuilder);
    });
    it('can be initialised without an argument', () => {
        let result = new StringBuilder();
        assert.instanceOf(result, StringBuilder);
    });
    it('can not be initialised with anything different from a string', () => {
        assert.throw(() => new StringBuilder([]), 'Argument must be string');
    });

    let str;
    beforeEach(() => {                        // creates a new StringBuilder object before every test
        str = new StringBuilder('hello');
    });

    it("should have all of the required methods", () => {
        let newStr = new StringBuilder();
        let hasAllProps = true;
        for (let key of Object.keys(newStr)) {
            if (!['_stringArray', 'append', 'prepend', 'insertAt', 'remove', 'toString'].includes(key)) {
                hasAllProps = false;
                break;
            }
        }
        assert.equal(hasAllProps, true);
    });

    describe("Tests for the append method", () => {
        it("should add the string to the end of the storage array", () => {
            str.append(', there');
            let result = str.toString();
            assert.equal(result, 'hello, there');
        });
        it("should throw an error because the input isn't a string", () => {
            assert.throws(() => str.append(100), 'Argument must be string');
        });
    });
    describe("Tests for the prepend method", () => {
        it("should add the string to the beginning of the storage array", () => {
            str.prepend('User, ');
            let result = str.toString();
            assert.equal(result, 'User, hello');
        });
        it("should throw an error because the input isn't a string", () => {
            assert.throws(() => str.prepend([]), 'Argument must be string');
        });
    });
    describe("Tests for the insertAt method", () => {
        it('should add the string to the array at the given index', () => {
            str.append(', there');
            str.insertAt(' woop', 5);
            let result = str.toString();
            assert.equal(result, 'hello woop, there');
        });
        it('should add the string to the array at the given index', () => {
            str.append(', there');
            str.insertAt('woop ', 0);
            let result = str.toString();
            assert.equal(result, 'woop hello, there');
        });
        it('should add the string to the array at the given index', () => {
            str.append(', there');
            str.insertAt(' woop', str.toString().length);
            let result = str.toString();
            assert.equal(result, 'hello, there woop');
        });
        it("should throw an error because the input isn't a string", () => {
            assert.throws(() => str.insertAt(10, 1), 'Argument must be string');
        });
    });
    describe("Tests for the remove method", () => {
        it('should remove 4 chars', () => {
            str.append(', there');
            str.remove(0, 4);
            let result = str.toString();
            assert.equal(result, 'o, there');
        });
        it('should remove everything', () => {
            str.append(', there');
            str.remove(0, str.toString().length);
            let result = str.toString();
            assert.equal(result, '');
        });
        it('should not change the array', () => {
            str.append(', there');
            str.remove(3, 0);
            let result = str.toString();
            assert.equal(result, 'hello, there');
        });
        it('should not change the array', () => {
            str.append(', there');
            str.remove(3, 'text');
            let result = str.toString();
            assert.equal(result, 'hello, there');
        });
        it('should remove everything if the second param is bigger than the length of the arr', () => {
            str.append(', there');
            str.remove(0, 100);
            let result = str.toString();
            assert.equal(result, '');
        });
    });
    describe("Tests for the toString method", () => {
        it('should return a string(type)', () => {
            let result = str.toString();
            assert.typeOf(result, 'string');
        });
        it('should return a empty string', () => {
            let strObj = new StringBuilder();
            let result = strObj.toString();
            assert.equal(result, '');
        });
        it('should work correctly', () => {
            let result = str.toString();
            assert.equal(result, 'hello');
        });
        it('should work correctly', () => {
            str.append(', there');
            str.append(' woop');
            let result = str.toString();
            assert.equal(result, 'hello, there woop');
        });
    });
});


