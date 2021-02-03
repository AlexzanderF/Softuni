// # 1
function addAndSubtract(array) {
    let originalSum = 0;
    let modifiedSum = 0;
    for (let i = 0; i < array.length; i++) {
        originalSum += array[i];
        if (array[i] % 2 === 0) {
            array[i] = array[i] + i;
            modifiedSum += array[i];
        } else {
            array[i] = array[i] - i;
            modifiedSum += array[i];
        }

    }
    console.log(array);
    console.log(originalSum);
    console.log(modifiedSum);
}

// # 2
function commonElements(array1, array2) {
    for (let i = 0; i < array1.length; i++) {
        for (let j = 0; j < array2.length; j++) {
            if (array1[i] === array2[j]) {
                console.log(array1[i]);
            }
        }
    }
}

// # 3 
function mergeArrays(array1, array2) {
    let mergedArray = [];
    for (let i = 0; i < array1.length; i++) {
        if (i % 2 === 0) {
            mergedArray[i] = Number(array1[i]) + Number(array2[i]);
        } else {
            mergedArray[i] = array1[i] + array2[i];   // elements are already strings
        }
    }
    console.log(mergedArray.join(' - '));
}

// # 4
function arrayRotation(array, rotations) {
    for (let r = 1; r <= rotations; r++) {
        let element = array.shift();
        array.push(element);
    }
    console.log(array.join(' '));
}

// # 5
function maxNumber(array) {
    let print = "";
    for (let index = 0; index < array.length; index++) {
        let isTop = false;   // the element we are comparing with the others right from it
        if (index == array.length - 1) {
            print += array[index] + " ";
            break;
        }
        for (let j = index + 1; j < array.length; j++) {
            if (array[index] > array[j]) {
                isTop = true;
            } else {
                isTop = false;
                break;
            }
        }
        if (isTop) {
            print += array[index] + " ";
        }
    }
    console.log(print);
}

// # 6
function equalSums(array) {
    let indexExists = false;
    if (array.length > 1) {
        for (let i = 0; i < array.length; i++) {      // goes through the elements
            let leftSum = 0;
            let rightSum = 0;
            for (let left = 0; left < i; left++) {     // checks left
                leftSum += array[left];
            }
            for (let right = i + 1; right < array.length; right++) {     //checks right
                rightSum += array[right]
                if (rightSum > leftSum) {
                    break;
                }
            }
            if (leftSum === rightSum) {
                indexExists = true;
                console.log(i);
                break;
            }
        }
    } else {
        indexExists = true;
        console.log('0');
    }
    if (!indexExists) {
        console.log('no');
    }
}

// # 7
function maxSequence(numbers) {
    let printArray = [];      // the longest sequence which we want to print
    let compareArray = [];    // the sequence of numbers in the start array(numbers)
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] !== numbers[i - 1]) {
            compareArray = [];
        }
        if (numbers[i] === numbers[i - 1] || numbers[i] === numbers[i + 1]) {
            compareArray.push(numbers[i]);
        }
        if (compareArray.length > printArray.length) {
            printArray = compareArray;
        }
    }
    console.log(printArray.join(' '));
}

// # 8
function magicSum(array, sum) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === sum) {
                console.log(`${array[i]} ${array[j]}`);
            }
        }
    }
}

// # 9
function dungeonestDark(input) {
    let array = input[0].split('|');
    let health = 100;
    let totalCoins = 0;
    let dead = false;
    for (let i = 0; i < array.length; i++) {     // room = i + 1
        let command = array[i].split(' ');
        let roomType = command[0];     // string
        let num = Number(command[1]);
        if (roomType === "potion") {
            if (health + num < 100) {
                health += num;
                console.log(`You healed for ${num} hp.`);
            } else {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            }
            console.log(`Current health: ${Math.min(health, 100)} hp.`);
        } else if (roomType === "chest") {
            totalCoins += num;
            console.log(`You found ${num} coins.`);
        } else {
            let monster = roomType;
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                dead = true;
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }
    if (!dead) {
        console.log(`You've made it!`);
        console.log(`Coins: ${totalCoins}`);
        console.log(`Health: ${health}`);
    }
}

// # 10
function ladybugs(array) {                          // 1 - ladybug; 0 - empty 
    let fieldSize = array[0];
    let field = [];
    field.length = fieldSize;
    // console.log(field);
    let bugsPosition = array[1].split(' ');
    for (let i = 0; i < bugsPosition.length; i++) {   //puts 1(bug) in the field 
        field[Number(bugsPosition[i])] = 1;
    }
    for (let i = 0; i < field.length; i++) {
        if (field[i] === undefined || field[i] === null) {
            field[i] = 0;
        } else {
            continue;
        }
    }
    for (let i = 2; i < array.length; i++) {     //goes through the commands
        let command = array[i].split(' ');
        let ladybugIndex = Number(command[0]);   //chooses which ladybug to move
        let direction = command[1];
        let flyLength = Number(command[2]);
        if (ladybugIndex > field.length - 1 || ladybugIndex < 0 || field[ladybugIndex] === 0) {
            continue;
        }
        if (flyLength < 0) {
            flyLength = Math.abs(flyLength);   // flip dir
            if (direction === "right") {
                direction = "left";
            } else {
                direction = "right";
            }
        }
        if (direction === "right") {
            field[ladybugIndex] = 0;  // flyes off
            if (ladybugIndex + flyLength < field.length - 1) {
                if (field[ladybugIndex + flyLength] === 0) {
                    field[ladybugIndex + flyLength] = 1;
                } else {
                    while (field[ladybugIndex + flyLength] === 1 && (ladybugIndex + flyLength) < field.length - 1) {
                        flyLength += flyLength;
                    }
                    if (field[ladybugIndex + flyLength] === 0 && ladybugIndex + flyLength <= field.length - 1) {
                        field[ladybugIndex + flyLength] = 1;
                    }
                }
            }
        }
        if (direction === "left") {
            field[ladybugIndex] = 0;
            if (ladybugIndex - flyLength >= 0) {
                if (field[ladybugIndex - flyLength] === 0) {
                    field[ladybugIndex - flyLength] = 1;
                } else {
                    while (field[ladybugIndex - flyLength] === 1 && (ladybugIndex - flyLength) >= 0) {
                        flyLength += flyLength;
                    }
                    if (field[ladybugIndex - flyLength] === 0 && (ladybugIndex - flyLength) >= 0) {
                        field[ladybugIndex - flyLength] = 1;
                    }
                }
            }
        }
    }
    console.log(field.join(" "));
}

ladybugs([5, '0 2 3',
    '3 left 3']
);



