// # 1
function sortArr(arr, str) {
    if (str === 'asc') {
        arr = arr.sort((a, b) => a - b);
    } else {
        arr = arr.sort((a, b) => b - a);
    }
    return arr;
}

// # 2
function argInfo(...arg) { // arguments == ...arguments
    let typesObj = {};
    for (let elem of arg) {
        console.log(`${typeof (elem)}: ${elem}`);
        if (!typesObj.hasOwnProperty(typeof (elem))) {
            typesObj[typeof (elem)] = 1;
        } else {
            typesObj[typeof (elem)]++;
        }
    }
    typesObj = Object.entries(typesObj).sort((a, b) => b[1] - a[1]);
    for (let kvp of typesObj) {
        console.log(`${kvp[0]} = ${kvp[1]}`);
    }
}

// # 3
function personalBMI(name, age, weight, height) {
    let bmi = Math.round(weight / ((height / 100) ** 2));
    let person = {
        name: name,
        personalInfo: {
            age: age,
            weight: weight,
            height: height
        },
        BMI: bmi,
        status: calcStatus()
    };
    function calcStatus() {
        if (bmi < 18.5) {
            return 'underweight';
        } else if (bmi < 25) {
            return 'normal';
        } else if (bmi < 30) {
            return 'overweight';
        } else {
            return 'obese';
        }
    }
    if (person.status === 'obese') {
        person['recommendation'] = 'admission required';
    }
    return person;
}

// # 4
let vector = {
    add: (vec1, vec2) => [(vec1[0] + vec2[0]), (vec1[1] + vec2[1])],
    multiply: (vec, scalar) => [vec[0] * scalar, vec[1] * scalar],
    length: (vec) => Math.sqrt((vec[0] ** 2) + (vec[1] ** 2)),
    dot: (vec1, vec2) => vec1[0] * vec2[0] + vec1[1] * vec2[1],
    cross: (vec1, vec2) => vec1[0] * vec2[1] - vec1[1] * vec2[0]
};

// # 5
function solution() {
    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };
    let recipes = {
        apple: {
            carbohydrate: 1,
            flavour: 2
        },
        lemonade: {
            carbohydrate: 10,
            flavour: 20
        },
        burger: {
            carbohydrate: 5,
            fat: 7,
            flavour: 3
        },
        eggs: {
            protein: 5,
            fat: 1,
            flavour: 1
        },
        turkey: {
            protein: 10,
            carbohydrate: 10,
            fat: 10,
            flavour: 10
        }
    };

    function robot(command) {
        let [action, element, quant] = command.split(' ');
        if (action === 'restock') {
            ingredients[element] += Number(quant);
            return 'Success';
        } else if (action === 'prepare') {
            let food = element;
            for (let key in recipes[food]) {
                if (ingredients[key] >= recipes[food][key]) {
                    ingredients[key] -= recipes[food][key] * Number(quant);
                } else {
                    return `Error: not enough ${key} in stock`;
                }
            }
            return 'Success';
        } else {
            return `protein=${ingredients.protein} carbohydrate=${ingredients.carbohydrate} fat=${ingredients.fat} flavour=${ingredients.flavour}`;
        }
    }

    return robot;
}

// # 6
function add(a) {
    let internalSum = a;
    function sum(x) {
        internalSum += x;
        return sum;
    };
    sum.toString = () => internalSum;
    return sum;
};

// # 7
function solution(command) {
    if (command === 'upvote') {
        this.upvotes++;
    } else if (command === 'downvote') {
        this.downvotes++;
    } else {
        let reportArr = [this.upvotes, this.downvotes];
        if (this.downvotes + this.upvotes > 50) {
            let additionalNum = Math.ceil(Math.max(this.downvotes, this.upvotes) * 0.25);
            reportArr[0] += additionalNum;
            reportArr[1] += additionalNum;
        }
        reportArr.push(reportArr[0] - reportArr[1]);  // balance
        if (this.upvotes + this.downvotes >= 10) {
            if (this.upvotes > (this.upvotes + this.downvotes) * 0.66) {  // hot
                reportArr.push('hot');
            } else if (reportArr[2] >= 0 && reportArr[0] > 100 && reportArr[1] > 100) {
                reportArr.push('controversial');
            } else if (reportArr[2] < 0) {
                reportArr.push('unpopular');
            } else {
                reportArr.push('new');
            }
        } else {
            reportArr.push('new');
        }
        return reportArr;
    }
}
