// # 1
function area() {
    return this.x * this.y;
};
function vol() {
    return this.x * this.y * this.z;
};

function calculator(area, vol, input) {
    input = JSON.parse(input);
    let result = [];
    for (let obj of input) {
        let newObj = {};
        newObj['area'] = Math.abs(area.call(obj));
        newObj['volume'] = Math.abs(vol.call(obj));
        result.push(newObj);
    }
    return result;
}

// # 2
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    set fullName(str) {
        if (/[A-Z][a-z]+ [A-Z][a-z]+/g.test(str)) {
            let [firstName, lastName] = str.split(' ');
            this.firstName = firstName;
            this.lastName = lastName;
        }
    }
}

// # 3
function arrayMap(arr, func) {
    let result = arr.reduce((acc, curr) => {
        acc.push(func(curr));
        return acc;
    }, []);
    return result;
}

// # 5
function Spy(obj, method) {
    let result = { count: 0 };
    let func = obj[method];
    obj[method] = function () {
        result.count++;
        return func.apply(this, arguments);
    }
    return result;
}

let obj = {
    method:()=>"invoked"
}
let spy = Spy(obj,"method");

obj.method();
obj.method();
obj.method();

console.log(spy) 
