// # 1
function heroicInventory(input) {
    let register = [];
    for (let line of input) {
        let [name, level, items] = line.split(' / ');
        if (items) {
            items = items.split(', ');
        } else {
            items = [];
        }
        register.push({
            name: name,
            level: Number(level),
            items: [...items]
        });

    }
    console.log(JSON.stringify(register))
}

// # 2
function jsonTable(input) {
    let output = '<table>\n';
    for (let line of input) {
        output += '    <tr>\n';
        let data = Object.values(JSON.parse(line));
        data.forEach(el => {
            output += `        <td>${el}</td>\n`;
        });
        output += '    </tr>\n';
    }
    output += '</table>';
    console.log(output);
}

// # 3
function cappyJuice(input) {
    let juices = {};
    let bottles = {};
    for (let line of input) {
        let [juice, quant] = line.split(' => ');
        if (!juices.hasOwnProperty(juice)) {
            juices[juice] = Number(quant);
        } else {
            juices[juice] += Number(quant);
        }
        if (juices[juice] >= 1000) {
            let num = Math.floor(juices[juice] / 1000);
            if (!bottles.hasOwnProperty(juice)) {
                bottles[juice] = num;
            } else {
                bottles[juice] += num;

            }
            juices[juice] -= num * 1000;
        }
    }

    Object.entries(bottles).forEach(pair => {
        console.log(`${pair[0]} => ${pair[1]}`);
    });
}

// # 4
function storeCatalogue(input) {
    let catalogue = {};
    for (let line of input) {
        let [name, price] = line.split(' : ');
        catalogue[name] = Number(price);
    }

    let sortedNames = Object.keys(catalogue).sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < sortedNames.length; i++) {
        let header = sortedNames[i][0];
        console.log(header);
        while (i < sortedNames.length && sortedNames[i][0] === header) {
            console.log(`  ${sortedNames[i]}: ${catalogue[sortedNames[i]]}`);
            i++;
        }
        i--;
    }
}

// # 5
function engineeringCompany(input) {
    let register = {};
    for (let line of input) {
        let [brand, model, quant] = line.split(' | ');
        quant = Number(quant);
        if (!register.hasOwnProperty(brand)) {
            register[brand] = {
                [model]: quant
            };
        } else {
            if (!register[brand].hasOwnProperty(model)) {
                register[brand][model] = quant;
            } else {
                register[brand][model] += quant;
            }
        }
    }
    Object.entries(register).forEach(pair => {
        console.log(pair[0]);
        Object.keys(pair[1]).forEach(key => {
            console.log(`###${key} -> ${pair[1][key]}`);
        });
    });

}

// # 6
function systemComponents(input) {
    let obj = {};
    for (let line of input) {
        let [system, component, subcomponent] = line.split(' | ');
        if (!obj.hasOwnProperty(system)) {
            obj[system] = {
                [component]: [subcomponent]
            };
        } else {
            if (!obj[system].hasOwnProperty(component)) {
                obj[system][component] = [subcomponent];
            } else {
                obj[system][component].push(subcomponent);
            }
        }

    }
    let sortedSystems = Object.entries(obj)
        .sort((a, b) => {
            if (Object.keys(b[1]).length - Object.keys(a[1]).length !== 0) {
                return Object.keys(b[1]).length - Object.keys(a[1]).length;
            } else {
                return a[0].localeCompare(b[0]);
            }
        });
    sortedSystems.forEach(pair => {
        console.log(`${pair[0]}`);
        Object.entries(pair[1])
            .sort((a, b) => b[1].length - a[1].length)
            .forEach(kvp => {
                console.log(`|||${kvp[0]}`);
                kvp[1].forEach(x => {
                    console.log(`||||||${x}`);
                });
            });
    });
}

// # 7
class Request {
    constructor(method, uri, version, message) {
        this.method = method;
        this.uri = uri;
        this.version = version;
        this.message = message;
        this.response = undefined;
        this.fulfilled = false;
    }
}

// # 8
function tickets(input, criteria) {
    let register = [];
    class Ticket {
        constructor(destination, price, status) {
            this.destination = destination;
            this.price = price;
            this.status = status;
        }
    }
    for (let line of input) {
        let [destination, price, status] = line.split('|');
        register.push(new Ticket(destination, Number(price), status));
    }
    if (criteria !== 'price') {
        register.sort((a, b) => {
            return a[criteria].localeCompare(b[criteria]);
        });
    } else {
        register.sort((a, b) => {
            return a.price - b.price;
        });
    }
    return register;
}

// # 9
class List {
    constructor() {
        this.collection = [];
        this.size = 0;
    }
    add(el) {
        this.collection.push(el);
        this.collection.sort((a, b) => a - b);
        this.size++;
    }
    remove(index) {
        if (index >= 0 && index < this.collection.length) {
            this.collection.splice(Number(index), 1);
            this.size--;
        }
    }
    get(index) {
        if (index >= 0 && index < this.collection.length) {
            return this.collection[index];
        }
    }
}

// # 10
class Stringer {
    constructor(string, length) {
        this.innerString = string;
        this.innerLength = length;
    }
    decrease(num) {
        this.innerLength = Math.max(this.innerLength - num, 0);
    }
    increase(num) {
        this.innerLength = this.innerLength + num;
    }
    toString() {
        if (this.innerLength === 0) {
            return '...';
        } else if (this.innerLength < this.innerString.length) {
            let result = this.innerString.slice(0, this.innerLength) + '...';
            return result;
        } else {
            return this.innerString;
        }
        
    }
}
let test = new Stringer("Test", 5);
console.log(test.toString()); // Test

test.decrease(3);
console.log(test.toString()); // Te...

test.decrease(5);
console.log(test.toString()); // ...

test.increase(4);
console.log(test.toString()); // Test

