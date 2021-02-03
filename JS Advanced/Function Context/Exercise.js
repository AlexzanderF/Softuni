// # 1
class Company {
    constructor() {
        this.departments = [];
    }
    addEmployee(username, salary, position, depart) {
        if ([...arguments].some(a => a === null || a === undefined || a === '') || salary < 0) {
            throw new Error('Invalid input!');
        } else {
            if (this.departments.hasOwnProperty(depart)) {
                this.departments[depart][username] = {
                    salary: salary,
                    position: position
                };
            } else {
                this.departments[depart] = {};
                this.departments[depart][username] = {
                    salary: salary,
                    position: position
                };
            }
            return `New employee is hired. Name: ${username}. Position: ${position}`;
        }
    }

    bestDepartment() {
        let bestDepart = '';
        let highestAvg = 0;
        for (let key in this.departments) {
            let avg = 0;
            let employees = this.departments[key];
            Object.values(employees).forEach(empl => {
                avg += empl.salary;
            });
            avg = avg / Object.keys(employees).length;
            if (avg > highestAvg) {
                highestAvg = avg;
                bestDepart = key;
            }
        }
        let result = `Best Department is: ${bestDepart}\nAverage salary: ${highestAvg.toFixed(2)}`;
        let employees = Object.entries(this.departments[bestDepart]).sort((a, b) => {
            if (b[1].salary - a[1].salary !== 0) {
                return b[1].salary - a[1].salary;
            }
            return a[0].localeCompare(b[0]);
        });
        for (let pair of employees) {
            result += `\n${pair[0]} ${pair[1].salary} ${pair[1].position}`;
        }
        return result;
    }
}

// # 2
function getFibonator() {
    let numbers = [1, 0];
    function fibonacci() {
        let newNum = numbers[numbers.length - 1] + numbers[numbers.length - 2];
        numbers.push(newNum);
        numbers.shift();
        return newNum;
    }
    return fibonacci;
}

// # 3
class Hex {
    constructor(num) {
        this.value = num;
    }
    valueOf() {
        return this.value;
    }
    toString() {
        let result = '0x';
        result += this.value.toString(16).toUpperCase();
        return result;
    }
    plus(obj) {
        let newValue = this.value + obj.value;
        return new Hex(newValue);
    }
    minus(obj) {
        let newValue = this.value - obj.value;
        return new Hex(newValue);
    }
    parse(str) {
        let hex = parseInt(str, 16);
        return hex;
    }
}
let FF = new Hex(255);
console.log(FF.toString());
FF.valueOf() + 1 == 256
let a = new Hex(10);
let b = new Hex(5);
console.log(a.plus(b).toString());
console.log(a.plus(b).toString() === '0xF');


