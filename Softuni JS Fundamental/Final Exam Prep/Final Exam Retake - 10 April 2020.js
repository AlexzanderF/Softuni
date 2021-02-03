// # 1
function secretChat(input) {
    let message = input.shift();
    for (let line of input) {
        if (line === "Reveal") {
            break;
        }
        if (line.includes('InsertSpace')) {
            let index = Number(line.split(":|:")[1]);
            message = message.split("");
            message.splice(index, 0, " ");
            message = message.join("");
            console.log(message);
        } else if (line.includes('Reverse')) {
            let substr = line.split(":|:")[1];
            if (message.includes(substr)) {
                message = message.replace(substr, "");
                substr = substr.split("").reverse().join("");
                message += substr;
                console.log(message);
            } else {
                console.log("error");
            }
        } else {
            let substr = line.split(":|:")[1];
            let replacement = line.split(":|:")[2];
            while (message.includes(substr)) {
                message = message.replace(substr, replacement);
            }
            console.log(message);
        }
    }
    console.log(`You have a new text message: ${message}`);
}

// # 2
function mirrorWords(input) {
    let text = input.shift();
    let hiddenWords = text.match(/([@#])[A-za-z]{3,}\1{2}[A-za-z]{3,}\1/g);
    let mirrorWords = [];
    if (hiddenWords !== null) {
        console.log(`${hiddenWords.length} word pairs found!`);

        for (let word of hiddenWords) {
            let [wordOne, wordTwo] = word.match(/\w+/g);
            let reversedTwo = wordTwo.split("").reverse().join("");
            let reversedOne = wordOne.split("").reverse().join("");
            if (wordOne === reversedTwo || wordTwo === reversedOne) {
                let toPush = `${wordOne} <=> ${wordTwo}`;
                mirrorWords.push(toPush);
            }
        }
        if (mirrorWords.length > 0) {
            console.log("The mirror words are:");
            console.log(mirrorWords.join(", "));
        } else {
            console.log("No mirror words!");
        }
    } else {
        console.log("No word pairs found!");
        console.log("No mirror words!");
    }
}

// # 3
function needForSpeed(input) {
    let n = Number(input.shift());
    let collection = {};
    for (let i = 0; i < n; i++) {
        let [car, mileage, fuel] = input.shift().split("|");
        collection[car] = {};
        collection[car].mileage = Number(mileage);
        collection[car].fuel = Number(fuel);
    }
    let line = input.shift();
    while (line !== "Stop") {
        line = line.split(" : ");
        if (line.includes("Drive")) {
            let [car, distance, fuel] = line.slice(1);
            distance = Number(distance);
            fuel = Number(fuel);
            if (collection[car].fuel - fuel <= 0) {
                console.log("Not enough fuel to make that ride");
            } else {
                collection[car].fuel -= fuel;
                collection[car].mileage += distance;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);
            }
            if (collection[car].mileage >= 100000) {
                console.log(`Time to sell the ${car}!`);
                delete collection[car];
            }
        } else if (line.includes("Refuel")) {
            let [car, fuel] = line.slice(1);
            fuel = Number(fuel);
            if (collection[car].fuel + fuel > 75) {
                console.log(`${car} refueled with ${75 - collection[car].fuel} liters`);
                collection[car].fuel = 75;
            } else {
                console.log(`${car} refueled with ${fuel} liters`);
                collection[car].fuel += fuel;
            }
        } else {
            let [car, kilometers] = line.slice(1);
            kilometers = Number(kilometers);
            collection[car].mileage = Math.max(10000, collection[car].mileage - kilometers);
            console.log(`${car} mileage decreased by ${kilometers} kilometers`);
        }

        line = input.shift();
    }
    collection = Object.entries(collection).sort((a, b) => {
        if (b[1].mileage - a[1].mileage !== 0) {
            return b[1].mileage - a[1].mileage;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    for (let pair of collection) {
        console.log(`${pair[0]} -> Mileage: ${pair[1].mileage} kms, Fuel in the tank: ${pair[1].fuel} lt.`);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
]
);