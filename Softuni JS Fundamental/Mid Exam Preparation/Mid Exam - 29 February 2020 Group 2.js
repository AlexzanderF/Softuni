// # 1
function nationalCourt(input) {
    let firstEmployeeWorkRate = Number(input.shift());
    let secEmployeeWorkRate = Number(input.shift());
    let thirdEmployeeWorkRate = Number(input.shift());
    let toAnswer = Number(input.shift());
    let hours = 0;
    while (toAnswer > 0) {
        hours++;
        if (hours % 4 === 0) {
            continue;
        }
        let totalAnsweredForHour = firstEmployeeWorkRate + secEmployeeWorkRate + thirdEmployeeWorkRate;
        toAnswer -= totalAnsweredForHour;
    }

    console.log(`Time needed: ${hours}h.`);
}

// # 2
function shoppingList(input) {
    let shoppingList = input.shift().split("!");
    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ")[0];

        if (command === "Urgent") {
            let item = input[i].split(" ")[1];
            if (!shoppingList.includes(item)) {
                shoppingList.unshift(item);
            }
        } else if (command === "Unnecessary") {
            let item = input[i].split(" ")[1];
            if (shoppingList.includes(item)) {
                let index = shoppingList.indexOf(item);
                shoppingList.splice(index, 1);
            }
        } else if (command === "Correct") {
            let oldItem = input[i].split(" ")[1];
            if (shoppingList.includes(oldItem)) {
                let newItem = input[i].split(" ")[2];
                let index = shoppingList.indexOf(oldItem);
                shoppingList.splice(index, 1, newItem);
            }
        } else {
            let item = input[i].split(" ")[1];
            let index = shoppingList.indexOf(item);
            if (shoppingList.includes(item)) {
                let rearranged = shoppingList.splice(index, 1);
                shoppingList.push(rearranged);
            }
        }
    }
    console.log(shoppingList.join(", "));

}

// # 3
function heartDelivery(input) {
    let neighbourhood = input.shift().split("@");
    neighbourhood = neighbourhood.map(Number);
    let startingNeighbourhood = neighbourhood.slice(0);
    let cupidPosition = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === "Love!") {
            break;
        }
        let jumpLength = Number(input[i].split(" ")[1]);
        if (cupidPosition + jumpLength > neighbourhood.length - 1) {
            jumpLength = jumpLength - (neighbourhood.length - 1 - cupidPosition);
            jumpLength = 0;
            cupidPosition = 0;
        }

        cupidPosition += jumpLength;
        if (neighbourhood[cupidPosition] === 0) {
            console.log(`Place ${cupidPosition} already had Valentine's day.`);
            continue;
        }
        neighbourhood[cupidPosition] -= 2;
        if (neighbourhood[cupidPosition] === 0) {
            console.log(`Place ${cupidPosition} has Valentine's day.`);
        }

    }

    let missionComplete = false;
    for (let i = 0; i < startingNeighbourhood.length; i++) {
        if (neighbourhood[i] === 0) {
            missionComplete = true;
        } else {
            missionComplete = false;
            break;
        }
    }

    console.log(`Cupid's last position was ${cupidPosition}.`);
    if (missionComplete) {
        console.log(`Mission was successful.`);
    } else {
        let failedCount = 0;
        for (let i = 0; i < neighbourhood.length; i++) {
            if (neighbourhood[i] !== 0) {
                failedCount++;
            }
        }
        console.log(`Cupid has failed ${failedCount} places.`);
    }
}

heartDelivery([
    '2@4@2', 'Jump 2',
    'Jump 2', 'Jump 8',
    'Jump 3', 'Jump 1',
    'Love!'
]);