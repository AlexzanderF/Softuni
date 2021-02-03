// # 1
function passReset(input) {
    let password = input.shift();
    for (let command of input) {
        if (command === "Done") {
            break;
        }
        if (command.includes("TakeOdd")) {
            let result = "";
            for (let i = 1; i < password.length; i += 2) {
                result += password[i];
            }
            password = result;
            console.log(password);
        } else if (command.includes("Cut")) {
            let index = command.split(" ")[1];
            let length = command.split(" ")[2];
            let toReplace = password.substr(index, length);
            password = password.replace(toReplace, "");
            console.log(password);
        } else {
            let substring = command.split(" ")[1];
            let substitute = command.split(" ")[2];
            if (!password.includes(substring)) {
                console.log("Nothing to replace!");
            } else {
                while (password.includes(substring)) {
                    password = password.replace(substring, substitute);
                }
                console.log(password);
            }
        }
    }
    console.log(`Your password is: ${password}`);
}

// # 2
function fancyBarcodes(input) {
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let line = input[i];
        let valid = /(@[#]+)[A-Z][A-Za-z0-9]{4,}[A-Z](@[#]+)/.exec(line);
        if (valid !== null) {
            let digits = line.match(/\d/g);
            let group = "";
            if (digits !== null) {
                digits.forEach(d => group += d);
                console.log(`Product group: ${group}`);
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log("Invalid barcode");
        }
    }
}

// # 3
function heroesOfCodeAndLogic(input) {
    let heroes = {};
    let n = Number(input.shift());
    for (let i = 0; i < n; i++) {
        let [name, hp, mp] = input.shift().split(" ");
        heroes[name] = {};
        heroes[name].HP = Number(hp);
        heroes[name].MP = Number(mp);
    }

    for (let line of input) {
        if (line.includes("CastSpell")) {
            let [action, name, neededMP, spell] = line.split(" - ");
            neededMP = Number(neededMP);
            if (heroes[name].MP >= neededMP) {
                heroes[name].MP -= neededMP;
                console.log(`${name} has successfully cast ${spell} and now has ${heroes[name].MP} MP!`);
            } else {
                console.log(`${name} does not have enough MP to cast ${spell}!`);
            }
        } else if (line.includes("TakeDamage")) {
            let [action, name, damage, attacker] = line.split(" - ");
            damage = Number(damage);
            if (heroes[name].HP - damage > 0) {
                heroes[name].HP -= damage;
                console.log(`${name} was hit for ${damage} HP by ${attacker} and now has ${heroes[name].HP} HP left!`);
            } else {
                console.log(`${name} has been killed by ${attacker}!`);
                delete heroes[name];
            }
        } else if (line.includes("Recharge")) {
            let [action, name, amount] = line.split(" - ");
            amount = Number(amount);
            if (heroes[name].MP + amount <= 200) {
                console.log(`${name} recharged for ${amount} MP!`);
            } else {
                console.log(`${name} recharged for ${amount - ((heroes[name].MP + amount) - 200)} MP!`);
            }
            heroes[name].MP = Math.min(heroes[name].MP + amount, 200);

        } else if (line.includes("Heal")) {
            let [action, name, amount] = line.split(" - ");
            amount = Number(amount);
            if (heroes[name].HP + amount <= 100) {
                console.log(`${name} healed for ${amount} HP!`);
            } else {
                console.log(`${name} healed for ${amount - ((heroes[name].HP + amount) - 100)} HP!`);
            }
            heroes[name].HP = Math.min(heroes[name].HP + amount, 100);
        } else {
            break;
        }
    }
    heroes = Object.entries(heroes).sort((a, b) => {
        if (b[1].HP - a[1].HP !== 0) {
            return b[1].HP - a[1].HP;
        } else {
            return a[0].localeCompare(b[0]);
        }
    });
    for (let pair of heroes) {
        console.log(`${pair[0]}
  HP: ${pair[1].HP}
  MP: ${pair[1].MP}`);
    }
}

heroesOfCodeAndLogic([
    '4',
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End'
]
);

