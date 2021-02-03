// # 1
function wordTracker(input) {
    let givenWords = input.shift().split(" ");
    let words = new Map();
    for (let word of givenWords) {
        words.set(word, 0);
    }
    for (let i = 0; i < input.length; i++) {
        let current = input[i];
        if (words.has(current)) {
            let count = words.get(current);
            count++;
            words.set(current, count);
        }
    }
    let sorted = Array.from(words).sort((a, b) => b[1] - a[1]);
    for (let pair of sorted) {
        console.log(`${pair[0]} - ${pair[1]}`);
    }
}

// # 2
function oddOccurrences(string) {
    let array = string.split(" ");
    let words = new Map();
    for (let word of array) {
        word = word.toLowerCase();
        if (!words.has(word)) {
            words.set(word, 1);
        } else {
            let count = words.get(word);
            count++;
            words.set(word, count);
        }
    }
    let print = [];
    for (let kvp of words) {
        if (kvp[1] % 2 !== 0) {
            print.push(kvp[0]);
        }
    }
    console.log(print.join(" "));
}

// # 3
function piccolo(input) {
    let parkingLot = [];
    for (let command of input) {
        let [action, car] = command.split(", ");
        if (action === "IN" && !parkingLot.includes(car)) {
            parkingLot.push(car);
        } else if (action === "OUT" && parkingLot.includes(car)) {
            // parkingLot.splice(parkingLot.indexOf(car), 1);
            parkingLot = parkingLot.filter(x => x !== car);
        }
    }
    if (parkingLot.length <= 0) {
        console.log("Parking Lot is Empty");
    } else {
        parkingLot.sort((a, b) => {
            return (a).localeCompare(b);
        });
        for (let carNum of parkingLot) {
            console.log(carNum);
        }
    }

}

// # 4
function partyTime(input) {
    let invitedList = input.splice(0, input.indexOf("PARTY"));
    input.splice(0, 1);
    let VIP = [];
    let regular = [];
    for (let guest of invitedList) {
        if (guest[0] >= '0' && guest[0] <= '9') {
            VIP.push(guest);
        } else {
            regular.push(guest);
        }
    }
    for (let guest of input) {
        if (VIP.includes(guest)) {
            VIP.splice(VIP.indexOf(guest), 1);
        }
        if (regular.includes(guest)) {
            regular.splice(regular.indexOf(guest), 1);
        }
    }

    console.log(VIP.length + regular.length);
    VIP.forEach(x => {
        console.log(x);
    });
    regular.forEach(x => {
        console.log(x);
    });

}

// # 5
function cardGame(input) {
    let obj = {};
    for (let line of input) {
        let [name, cards] = line.split(": ");
        cards = cards.split(", ");
        if (!obj.hasOwnProperty(name)) {
            let uniq = Array.from(new Set(cards));
            obj[name] = uniq;
        } else {
            let concated = obj[name].concat(cards);
            let uniq = Array.from(new Set(concated));
            obj[name] = uniq;
        }

    }
    for (let key in obj) {
        let value = 0;
        for (let card of obj[key]) {     // goes through person's cards
            card = card.split("");
            let type = card.pop();
            let power = card.join("");
            switch (power) {
                case "J":
                    power = 11;
                    break;
                case "Q":
                    power = 12;
                    break;
                case "K":
                    power = 13;
                    break;
                case "A":
                    power = 14;
                    break;
                default:
                    power = Number(power);
            }
            switch (type) {
                case "S":
                    type = 4;
                    break;
                case "H":
                    type = 3;
                    break;
                case "D":
                    type = 2;
                    break;
                case "C":
                    type = 1;
                    break;
            }
            value += (power * type);
        }
        obj[key].value = value;
    }
    for (let key in obj) {
        console.log(`${key}: ${obj[key].value}`);
    }
    console.log(obj);
}

// # 6
function travelTime(input) {
    let destinations = {};
    for (let line of input) {
        let [country, town, cost] = line.split(" > ");
        cost = Number(cost);
        if (!destinations.hasOwnProperty(country)) {
            destinations[country] = {};
            destinations[country][town] = cost;
        } else if (destinations.hasOwnProperty(country) && !destinations[country].hasOwnProperty(town)) {
            destinations[country][town] = cost;
        } else if (destinations.hasOwnProperty(country) && destinations[country].hasOwnProperty(town)) {
            if (destinations[country][town] > cost) {
                destinations[country][town] = cost;
            }
        }
    }
    let sorted = Object.entries(destinations).sort((a, b) => a[0].localeCompare(b[0]));
    for (let kvp of sorted) {
        let print = "";
        print += `${kvp[0]} -> `;
        for (let town in kvp[1]) {
            print += `${town} -> ${kvp[1][town]} `;
        }
        console.log(print);
    }
}

// # 7
function companyUsers(input) {
    let map = new Map();
    for (let line of input) {
        let [company, user] = line.split(" -> ");
        if (!map.has(company)) {
            let users = [user];
            map.set(company, users);
        } else {
            let users = map.get(company);
            if (!users.includes(user)) {
                users.push(user);
                map.set(company, users);
            }
        }
    }
    let sorted = Array.from(map).sort((a, b) => a[0].localeCompare(b[0]));
    for (let pair of sorted) {
        console.log(pair[0]);
        for (let id of pair[1]) {
            console.log(`-- ${id}`);
        }
    }

}


