// # 1
function furniture(input) {
    let totalMoney = 0;
    let items = [];
    for (let line of input) {
        if (line === "Purchase") {
            break;
        }
        let pattern = />>(?<item>\w+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/g;
        let valid = pattern.exec(line);
        if (valid) {
            items.push(valid.groups.item);
            totalMoney += Number(valid.groups.price) * Number(valid.groups.quantity);
        }
    }
    console.log("Bought furniture:");
    for (let item of items) {
        console.log(item);
    }
    console.log(`Total money spend: ${totalMoney.toFixed(2)}`);
}

// furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);

// # 2
function race(input) {
    let participants = input.shift().split(", ");
    let namePattern = /[A-Za-z]/g;
    let numberPattern = /\d/g;
    let info = {};
    for (let line of input) {
        if (line === "end of race") {
            break;
        }
        let name = line.match(namePattern).join("");
        if (participants.includes(name)) {
            let digits = line.match(numberPattern).map(Number);
            let distance = 0;
            digits.forEach(d => distance += d);
            if (!info.hasOwnProperty(name)) {
                info[name] = distance;
            } else {
                info[name] += distance
            }
        }
    }
    info = Object.entries(info).sort((a, b) => b[1] - a[1]);

    console.log(`1st place: ${info[0][0]}`);
    console.log(`2nd place: ${info[1][0]}`);
    console.log(`3rd place: ${info[2][0]}`);

}

// # 3
function SoftUniBarIncome(input) {
    let totalIncome = 0;
    for (let line of input) {
        let pattern = /%(?<name>[A-Z][a-z]+)%[^\|\$\%\.]*<(?<item>\w+)>[^\|\$\%\.]*\|(?<count>\d+)\|[^\|\$\%\.\d]*(?<price>\d+\.?\d*)\$/g;
        let valid = pattern.exec(line);
        if (valid) {
            let count = Number(valid.groups.count);
            let price = Number(valid.groups.price);
            console.log(`${valid.groups.name}: ${valid.groups.item} - ${(count * price).toFixed(2)}`);
            totalIncome += count * price;
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

// # 4
function starEnigma(input) {
    let n = input.shift();
    let obj = {
        attacked: [],
        destroyed: []
    };
    for (let j = 0; j < n; j++) {
        let line = input[j];
        let count = line.match(/[star]/gi);
        if (count !== null) {
            count = count.length;
        };
        line = line.split("");
        for (let i = 0; i < line.length; i++) {
            let char = line[i];
            let code = char.charCodeAt(0) - count;
            line[i] = String.fromCharCode(code);
        }
        line = line.join("");
        let pattern = /[^@\-\!>\:]*@(?<name>[A-Z][a-z]+)[^@\-\!>\:]*:(\d+)[^@\-\!>\:]*!(?<type>[AD])![^@\-\!>\:]*->(\d+)/g;
        let valid = pattern.exec(line);
        if (valid !== null) {
            if (valid.groups.type === "A") {
                obj.attacked.push(valid.groups.name);
            } else {
                obj.destroyed.push(valid.groups.name);
            }
        }
    }
    console.log(`Attacked planets: ${obj.attacked.length}`);
    if (obj.attacked.length > 0) {
        let attacked = obj.attacked.sort((a, b) => a.localeCompare(b));
        for (let name of attacked) {
            console.log(`-> ${name}`);
        }
    }
    console.log(`Destroyed planets: ${obj.destroyed.length}`);
    if (obj.destroyed.length > 0) {
        let destroyed = obj.destroyed.sort((a, b) => a.localeCompare(b));
        for (let name of destroyed) {
            console.log(`-> ${name}`);
        }
    }

}

// # 5
function netherRealms(input) {
    input = input[0].split(/[,\s]+/g);
    let obj = {};
    for (let line of input) {
        obj[line] = {};
        let healthPattern = /[^\d\*\/\+\-\.]/g;
        let matched = line.match(healthPattern);
        let health = 0;
        for (let char of matched) {
            health += char.charCodeAt();
        }
        let damage = 0;
        let numbers = line.match(/\-?\d+\.?\d*/g);
        if (numbers !== null) {
            for (let num of numbers) {
                damage += Number(num);
            }
        }

        let otherSym = line.match(/[*\/]/g);
        if (otherSym !== null) {
            for (let sym of otherSym) {
                if (sym === "*") {
                    damage = damage * 2;
                } else {
                    damage = damage / 2;
                }
            }
        }

        obj[line].health = health;
        obj[line].damage = damage.toFixed(2);
    }
    obj = Object.entries(obj).sort((a, b) => a[0].localeCompare(b[0]));

    for (let pair of obj) {
        console.log(`${pair[0]} - ${pair[1].health} health, ${pair[1].damage} damage`);
    }
}

// # 6
function extractEmails(input) {     // regex look behind method !!!
    for (let line of input) {
        let pattern = /(?<=\s)([A-Za-z\d]+[\.\-\_]?[A-Za-z\d]+)+@\w+\-?\w+(\.\w+\-?\w+)+\b/g;
        let emails = line.match(pattern);
        if (emails !== null) {
            for (let email of emails) {
                console.log(email);
            }
        }
    }

}

extractEmails(['Just send email to s.miller@mit.edu and j.hopking@york.ac.uk for more information.']);