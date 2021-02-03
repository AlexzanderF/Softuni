// # 1
function warriorQuest(input) {
    let skill = input.shift();
    for (let line of input) {
        if (line === "For Azeroth") {
            break;
        }
        if (line === "GladiatorStance") {
            skill = skill.toUpperCase();
            console.log(skill);
        } else if (line === "DefensiveStance") {
            skill = skill.toLowerCase();
            console.log(skill);
        } else if (line.includes("Dispel")) {
            let index = Number(line.split(" ")[1]);
            let letter = line.split(" ")[2];
            if (index < 0 || index >= skill.length) {
                console.log("Dispel too weak.");
            } else {
                skill = skill.split("");
                skill.splice(index, 1, letter);
                skill = skill.join("");
                console.log("Success!");
            }
        } else if (line.includes("Target Change")) {
            let substr1 = line.split(" ")[2];
            let substr2 = line.split(" ")[3];
            while (skill.includes(substr1)) {
                skill = skill.replace(substr1, substr2);
            }
            console.log(skill);
        } else if (line.includes("Target Remove")) {
            let substr = line.split(" ")[2];
            skill = skill.replace(substr, "");
            console.log(skill);
        } else {
            console.log("Command doesn't exist!");
        }
    }
}

// # 2
function bossRush(input) {
    let n = Number(input.shift());
    for (let line of input) {
        let valid = /\|(?<boss>[A-Z]{4,})\|:#(?<title>[A-Za-z]+\s[A-Za-z]+)#/g.exec(line);
        if (valid) {
            let boss = valid.groups.boss;
            let title = valid.groups.title;
            console.log(`${boss}, The ${title}
>> Strength: ${boss.length}
>> Armour: ${title.length}`);
        } else {
            console.log("Access denied!");
        }
    }
}

// # 3
function heroRecruitment(input) {
    let heroes = {};
    for (let line of input) {
        if (line === "End") {
            break;
        }
        line = line.split(" ");
        if (line[0] === "Enroll") {
            let name = line[1];
            if (!heroes.hasOwnProperty(name)) {
                heroes[name] = [];
            } else {
                console.log(`${name} is already enrolled.`);
            }
        } else if (line[0] === "Learn") {
            let name = line[1];
            let spell = line[2];
            if (heroes.hasOwnProperty(name)) {
                if (heroes[name].includes(spell)) {
                    console.log(`${name} has already learnt ${spell}.`);
                } else {
                    heroes[name].push(spell);
                }
            } else {
                console.log(`${name} doesn't exist.`);
            }
        } else {
            let name = line[1];
            let spell = line[2];
            if (heroes.hasOwnProperty(name)) {
                if (heroes[name].includes(spell)) {
                    heroes[name].splice(heroes[name].indexOf(spell), 1);
                } else {
                    console.log(`${name} doesn't know ${spell}.`);
                }
            } else {
                console.log(`${name} doesn't exist.`);
            }
        }
    }

    heroes = Object.entries(heroes).sort((a, b) => b[1].length - a[1].length || a[0].localeCompare(b[0]));
    console.log("Heroes:");
    for(let pair of heroes){
        console.log(`== ${pair[0]}: ${pair[1].join(", ")}`);
    }
}

heroRecruitment([
    'Enroll Stefan',
    'Enroll Pesho',
    'Enroll Stefan',
    'Learn Stefan ItShouldWork',
    'Learn Stamat ItShouldNotWork',
    'Unlearn Gosho Dispel',
    'Unlearn Stefan ItShouldWork',
    'End'
]
);