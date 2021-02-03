// # 1
function stringManipulator(input) {
    let string = input.shift();
    for (let line of input) {
        if (line === "Done") {
            break;
        }
        line = line.split(" ");
        if (line[0] === "Change") {
            let char = line[1];
            let replacement = line[2];
            while (string.includes(char)) {
                string = string.replace(char, replacement);
            }
            console.log(string);
        } else if (line[0] === "Includes") {
            let substr = line[1];
            if (string.includes(substr)) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (line[0] === "End") {
            let substr = line[1];
            let toCheck = string.substring(string.length - substr.length);
            if (toCheck === substr) {
                console.log("True");
            } else {
                console.log("False");
            }
        } else if (line[0] === "Uppercase") {
            string = string.toUpperCase();
            console.log(string);
        } else if (line[0] === "FindIndex") {
            let char = line[1];
            console.log(string.indexOf(char));
        } else {
            let start = Number(line[1]);
            let count = Number(line[2]);
            string = string.substr(start, count);
            console.log(string);
        }
    }
}

// # 2
function messageEncrypter(input) {
    input.shift();
    for (let message of input) {
        let valid = /([*@])(?<tag>[A-Z][a-z]{2,})\1: (?<message>\[[A-Za-z]\]\|\[[A-Za-z]\]\|\[[A-Za-z]\]\|)$/g.exec(message);
        if (valid) {
            let tag = valid.groups.tag;
            let message = valid.groups.message;
            let letters = message.match(/[A-Za-z]/g);
            let numbers = [];
            for (let char of letters) {
                numbers.push(char.charCodeAt());
            }
            console.log(`${tag}: ${numbers.join(" ")}`);
        } else {
            console.log("Valid message not found!");
        }
    }
}

// # 3
function battleManager(input) {
    let people = {};
    for (let command of input) {
        if (command === "Results") {
            break;
        }
        command = command.split(":");
        if (command[0] === "Add") {
            let [name, health, energy] = command.slice(1);
            health = Number(health);
            energy = Number(energy);
            if (!people.hasOwnProperty(name)) {
                people[name] = {};
                people[name].health = health;
                people[name].energy = energy;
            } else {
                people[name].health += health;
            }
        } else if (command[0] === "Attack") {
            let [attacker, defender, damage] = command.slice(1);
            damage = Number(damage);
            if (people.hasOwnProperty(attacker) && people.hasOwnProperty(defender)) {
                people[defender].health -= damage;
                if (people[defender].health <= 0) {
                    delete people[defender];
                    console.log(`${defender} was disqualified!`);
                }
                people[attacker].energy--;
                if (people[attacker].energy <= 0) {
                    delete people[attacker];
                    console.log(`${attacker} was disqualified!`);
                }
            }
        } else {
            let name = command[1];
            if (people.hasOwnProperty(name)) {
                delete people[name];
            } else if (name === "All") {
                people = {};
            }
        }
    }
    people = Object.entries(people).sort((a, b) => b[1].health - a[1].health || a[0].localeCompare(b[0]));
    console.log(`People count: ${people.length}`);
    for (let pair of people) {
        console.log(`${pair[0]} - ${pair[1].health} - ${pair[1].energy}`);
    }
}

battleManager([
    'Add:Mark:1000:5',
    'Add:Clark:1000:3',
    'Attack:Clark:Mark:500',
    'Add:Allison:2500:5',
    'Attack:Clark:Mark:300',
    'Add:Charlie:4000:10',
    'Attack:Clark:Mark:500',
    'Results'
]
);