// # 1
function winningTicket(input) {
    input = input.shift().split(/\s*,\s*/g);
    for (let line of input) {
        if (line.length !== 20) {
            console.log("invalid ticket");
            continue;
        }
        let firstHalf = line.substring(0, line.length / 2);
        let secHalf = line.substring(line.length / 2, line.length);
        let pattern = /[@#$^]{6,}/g;
        let firstMatched = firstHalf.match(pattern);
        let secMatched = secHalf.match(pattern);
        if (firstMatched !== null && secMatched !== null) {
            let combination;
            if (firstMatched[0].length === secMatched[0].length) {
                combination = firstMatched[0];
            } else if (firstMatched[0].length > secMatched[0].length) {
                combination = secMatched[0];
            } else {
                combination = firstMatched[0];
            }

            if (combination.length >= 6 && combination.length <= 9) {
                console.log(`ticket "${line}" - ${combination.length}${combination[0]}`);
            } else if (combination.length === 10) {
                console.log(`ticket "${line}" - ${combination.length}${combination[0]} Jackpot!`);
            } else {
                console.log(`ticket "${line}" - no match`);
            }
        } else {
            console.log(`ticket "${line}" - no match`);
        }

    }
}

// # 2
function rageQuit(input) {
    let string = input[0];
    let uniqueChars = [];
    let series = string.match(/[^\d]+\d+/g);
    let print = "";

    for (let elem of series) {
        let num = Number((/\d+/g.exec(elem))[0]);
        let chars = (/[^\d]+/g.exec(elem))[0];
        chars = chars.toUpperCase();
        if (num !== 0) {
            for (let char of chars) {
                if (!uniqueChars.includes(char)) {
                    uniqueChars.push(char);
                }
            }
            for (let i = 1; i <= num; i++) {
                print += chars;
            }
        }
    }
    console.log(`Unique symbols used: ${uniqueChars.length}`);
    console.log(print);
}

// # 3
function postOffice(input) {
    input = input[0];
    let map = new Map();
    let [firstPart, secPart, thirdPart] = input.match(/[^\|]+/g);
    thirdPart = thirdPart.split(/\s+/g);
    let capitals = firstPart.match(/([#$%*&])[A-Z]+\1/g);
    if (capitals !== null) {
        capitals = capitals[0].match(/[A-Z]/g);
        for (let cap of capitals) {
            map.set(cap, 0);
        }
    }
    let codes = secPart.match(/\d{2}:\d{2}/g);
    if (codes !== null) {
        for (let elem of codes) {
            let asciiCode = Number(elem.split(":")[0]);
            let length = Number(elem.split(":")[1]) + 1;
            let letter = String.fromCharCode(asciiCode);
            if (map.has(letter)) {
                let num = map.set(letter, length);

            }
        }
    }
    for (let kvp of map) {
        for (let word of thirdPart) {
            if (word[0] === kvp[0] && word.length === kvp[1]) {
                console.log(word);
            }
        }
    }
}

// # 4
function santaSecretHelper(input) {
    let list = [];
    let key = Number(input.shift());
    for (let line of input) {
        if (line === "end") {
            break;
        }

        line = line.split("");
        for (let i = 0; i < line.length; i++) {
            let code = line[i].charCodeAt() - key;
            line[i] = String.fromCharCode(code);
        }
        line = line.join("");
        let valid = /@(?<name>[A-Za-z]+)[^@\-!:>]+!(?<type>[GN])!/g.exec(line);
        if (valid !== null) {
            let name = valid.groups.name;
            let type = valid.groups.type;
            if (type === "G") {
                list.push(name);
            }
        }
    }
    for (let name of list) {
        console.log(name);
    }
}

santaSecretHelper([
    '3',
    'CNdwhamigyenumje$J$',
    'CEreelh-nmguuejn$J$',
    'CVwdq&gnmjkvng$Q$',
    'end'
]
);
