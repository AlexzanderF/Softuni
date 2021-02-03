// # 1
function activationKeys(input) {
    let key = input.shift();
    for (let line of input) {
        if (line === "Generate") {
            break;
        }
        if (line.includes("Contains")) {
            let subStr = line.split(">>>")[1];
            if (key.includes(subStr)) {
                console.log(`${key} contains ${subStr}`);
            } else {
                console.log(`Substring not found!`);
            }
        } else if (line.includes("Flip")) {
            let type = line.split(">>>")[1];
            let start = line.split(">>>")[2];
            let end = line.split(">>>")[3];
            let subStr = key.substring(start, end);
            if (type === "Upper") {
                key = key.replace(subStr, subStr.toUpperCase());
            } else {
                key = key.replace(subStr, subStr.toLowerCase());
            }
            console.log(key);
        } else {
            let start = line.split(">>>")[1];
            let end = line.split(">>>")[2];
            let subStr = key.substring(start, end);
            key = key.replace(subStr, "");
            console.log(key);
        }
    }
    console.log(`Your activation key is: ${key}`);
}

// # 2
function emojiDetector(input) {
    let text = input[0];
    let digits = text.match(/\d/g).map(Number);
    let treshold = 0;
    if (digits !== null) {
        treshold = 1;
        digits.forEach(x => treshold = treshold * x);
    }
    let emojis = text.match(/(::|\*\*)[A-Z][a-z]{2,}\1/g);

    console.log(`Cool threshold: ${treshold}`);

    if (emojis !== null) {
        console.log(`${emojis.length} emojis found in the text. The cool ones are:`);
        for (let emoji of emojis) {
            let currentCool = 0;
            let letters = emoji.match(/[A-Za-z]/g);
            for (let letter of letters) {
                currentCool += letter.charCodeAt();
            }
            if (currentCool > treshold) {
                console.log(emoji);
            }
        }
    } else {
        console.log(`0 emojis found in the text. The cool ones are:`);
    }


}

// # 3
function pirates(input) {
    let obj = {};
    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Sail") {
            break;
        }
        let [city, population, gold] = input[i].split("||");
        population = Number(population);
        gold = Number(gold);
        if (!obj.hasOwnProperty(city)) {
            obj[city] = {};
            obj[city].population = population;
            obj[city].gold = gold;
        } else {
            obj[city].population += population;
            obj[city].gold += gold;
        }
    }
    for (let i = input.indexOf("Sail") + 1; i < input.length; i++) {
        if (input[i] === "End") {
            break;
        }
        if (input[i].includes("Plunder")) {
            let [action, city, people, gold] = input[i].split("=>");
            people = Number(people);
            gold = Number(gold);
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            obj[city].gold -= gold;
            obj[city].population -= people;
            if (obj[city].gold <= 0 || obj[city].population <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete obj[city];
            }
        } else {
            let [action, city, gold] = input[i].split("=>");
            gold = Number(gold);
            if (gold < 0) {
                console.log("Gold added cannot be a negative number!");
                continue;
            }
            obj[city].gold += gold;
            console.log(`${gold} gold added to the city treasury. ${city} now has ${obj[city].gold} gold.`);
        }
    }
    if (Object.keys(obj).length > 0) {
        obj = Object.entries(obj).sort((a, b) => {
            if (b[1].gold - a[1].gold !== 0) {
                return b[1].gold - a[1].gold;
            } else {
                return a[0].localeCompare(b[0]);
            }
        });
        console.log(`Ahoy, Captain! There are ${obj.length} wealthy settlements to go to:`);
        for (let pair of obj) {
            console.log(`${pair[0]} -> Population: ${pair[1].population} citizens, Gold: ${pair[1].gold} kg`);
        }

    } else {
        console.log("Ahoy, Captain! All targets have been plundered and destroyed!");
    }
}

pirates([
    'Tortuga||345000||1250',
    'Santo Domingo||240000||630',
    'Havana||410000||1100',
    'Sail',
    'Plunder=>Tortuga=>75000=>380',
    'Prosper=>Santo Domingo=>180',
    'End'
]
);

