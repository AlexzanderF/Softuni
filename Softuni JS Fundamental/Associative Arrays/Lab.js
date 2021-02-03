// # 1
function phoneBook(input) {
    let book = {};
    for (let i = 0; i < input.length; i++) {
        let [name, phone] = input[i].split(" ");
        book[name] = phone;
    }
    for (key in book) {
        console.log(`${key} -> ${book[key]}`);
    }
}

// # 2
function storage(input) {
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let [item, quantity] = input[i].split(" ");
        quantity = Number(quantity);
        // console.log(typeof(quantity));
        if (!map.has(item)) {
            map.set(item, quantity);
        } else {
            let newQuantity = map.get(item);
            newQuantity += quantity;
            map.set(item, newQuantity);
        }
    }
    for (let pair of map) {
        console.log(`${pair[0]} -> ${pair[1]}`);
    }
}


// # 3
function schoolGrades(input) {
    function average(numbers) {
        let sum = 0;
        for (let grade of numbers) {
            sum += grade;
        }
        let averageGrade = sum / numbers.length;
        return averageGrade;
    }
    let map = new Map();
    for (let i = 0; i < input.length; i++) {
        let data = input[i].split(" ");
        let name = data[0];
        let grades = data.slice(1).map(Number);

        if (!map.has(name)) {
            map.set(name, grades);
        } else {
            let oldGrades = map.get(name);
            let newGrades = oldGrades.concat(grades);
            map.set(name, newGrades);
        }
    }
    let sorted = Array.from(map).sort((a, b) => average(a[1]) - average(b[1]));
    for (let i = 0; i < sorted.length; i++) {
        console.log(`${sorted[i][0]}: ${sorted[i][1].join(", ")}`)
    }
}

// # 4
function wordOccurrences(array) {
    let words = new Map();
    for (let elem of array) {
        if (!words.has(elem)) {
            words.set(elem, 1);
        } else {
            let newCount = words.get(elem) + 1;
            words.set(elem, newCount);
        }
    }
    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);
    for (let word of sorted) {
        console.log(`${word[0]} -> ${word[1]} times`);
    }
}

// # 5
function neighborhoods(input) {
    let hoods = input.shift().split(", ");
    let neighborhoods = new Map();
    for (let elem of hoods) {
        neighborhoods.set(elem, []);
    }
    for (let line of input) {
        let [hood, name] = line.split(" - ");

        if (neighborhoods.has(hood)) {
            let newNames = neighborhoods.get(hood);
            newNames.push(name);
            neighborhoods.set(hood, newNames);
        }
    }

    let sorted = Array.from(neighborhoods).sort((a, b) => b[1].length - a[1].length);
    for (let elem of sorted) {
        console.log(`${elem[0]}: ${elem[1].length}`);
        if (elem[1].length > 0) {
            elem[1].forEach(name => console.log(`--${name}`));
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy']
);