// # 1
function employees(input) {
    let employees = [];
    class Employee {
        constructor(name, number) {
            this.name = name;
            this.personalNum = number;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let names = input[i];
        let number = names.length;

        employees.push(new Employee(names, number));
    }

    employees.forEach(x => console.log(`Name: ${x.name} -- Personal Number: ${x.personalNum}`));


}

// # 2
function towns(input) {
    let towns = [];
    // class Town{
    // constructor(name, latitude, longitude){
    // this.town = name;
    // this.latitude = Number(latitude).toFixed(2);
    // this.longitude = Number(longitude).toFixed(2);
    // }
    // }

    for (let i = 0; i < input.length; i++) {
        let townData = input[i].split(" | ");
        let [name, latitude, longitude] = townData;
        let obj = {
            town: name,
            latitude: Number(latitude).toFixed(2),
            longitude: Number(longitude).toFixed(2)
        }
        towns.push(obj);
    }

    towns.forEach(x => console.log(x));

}

// # 3
function storeProvision(firstArr, secArr) {
    let store = {};

    for (let i = 0; i < firstArr.length; i += 2) {
        let product = firstArr[i];
        let quantity = firstArr[i + 1];

        store[product] = Number(quantity);
    }
    for (let i = 0; i < secArr.length; i += 2) {
        let product = secArr[i];
        let quantity = Number(secArr[i + 1]);
        if (firstArr.includes(product)) {
            store[product] = store[product] + quantity;
        } else {
            store[product] = quantity;
        }

    }

    for (key in store) {
        console.log(`${key} -> ${store[key]}`);
    }

}

// # 4
function movies(input) {
    let movies = [];

    for (let i = 0; i < input.length; i++) {
        if (input[i].includes("addMovie")) {
            let movieName = input[i].split(" ").splice(1).join(" ");
            let obj = {
                name: movieName
            }
            movies.push(obj);
        } else if (input[i].includes("directedBy")) {
            let index = input[i].split(" ").indexOf("directedBy");
            let movieName = input[i].split(" ").splice(0, index).join(" ");
            let director = input[i].split(" ").splice(index + 1).join(" ");

            movies.forEach(x => {
                if (x.name === movieName) {
                    x.director = director;
                }
            });

        } else if (input[i].includes("onDate")) {
            let index = input[i].split(" ").indexOf("onDate");
            let movieName = input[i].split(" ").splice(0, index).join(" ");
            let date = input[i].split(" ").splice(index + 1).join(" ");

            movies.forEach(x => {
                if (x.name === movieName) {
                    x.date = date;
                }
            });
        }
    }

    for (let i = 0; i < movies.length; i++) {       // checks if the movies have 3 properties
        if (Object.keys(movies[i]).length === 3) {
            console.log(JSON.stringify(movies[i]));
        }
    }
}

// # 5
function inventory(input) {
    let heroes = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" / ");
        let heroName = command[0];
        let level = Number(command[1]);
        let itemsArr = command[2].split(", ");

        let obj = {
            name: heroName,
            level: level,
            items: itemsArr.sort((a, b) => a.localeCompare(b)).join(", ")     //sorts the items 
        };

        heroes.push(obj);
    }

    heroes.sort((a, b) => a.level - b.level);      // sorts the heroes by their level

    heroes.forEach(x => {
        console.log(`Hero: ${x.name}`);
        console.log(`level => ${x.level}`);
        console.log(`items => ${x.items}`);
    });

}

// # 6 
function makeDictionary(input) {
    let dictionary = [];
    for (let i = 0; i < input.length; i++) {
        let obj = JSON.parse(input[i]);
        let term = Object.keys(obj)[0];
        let changed = false;
        dictionary.forEach(x => {
            if (x.term === term) {
                x.defintion = obj[term];
                changed = true;
            }
        });

        if (changed) {
            continue;
        }

        let word = {};
        word['term'] = term;
        word['defintion'] = obj[term];
        dictionary.push(word);
    }
    dictionary.sort((a, b) => a['term'].localeCompare(b['term']));
    for (let i = 0; i < dictionary.length; i++) {
        console.log(`Term: ${dictionary[i].term} => Definition: ${dictionary[i].defintion}`);
    }

}

