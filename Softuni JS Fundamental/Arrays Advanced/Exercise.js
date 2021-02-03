// # 1
function train(input) {
    let array = input.shift().split(" ").map(Number);
    let maxCapacity = input.shift();

    for (let c = 0; c < input.length; c++) {
        let command = input[c].split(" ").map(Number);
        let passengers = 0;
        if (command.length > 1) {
            passengers = command[1];
            array.push(passengers);
        } else {
            passengers = command[0];
            for (let j = 0; j < array.length; j++) {
                if (array[j] + passengers <= maxCapacity) {
                    array[j] = array[j] + passengers;
                    break;
                } else {
                    continue;
                }
            }

        }
    }

    console.log(array.join(" "));
}

// # 2
function distinctArray(array) {
    let newArr = [];
    for (let i = 0; i < array.length; i++) {
        let isRepeated = false;
        for (let j = 0; j < i; j++) {
            if (array[i] === array[j]) {
                isRepeated = true;
                break;
            }
        }
        if (isRepeated === false) {
            newArr.push(array[i])
        }
    }
    console.log(newArr.join(" "));
}

// # 3
function houseParty(input) {
    let trackList = [];
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ");
        let name = command[0];
        let action = command[2];
        if (action === "going!") {
            if (trackList.includes(name)) {
                console.log(`${name} is already in the list!`);
            } else {
                trackList.push(name);
            }
        } else {
            if (trackList.includes(name)) {
                trackList = trackList.filter(x => x !== name);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }
    console.log(trackList.join("\n"));

}


// # 4
function sorting(array) {
    let resultArr = [];
    while (array.length >= 1) {
        array.sort((a, b) => a - b);
        let smallest = array.shift();
        let biggest = array.pop();
        resultArr.push(biggest, smallest);
    }
    resultArr = resultArr.filter(Number);
    console.log(resultArr.join(" "));
}

// # 5 
function sortByCriteria(array) {
    array.sort((a, b) => {
        if (a.length - b.length !== 0) {
            return a.length - b.length;
        } else {                           //if they are the same length run the code below 
            return a.localeCompare(b);
        }
    });
    console.log(array.join("\n"));
}

// # 6
function abombNumbers(array, bombInput) {
    let bombNumber = bombInput.shift();
    let power = bombInput.shift();
    for (let i = 0; i < array.length; i++) {
        if (array[i] === bombNumber) {
            if (i - power < 0) {
                array.splice(Math.max(i - power, 0), Math.max(power - 1, 0));
            } else {
                array.splice(Math.max(i - power, 0), power);
            }
            array.splice(Math.max(i - power, 0), power + 1);
            i = 0; // !!!!!!!!! starts to check for bombNumber from the start of the array
        }
    }
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum += array[i];
    }
    console.log(sum);
}

// # 7
function searchNumber(array, commands) {
    let elToTake = commands.shift();
    let elToDelete = commands.shift();
    let searchedEl = commands.shift();
    let newArr = [];
    newArr.length = elToTake;
    for (let j = 0; j < elToTake; j++) {
        newArr[j] = array[j];
    }
    for (let j = 1; j <= elToDelete; j++) {
        newArr.shift();
    }
    let occureCount = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (newArr[i] === searchedEl) {
            occureCount++;
        }
    }
    console.log(`Number ${searchedEl} occurs ${occureCount} times.`);

}

// # 8
function arrayManipulator(array, manipulations) {
    for (let i = 0; i < manipulations.length; i++) {
        let manipulation = manipulations[i].split(" ");
        let command = manipulation.shift();
        let firstNum = Number(manipulation.shift());
        let secNum = Number(manipulation[0]);

        switch (command) {
            case "add":
                array.splice(firstNum, 0, secNum);
                break;

            case "addMany":
                let index = firstNum;
                for (let j = 0; j < manipulation.length; j++) {
                    array.splice(index + j, 0, Number(manipulation[j]));
                }
                break;

            case "contains":
                if (array.includes(firstNum)) {
                    console.log(array.indexOf(firstNum));
                } else {
                    console.log(-1);
                }
                break;

            case "remove":
                array.splice(firstNum, 1);
                break;

            case "shift":
                let positions = firstNum;
                for(let j = 1; j <= positions; j++){
                    let shifted = array.shift();
                    array.push(shifted);
                }
                break;
            case "sumPairs":
                let sumArr = [];
                for (let j = 0; j < array.length; j += 2) {
                    if (j + 1 > array.length - 1) {
                        sumArr.push(array[j] + 0);
                    } else {
                        sumArr.push(array[j] + array[j + 1]);
                    }
                }
                let sliced = sumArr.slice(0);
                array = sliced;
                break;
            case "print":
                console.log(`[ ${array.join(", ")} ]`);
                break;
        }
    }

}


arrayManipulator([1, 2, 3, 4, 5],
['shift 1', 'contains 15', 'remove 3', 'shift 1', 'print']
);

// # 9
function gladiatorInventory(input) {
    let inventory = input.shift().split(" ");
    while (input.length > 0) {
        let command = input.shift().split(" ");
        switch (command.shift()) {
            case "Buy":
                buy(command.shift());
                break;
            case "Trash":
                trash(command.shift());
                break;
            case "Repair":
                repair(command.shift());
                break;
            case "Upgrade":
                let splited = command[0].split("-");
                upgrade(splited[0],splited[1]);
                break;
        }
    }

    function buy(item){
        if(!inventory.includes(item)){
            inventory.push(item);
        }
    }

    function trash(item){
        if(inventory.includes(item)){
            inventory.splice(inventory.indexOf(item),1);
        }
    }

    function repair(item){
        if(inventory.includes(item)){
            let repaired = String(inventory.splice(inventory.indexOf(item),1));
            inventory.push(repaired);
        }
    }

    function upgrade(item, itemUpgrade){
        if(inventory.includes(item)){
            let index = inventory.indexOf(item);
            inventory.splice(index + 1, 0, `${item}:${itemUpgrade}`);
        }
    }

    console.log(inventory.join(" "));
}

// # 10
function buildWall(array){
    let sorted = array.slice(0).sort((a, b) => a - b);
    let smallest = sorted[0];
    let index = array.indexOf(smallest);
    let totalConcrete = 0;
    let printArr = [];
    while(array[index] < 30){
        let dailyConcrete = 0;
        array = array.map((x) => {
            if(x < 30){
                dailyConcrete += 195;
                x = x + 1;
            }
            return x;
        });
        printArr.push(dailyConcrete);
        totalConcrete += dailyConcrete
    }
    console.log(printArr.join(", "));
    console.log(`${totalConcrete * 1900} pesos`); 
}

buildWall([17, 22, 17, 19, 17]);



