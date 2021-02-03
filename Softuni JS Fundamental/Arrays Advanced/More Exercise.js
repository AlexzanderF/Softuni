//  # 1
function equalNeighbors(input) {
    let count = 0;
    for (let i = 0; i < input.length - 1; i++) {
        let current = input[i];
        let toCompare = input[i + 1];
        current.forEach((element, index) => {
            toCompare.forEach((e, i) => {          // vertical neighbours
                if (element === e && index === i) {
                    count++;
                }
            });
            if (current[index] === current[index + 1]) {   // horizontal 
                count++;
            }
        });
    }
    let last = input[input.length - 1];
    for (let i = 0; i < last.length; i++) {
        if (last[i] === last[i + 1]) {
            count++;
        }
    }
    console.log(count);
}

// # 2
function bunnyKill(input) {
    let coordinates = input.pop().split(" ");
    let hangar = input;
    hangar.forEach((row, i) => {          // hangar manipulation
        hangar[i] = row.split(" ").map(Number);
    });
    let totalDamage = 0;
    let killed = 0;
    for (let coord of coordinates) {
        coord = coord.split(",").map(Number);
        let [row, col] = coord;
        let damage = hangar[row][col];  // <-- the bomb value
        if (damage <= 0) {   // the bomb has been already killed
            continue;
        }
        killed++;
        totalDamage += damage;
        for (let c = col - 1; c <= col + 1; c++) {   // col pos
            if (c < 0 || c > hangar[row].length - 1) {
                continue;
            }
            for (let r = row - 1; r <= row + 1; r++) {   // row pos
                if (r < 0 || r > hangar.length - 1) {
                    continue;
                }
                if (hangar[r][c] <= damage) {
                    hangar[r][c] = 0;
                } else {
                    hangar[r][c] -= damage;
                }
            }

        }
    }
    hangar.forEach(row => {
        row.forEach(bunny => {
            if (bunny > 0) {
                totalDamage += bunny;
                killed++;
            }
        });
    });
    console.log(totalDamage);
    console.log(killed);
    // console.log(hangar);
}

// # 3
function airPollution(map, forces) {   //map is always 5x5
    let pollutedAreas = [];
    map.forEach((row, i) => {
        map[i] = row.split(" ").map(Number);
    });
    for (let force of forces) {
        let [type, number] = force.split(" ");
        number = Number(number);
        if (type === "breeze") {
            let row = number;
            for (let col = 0; col <= 4; col++) {
                map[row][col] = Math.max(0, map[row][col] - 15);
            }
        } else if (type === "gale") {
            let col = number;
            for (let row = 0; row <= 4; row++) {
                map[row][col] = Math.max(0, map[row][col] - 20);
            }
        } else {
            let value = number;
            map.forEach((row, i) => {
                map[i] = row.map(block => block + value);
            });
        }
    }
    map.forEach((row, r) => {
        row.forEach((block, c) => {
            if (block >= 50) {
                let pollutedBlock = `[${r}-${c}]`;
                pollutedAreas.push(pollutedBlock);
            }
        });
    });
    if (pollutedAreas.length > 0) {
        console.log(`Polluted areas: ${pollutedAreas.join(", ")}`);
    } else {
        console.log("No polluted areas");
    }
    // console.log(map);
}

// # 4
function janNotation(input) {
    let numbers = [];
    let operator;
    let notEnough = false;
    for (let i = 0; i < input.length; i++) {
        if (typeof (input[i]) === "number") {
            numbers.push(input[i]);
        } else {
            operator = input[i];
            if (numbers.length < 2) {
                console.log("Error: not enough operands!");
                notEnough = true;
                break;
            }
            if (operator === "-") {
                let secNum = numbers.pop();
                let firstNum = numbers.pop();
                let result = firstNum - secNum;
                numbers.push(result);
            } else if (operator === "*") {
                let secNum = numbers.pop();
                let firstNum = numbers.pop();
                let result = firstNum * secNum;
                numbers.push(result);
            } else if (operator === "+") {
                let secNum = numbers.pop();
                let firstNum = numbers.pop();
                let result = firstNum + secNum;
                numbers.push(result);
            } else {   // <--  "/"
                let secNum = numbers.pop();
                let firstNum = numbers.pop();
                let result = firstNum / secNum;
                numbers.push(result);
            }
        }

    }
    if (numbers.length === 1 && notEnough === false) {
        console.log(numbers[0]);
    } else if (numbers.length > 2 && notEnough === false) {
        console.log("Error: too many operands!");
    }
}

// # 5
function rosettaStone(input) {
    let finalMessage = "";
    let n = Number(input.shift());   // template rows(lines), col = template[0].length
    let template = [];
    for (let i = 0; i < n; i++) {
        template.push(input.shift().split(" ").map(Number));
    }
    input.forEach((row, i) => {
        input[i] = row.split(" ").map(Number);
    });
    let message = input;  // the big square
    for (let row = 0; row < message.length; row += n) {      // moving through the message
        for (let col = 0; col < message[row].length; col += template[0].length) {

            for (let r = 0; r < n; r++) {     // moving through the template
                if (row + r > message.length - 1) {
                    break;
                }
                for (let c = 0; c < template[r].length; c++) {
                    if (col + c > message[row].length - 1) {
                        break;
                    }
                    message[row + r][col + c] += template[r][c];
                }
            }
        }
    }
    message.forEach((row, r) => {
        row.forEach((col, c) => {
            let value = col;
            row[c] = getAlphabet(value - (Math.floor(value / 27)) * 27);
            if (row[c] !== "@") {
                finalMessage += row[c];
            } else {
                finalMessage += " ";
            }
        });
    });

    console.log(finalMessage);

    function getAlphabet(position) {
        let code = position + 64;
        return String.fromCharCode(code);
    }
}

rosettaStone([
    '1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14'
]
);