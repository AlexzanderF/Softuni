// # 1
function solution(num) {
    function add(x) {
        return num + x;
    }
    return add;
}


// # 2
function result(func) {
    let newFunc = func.bind(undefined, ',', "$", true);
    return newFunc;
}

function currencyFormatter(separator = ',', symbol = '$', symbolFirst = true, value) {
    let result = Math.trunc(value) + separator;
    result += value.toFixed(2).substr(-2, 2);
    if (symbolFirst) return symbol + ' ' + result;
    else return result + ' ' + symbol;
}

// # 3
function filterEmployees(data, criteria) {
    let predicate = (empl) => {
        if (empl[criteria[0]] === criteria[1]) {
            return empl;
        }
    }
    data = JSON.parse(data);
    criteria = criteria.split('-');
    if (criteria !== 'all') {
        data = data.filter(predicate);
    }
    data.forEach((empl, i) => {
        console.log(`${i}. ${empl['first_name']} ${empl['last_name']} - ${empl['email']}`);
    });
}

// # 4
function commandProcessor() {
    class Processor {
        constructor() {
            this.internalString = '';
        }
        append(str) {
            this.internalString += str;
        }
        removeStart(n) {
            this.internalString = this.internalString.substr(n);
        }
        removeEnd(n) {
            let length = this.internalString.length;
            this.internalString = this.internalString.slice(0, length - n);
        }
        print() {
            console.log(this.internalString);
        }
    }
    return new Processor();
}

let firstZeroTest = commandProcessor();

firstZeroTest.append('hello');
firstZeroTest.append('again');
firstZeroTest.removeStart(3);
firstZeroTest.removeEnd(4);
firstZeroTest.print();
