// # 1
function experienceGaining(input) {
    input = input.map(Number);
    let neededExp = input.shift();
    let battlesCount = input.shift();
    let battles = 0;
    let managed = false;

    for (let i = 1; i <= battlesCount; i++) {
        battles++;
        if (i % 3 === 0) {
            neededExp -= input[i - 1] + (input[i - 1] * 0.15);
        } else if (i % 5 === 0) {
            neededExp -= input[i - 1] - (input[i - 1] * 0.10);
        } else {
            neededExp -= input[i - 1];
        }

        if (neededExp <= 0) {
            managed = true;
            break;
        }

    }
    if (managed) {
        console.log(`Player successfully collected his needed experience for ${battles} battles.`);
    } else {
        console.log(`Player was not able to collect the needed experience, ${neededExp.toFixed(2)} more needed.`);
    }
}

// # 2
function friendlistMaintenance(input) {
    let friendList = input.shift().split(", ");
    let blacklistedCount = 0;
    let lostCount = 0;

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ")[0];
        if (command === "Blacklist") {
            let name = input[i].split(" ")[1];
            if (friendList.includes(name)) {
                friendList.splice(friendList.indexOf(name), 1, "Blacklisted");
                blacklistedCount++;
                console.log(`${name} was blacklisted.`);
            } else {
                console.log(`${name} was not found.`);
            }
        } else if (command === "Error") {
            let index = Number(input[i].split(" ")[1]);
            if (friendList[index] !== "Blacklisted" && friendList[index] !== "Lost") {
                let name = friendList[index];
                friendList.splice(index, 1, "Lost");
                lostCount++;
                console.log(`${name} was lost due to an error.`);
            }
        } else if (command === "Change") {
            let index = Number(input[i].split(" ")[1]);
            let newName = input[i].split(" ")[2];
            let oldName = friendList[index];
            if (index >= 0 && index < friendList.length) {
                friendList.splice(index, 1, newName);
                console.log(`${oldName} changed his username to ${newName}.`);
            }
        } else {
            break;
        }

    }

    console.log(`Blacklisted names: ${blacklistedCount}`);
    console.log(`Lost names: ${lostCount}`);
    console.log(friendList.join(" "));

}

// # 3
function tanksCollector(input) {
    let vehicles = input.shift().split(", ");
    let commands = Number(input.shift());

    for (let i = 0; i < input.length; i++) {
        input[i] = input[i].split(", ");
        let command = input[i][0];
        if (command === "Add") {
            let tankName = input[i][1];
            if (vehicles.includes(tankName)) {
                console.log("Tank is already bought");
            } else {
                console.log("Tank successfully bought");
                vehicles.push(tankName);
            }
        } else if (command === "Remove") {
            let tankName = input[i][1];
            if (vehicles.includes(tankName)) {
                console.log("Tank successfully sold");
                vehicles.splice(vehicles.indexOf(tankName), 1);
            } else {
                console.log("Tank not found");
            }
        } else if (command === "Remove At") {
            let index = input[i][1];
            if (index >= 0 && index < vehicles.length) {
                vehicles.splice(index, 1);
                console.log("Tank successfully sold");
            } else {
                console.log("Index out of range");
            }
        } else {
            let index = input[i][1];
            let tankName = input[i][2];
            if (vehicles.includes(tankName) && index >= 0 && index < vehicles.length) {
                console.log("Tank is already bought");
            } else if (index >= 0 && index < vehicles.length) {
                vehicles.splice(index, 0, tankName);
                console.log("Tank successfully bought");
            } else {
                console.log("Index out of range");
            }
        }
    }
    console.log(vehicles.join(", "));
}

