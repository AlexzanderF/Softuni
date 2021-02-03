const { assert } = require('chai');
const PaymentPackage = require('./PaymentPackage');

describe('Payment Package Tests', () => {
    it("Can be instantiated with two parameters", () => {
        let result = new PaymentPackage('string', 100);
        assert.instanceOf(result, PaymentPackage);
    });
    it("Can be instantiated with two parameters", () => {
        let obj = new PaymentPackage('service', 100);
        assert.equal(obj.toString(), [
            `Package: service` + (this.active === false ? ' (inactive)' : ''),
            `- Value (excl. VAT): 100`,
            `- Value (VAT ${20}%): ${100 * (1 + 20 / 100)}`
        ].join('\n'));
    });

    it("Should throw an error", () => {
        assert.throw(() => new PaymentPackage('service'));
    });
    it("Should throw an error", () => {
        assert.throw(() => new PaymentPackage('service', '1600'));
    });
    it("Should throw an error", () => {
        assert.throw(() => new PaymentPackage(500, 100));
    });

    let package;
    beforeEach(() => {
        package = new PaymentPackage('HR services', 1500);
    });

    it("should return the name", () => {
        assert.equal(package.name, 'HR services');
    });
    it("should change the name", () => {
        package.name = 'New name';
        assert.equal(package.name, 'New name');
    });
    it("should return an error when setting the name with an empty string", () => {
        assert.throw(() => {
            package.name = '';
        });
    });
    it("should return an error when setting the name with a non-string value", () => {
        assert.throw(() => {
            package.name = [];
        });
    });

    it("should return the value", () => {
        assert.equal(package.value, 1500);
    });
    it("should change the value", () => {
        package.value = 150;
        assert.equal(package.value, 150);
    });
    it("should return an error when setting the value with negative number", () => {
        assert.throw(() => {
            package.value = -150;
        });
    });

    it("should return the VAT", () => {
        assert.equal(package.VAT, 20);
    });
    it("should change the VAT", () => {
        package.VAT = 30;
        assert.equal(package.VAT, 30);
    });
    it("should return an error when setting the VAT with negative number", () => {
        assert.throw(() => {
            package.VAT = -50;
        });
    });

    it("should return the active status", () => {
        assert.equal(package.active, true);
    });
    it("should change the active status", () => {
        package.active = false;
        assert.equal(package.active, false);
    });
    it("should return an error when setting the active status with non-boolena value", () => {
        assert.throw(() => {
            package.active = undefined;
        });
    });

    it("should return a correct overview", () => {
        assert.equal(package.toString(), [
            `Package: HR services`,
            `- Value (excl. VAT): 1500`,
            `- Value (VAT ${20}%): ${1500 * (1 + 20 / 100)}`
        ].join('\n'));
    });

    it("should return a correct overview when active is false", () => {
        package.active = false;
        assert.equal(package.toString(), [
            `Package: HR services (inactive)`,
            `- Value (excl. VAT): 1500`,
            `- Value (VAT ${20}%): ${1500 * (1 + 20 / 100)}`
        ].join('\n'));
    });
});