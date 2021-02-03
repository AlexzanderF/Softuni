// # 1
function personInfo(firstName, lastName, age) {
    let person = {
        firstName: firstName,
        lastName: lastName,
        age: age
    };

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }

}

// # 2
function city(name, area, population, country, postcode) {
    let cityObj = {
        name: name,
        area: area,
        population: population,
        country: country,
        postCode: postcode
    };

    for (let key in cityObj) {
        console.log(`${key} -> ${cityObj[key]}`);
    }

}

// # 3
function convertToObject(jsonObj) {
    let person = JSON.parse(jsonObj);

    for (let key in person) {
        console.log(`${key}: ${person[key]}`);
    }
}

// # 4
function convertToJSON(name, lastName, hairColor) {
    let person = {};
    person.name = name;
    person.lastName = lastName;
    person.hairColor = hairColor;

    let jsonObj = JSON.stringify(person);
    console.log(jsonObj);
}

// # 5
function cats(array) {
    let cats = [];  // holds all cat Objects

    class Cat {     // creates cat objects  
        constructor(catName, age) {
            this.name = catName;
            this.age = age;
        }
        meow() {
            console.log(`${this.name}, age ${this.age} says Meow`);
        }
    }

    for (let i = 0; i < array.length; i++) {      // goes through the input array
        let catData = array[i].split(" ");
        let catName = catData[0];
        let age = catData[1];
        cats.push(new Cat(catName, age));
    }

    for (let i = 0; i < cats.length; i++) {     // goes through all cats and executes meow() for every cat
        cats[i].meow();
    }

}

// # 6
function songs(input) {
    let count = input.shift();
    let listType = input.pop();
    let songs = [];

    class Song {
        constructor(type, name, time) {
            this.type = type;
            this.name = name;
            this.time = time;
        }
    }

    for (let i = 0; i < input.length; i++) {
        let songData = input[i].split("_");
        let [type, name, time] = songData;
        songs.push(new Song(type, name, time));
    }

    if (listType === "all") {
        songs.forEach(x => console.log(x.name));                // x is an object
    } else {
        let filteredByType = songs.filter(x => x.type === listType);
        filteredByType.forEach(x => console.log(x.name));
    }

}

songs([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    );