// # 7
function classVehicle() {
    class Vehicle {
        constructor(type, model, parts, fuel) {
            this.type = type;
            this.model = model;
            this.parts = parts;
            this.fuel = fuel;
            this.parts.quality = this.parts.engine * this.parts.power;
        }
        drive(fuelLoss) {
            this.fuel -= fuelLoss;
        }
    }
}


// # 8
function classStorage() {
    class Storage {
        constructor(capacity) {
            this.capacity = capacity;
            this.storage = [];
            this.totalCost = 0;
        }

        addProduct(product) {
            this.storage.push(product);
            this.capacity -= product.quantity;
            this.totalCost += product.price * product.quantity;
        }

        getProducts() {
            let output = [];
            this.storage.forEach(x => {
                output.push(JSON.stringify(x));
            });
            return output.join("\n");
        }

    }
    let productOne = { name: 'Cucamber', price: 1.50, quantity: 15 };
    let productTwo = { name: 'Tomato', price: 0.90, quantity: 25 };
    let productThree = { name: 'Bread', price: 1.10, quantity: 8 };
    let storage = new Storage(50);
    storage.addProduct(productOne);
    storage.addProduct(productTwo);
    storage.addProduct(productThree);
    storage.getProducts();
    console.log(storage.capacity);
    console.log(storage.totalCost);

}

// classStorage();

// # 9
function catalogue(input) {
    let products = [];

    for (let i = 0; i < input.length; i++) {
        let product = input[i].split(" : ");
        let obj = {
            name: product[0],
            price: Number(product[1])
        };
        products.push(obj);
    }
    products.sort((a, b) => a.name.localeCompare(b.name));
    console.log(products[0].name[0]);
    for (let i = 0; i < products.length; i++) {
        let intial = products[i].name[0];
        console.log(`  ${products[i].name}: ${products[i].price}`);
        if (intial !== products[Math.min(i + 1, products.length - 1)].name[0]) {
            console.log(products[i + 1].name[0]);
        }
    }

}

// # 10
function systemsRegister(input) {
    let systems = {};

    for (let i = 0; i < input.length; i++) {
        let [systemName, componentName, subcomponentName] = input[i].split(" | ");
        if (!systems.hasOwnProperty(systemName)) {
            systems[systemName] = {};
        }
        if (!(systems[systemName].hasOwnProperty(componentName))) {
            systems[systemName][componentName] = [];
        }
        if (!(systems[systemName][componentName].includes(subcomponentName))) {
            systems[systemName][componentName].push(subcomponentName);
        }

    }

    let register = Object.entries(systems);
    register.sort((a, b) => {   // sorted by amount of components
        if (Object.keys(b[1]).length - Object.keys(a[1]).length !== 0) {
            return Object.keys(b[1]).length - Object.keys(a[1]).length;
        } else {               // by second criteria - alphabetical
            return a[0].localeCompare(b[0]);
        }
    });

    register.forEach((x, i) => {                  // needs info
        let components = Object.entries(x[1]);
        components.sort((a, b) => {
            return b[1].length - a[1].length;
        });
        register[i][1] = components;
    });

    for (let i = 0; i < register.length; i++) {    // i - system array
        console.log(`${register[i][0]}`);
        for (let j = 0; j < register[i][1].length; j++) {   // j - components array
            console.log(`|||${register[i][1][j][0]}`);
            for (let s = 0; s < register[i][1][j][1].length; s++) {   // s -subcomponents 
                console.log(`||||||${register[i][1][j][1][s]}`);
            }
        }
    }

}

systemsRegister([
    'SULS | Main Site | Home Page',
    'SULS | Main Site | Login Page',
    'SULS | Main Site | Register Page',
    'SULS | Judge Site | Login Page',
    'SULS | Judge Site | Submittion Page',
    'Lambda | CoreA | A23',
    'SULS | Digital Site | Login Page',
    'Lambda | CoreB | B24',
    'Lambda | CoreA | A24',
    'Lambda | CoreA | A25',
    'Lambda | CoreC | C4',
    'Indice | Session | Default Storage',
    'Indice | Session | Default Security'
]
);

