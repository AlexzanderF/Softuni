// # 1
function townsJSON(input) {
    input.shift();
    let towns = [];
    for (let line of input) {
        line = line.split('|').filter(x => x !== '');
        let obj = {};

        obj['Town'] = line[0].slice(1, line[0].length - 1);
        obj['Latitude'] = +Number(line[1]).toFixed(2);
        obj['Longitude'] = +Number(line[2]).toFixed(2);
        towns.push(obj);
    }
    console.log(JSON.stringify(towns));
}

// # 2
function sumByTown(input) {
    let towns = {};
    for (let i = 0; i < input.length; i += 2) {
        let town = input[i];
        let num = Number(input[i + 1]);
        if (!towns.hasOwnProperty(town)) {
            towns[town] = num;
        } else {
            towns[town] += num;
        }
    }
    console.log(JSON.stringify(towns));
}

// # 3
function populationsTowns(input) {
    let towns = {};
    for (let line of input) {
        let [town, popul] = line.split(' <-> ');
        if (!towns.hasOwnProperty(town)) {
            towns[town] = Number(popul);
        } else {
            towns[town] += Number(popul);
        }
    }
    for (let key in towns) {
        console.log(`${key} : ${towns[key]}`);
    }
}

// # 4
function JSONtoHTML(json) {
    let arr = JSON.parse(json);
    let output = '<table>\n';

    function makeHeader(obj) {
        let headRow = '   <tr>';
        let keys = Object.keys(obj);
        keys.forEach(key => {
            headRow += `<th>${key}</th>`;
        });
        headRow += '</tr>\n';
        return headRow;
    }
    function replaceEntities(value) {
        let toReplace = value.match(/[&<>"]/g);
        for (let char of toReplace) {
            switch (char) {
                case '&':
                    value = value.replace(/&/g, '&amp;');
                    break;
                case '<':
                    value = value.replace(/</g, '&lt;');
                    break;
                case '>':
                    value = value.replace(/>/g, '&gt;');
                    break;
                case `"`:
                    value = value.replace(/"/g, '&quot;');
                    break;
            }
        }
        return value;
    }

    output += makeHeader(arr[0]);
    for (let obj of arr) {
        let values = Object.values(obj);
        let row = '   <tr>';
        values.forEach(value => {
            if (typeof (value) === 'string' && /[&<>"]/g.test(value)) {
                value = replaceEntities(value);
            }
            row += `<td>${value}</td>`;
        });
        output += (row + '</tr>\n');
    }
    output += '</table>';
    console.log(output);
}

// # 5
function lowestPrice(input) {
    let products = {};
    for (let line of input) {
        let [town, product, price] = line.split(' | ');
        price = Number(price);
        if (!products.hasOwnProperty(product)) {
            products[product] = {
                [town]: price
            };
        } else {
            products[product][town] = price;
        }
    }
    for (let key in products) {
        let lowest = ['', Number.MAX_SAFE_INTEGER];
        Object.entries(products[key]).forEach(town => {
            if (town[1] < lowest[1]) {
                lowest = town;
            }
        });
        console.log(`${key} -> ${lowest[1]} (${lowest[0]})`);
    }
}

// # 6
class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
    }
}

// # 7
function getPersons() {
    let people = [];
    class Person {
        constructor(firstName, lastName, age, email) {
            this.firstName = firstName;
            this.lastName = lastName;
            this.age = age;
            this.email = email;
        }

        toString() {
            return `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;
        }
    }
    people.push(new Person('Anna', 'Simpson', 22, 'anna@yahoo.com'));
    people.push(new Person('SoftUni'));
    people.push(new Person('Stephan', 'Johnson', 25));
    people.push(new Person('Gabriel', 'Peterson', 24, 'g.p@gmail.com'));

    return people;
}

// # 8
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    set diameter(diameter) {
        this.radius = diameter / 2;
    }
    get diameter() {
        return this.radius * 2;
    }
    get area() {
        return Math.PI * this.radius ** 2;
    }
}

// # 9
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(p1, p2) {
        let disX = Math.abs(p1.x - p2.x);
        let disY = Math.abs(p1.y - p2.y);
        return Math.sqrt(disX ** 2 + disY ** 2);
    }
}
let p1 = new Point(5, 5);
let p2 = new Point(9, 8);
console.log(Point.distance(p1, p2));


