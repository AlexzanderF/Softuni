// # 1
function nikuldenCharity(input) {
    let text = input.shift();

    for (let line of input) {
        if (line === "Finish") {
            break;
        }
        line = line.split(" ");
        if (line[0] === "Replace") {
            let currChar = line[1];
            let newChar = line[2];
            while (text.includes(currChar)) {
                text = text.replace(currChar, newChar);
            }
            console.log(text);
        } else if (line[0] === "Cut") {
            let start = Number(line[1]);
            let end = Number(line[2]);
            if (start < 0 || end >= text.length) {
                console.log("Invalid indexes!");
            } else {
                let substr = text.substring(start, end + 1);
                text = text.replace(substr, "");
                console.log(text);
            }
        } else if (line[0] === "Make") {
            let type = line[1];
            if (type === "Upper") {
                text = text.toUpperCase();
            } else {
                text = text.toLowerCase();
            }
            console.log(text);
        } else if (line[0] === "Check") {
            let string = line[1];
            if (text.includes(string)) {
                console.log(`Message contains ${string}`);
            } else {
                console.log(`Message doesn't contain ${string}`);
            }
        } else {
            let start = Number(line[1]);
            let end = Number(line[2]);
            if (start < 0 || end >= text.length) {
                console.log("Invalid indexes!");
            } else {
                let substr = text.substring(start, end + 1);
                let sum = 0;
                for (let char of substr) {
                    sum += char.charCodeAt();
                }
                console.log(sum);
            }
        }
    }

}

// # 2
function messageTranslator(input) {
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let message = input[i];
        let validMessage = /!(?<command>[A-Z][a-z]{2,})!:\[(?<mess>[A-Za-z]{8,})\]/g.exec(message);
        if (validMessage) {
            let command = validMessage.groups.command;
            validMessage = validMessage.groups.mess;
            let letters = validMessage.match(/[A-Za-z]/g);
            let codes = [];
            for (let char of letters) {
                codes.push(char.charCodeAt());
            }
            console.log(`${command}: ${codes.join(" ")}`);
        } else {
            console.log("The message is invalid");
        }
    }
}

// # 3
function nikuldenMeals(input) {
    let opinions = {};
    let count = 0;
    let line = input.shift();
    while (line !== "Stop") {
        let [command, guest, meal] = line.split("-");
        if (command === "Like") {
            if (!opinions.hasOwnProperty(guest)) {
                opinions[guest] = [];
                opinions[guest].push(meal);
            } else {
                if (!opinions[guest].includes(meal)) {
                    opinions[guest].push(meal);
                }
            }
        } else {
            if (!opinions.hasOwnProperty(guest)) {
                console.log(`${guest} is not at the party.`);
            } else {
                if (opinions[guest].includes(meal)) {
                    console.log(`${guest} doesn't like the ${meal}.`);
                    let index = opinions[guest].indexOf(meal);
                    opinions[guest].splice(index, 1);
                    count++;
                } else {
                    console.log(`${guest} doesn't have the ${meal} in his/her collection.`);
                }
            }
        }
        line = input.shift();
    }
    opinions = Object.entries(opinions).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    for (let guest of opinions) {
        console.log(`${guest[0]}: ${guest[1].join(", ")}`);
    }
    console.log(`Unliked meals: ${count}`);
}

nikuldenMeals([
    'Like-Krisi-shrimps',
    'Unlike-Vili-carp',
    'Unlike-Krisi-salad',
    'Unlike-Krisi-shrimps',
    'Stop'
]
);