// # 8
function minerTask(input) {
    let obj = {};
    for (let i = 0; i < input.length; i += 2) {
        let resource = input[i];
        let quantity = Number(input[i + 1]);
        if (!obj.hasOwnProperty(resource)) {
            obj[resource] = quantity;
        } else {
            obj[resource] += quantity;
        }
    }
    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }
}

// # 9
function arenaTier(input) {
    let start = 0;
    let endProgram = false;
    let obj = {};
    for (let line of input) {
        if (line === "Ave Cesar") { // ends the loop
            endProgram = true;
            break;
        }
        if (line.includes("vs")) {  // fighting
            start = input.indexOf(line);
            break;

        } else {
            let [name, technique, skill] = line.split(" -> ");
            skill = Number(skill);
            if (!obj.hasOwnProperty(name)) {
                obj[name] = {};
                obj[name][technique] = skill;
            } else if (obj.hasOwnProperty(name) && !obj[name].hasOwnProperty(technique)) {
                obj[name][technique] = skill;
            } else if (obj.hasOwnProperty(name) && obj[name].hasOwnProperty(technique)) {
                if (skill > obj[name][technique]) {
                    obj[name][technique] = skill;
                }
            }
        }
    }
    for (let name in obj) {   // calc totalSkill
        let totalSkill = 0;
        for (let tech in obj[name]) {
            totalSkill += obj[name][tech];
        }
        obj[name].totalSkill = totalSkill;
    }

    if (start > 0) {
        for (let i = start; i < input.length; i++) {
            if (input[i] === "Ave Cesar") {
                endProgram = true;
                break;
            }
            let [gladiator1, gladiator2] = input[i].split(" vs ");
            let willFight = false;
            let commonTechnique = "";
            if (obj.hasOwnProperty(gladiator1) && obj.hasOwnProperty(gladiator2)) {
                for (let tech in obj[gladiator1]) {
                    if (obj[gladiator2].hasOwnProperty(tech)) {
                        willFight = true;
                        commonTechnique = tech;
                        break;
                    }
                }
            }
            if (willFight) {
                if (obj[gladiator1].totalSkill > obj[gladiator2].totalSkill) {
                    delete obj[gladiator2];
                } else if (obj[gladiator1].totalSkill < obj[gladiator2].totalSkill) {
                    delete obj[gladiator1];
                }
            }
        }
    }

    let sorted = Object.entries(obj).sort((a, b) => {    //sorted by totalSkill first, by name second
        if (b[1].totalSkill - a[1].totalSkill === 0) {
            return a[0].localeCompare(b[0]);
        } else {
            return b[1].totalSkill - a[1].totalSkill;
        }
    });

    if (endProgram) { // aka Ave Cesar
        for (let pair of sorted) {
            console.log(`${pair[0]}: ${pair[1].totalSkill} skill`);
            pair[1] = Object.entries(pair[1]).sort((a, b) => {
                if (b[1] - a[1] !== 0) {
                    return b[1] - a[1];
                } else {
                    return a[0].localeCompare(b[0]);
                }
            });
            for (let kvp of pair[1]) {
                if (kvp[0] !== "totalSkill") {
                    console.log(`- ${kvp[0]} <!> ${kvp[1]}`);
                }
            }
        }
    }
    // console.log(obj);
}

// arenaTier([
//     'Pesho -> Duck -> 400',
//     'Julius -> Shield -> 150',
//     'Gladius -> Heal -> 200',
//     'Gladius -> Support -> 250',
//     'Gladius -> Shield -> 250',
//     'Peter vs Gladius',
//     'Gladius vs Julius',
//     'Gladius vs Maximilian',
//     'Ave Cesar'
// ]

// );

// # 10
function legendaryFarming(string) {
    let input = string.split(" ");
    let keyItems = new Map([
        ["shards", 0],
        ["fragments", 0],
        ["motes", 0]
    ]);
    let junkItems = new Map();
    for (let i = 0; i < input.length; i += 2) {
        let quantity = Number(input[i]);
        let material = input[i + 1].toLowerCase();
        if (keyItems.has(material)) {
            let newQuantity = keyItems.get(material);
            newQuantity += quantity;
            if (newQuantity >= 250) {
                switch (material) {
                    case "shards":
                        console.log("Shadowmourne obtained!");
                        break;
                    case "fragments":
                        console.log("Valanyr obtained!");
                        break;
                    case "motes":
                        console.log("Dragonwrath obtained!");
                        break;
                }
                keyItems.set(material, (newQuantity - 250));
                break;
            }
            keyItems.set(material, newQuantity);
        } else {
            if (!junkItems.has(material)) {
                junkItems.set(material, quantity);
            } else {
                let newQuantity = junkItems.get(material);
                newQuantity += quantity;
                junkItems.set(material, newQuantity);
            }
        }
    }
    keyItems = Array.from(keyItems).sort((a, b) => {
        if (a[1] - b[1] !== 0) {
            return b[1] - a[1];
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    junkItems = Array.from(junkItems).sort((a, b) => a[0].localeCompare(b[0]));
    for (let kvp of keyItems) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }
    for (let kvp of junkItems) {
        console.log(`${kvp[0]}: ${kvp[1]}`);
    }
}

legendaryFarming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards');