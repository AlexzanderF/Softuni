// # 1
function bonusScoringSystem(input) {
    input = input.map(Number);
    let studentsCount = input.shift();
    let lecturesCount = input.shift();
    let courseBonus = input.shift();
    let highestBonus = 0;
    let attendedLectures = 0;

    for (let i = 0; i < input.length; i++) {
        let attendances = Number(input[i]);
        let totalBonus = Math.ceil((attendances / lecturesCount) * (5 + courseBonus));

        if (totalBonus > highestBonus) {
            highestBonus = totalBonus;
            attendedLectures = attendances;
        }

    }

    console.log(`Max Bonus: ${highestBonus}.`);
    console.log(`The student has attended ${attendedLectures} lectures.`);

}

// # 2
function muOnline(input) {
    let health = 100;
    let bitcoins = 0;
    let isDead = false;
    let room = 0;
    input = input.split("|")

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ")[0];
        let number = Number(input[i].split(" ")[1]);
        room++;
        if (command === "potion") {
            if (number + health >= 100) {
                console.log(`You healed for ${100 - health} hp.`);
            } else {
                console.log(`You healed for ${number} hp.`);
            }
            health = Math.min(health + number, 100);
            console.log(`Current health: ${health} hp.`);
        } else if (command === "chest") {
            bitcoins += number;
            console.log(`You found ${number} bitcoins.`);
        } else {
            if (health - number > 0) {
                health -= number;
                console.log(`You slayed ${command}.`);
            } else {
                isDead = true;
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${room}`);
                break;
            }
        }

    }

    if (isDead === false) {
        console.log(`You've made it!`);
        console.log(`Bitcoins: ${bitcoins}`);
        console.log(`Health: ${health}`);
    }
}

// # 3
function inventory(input) {
    let inventory = input.shift().split(", ");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" - ")[0];
        if(command === "Craft!"){
            break;
        }
        let item = input[i].split(" - ")[1];


        switch (command) {
            case "Collect":
                if (!inventory.includes(item)) {
                    inventory.push(item);
                }
                break;
            case "Drop":
                if (inventory.includes(item)) {
                    let index = inventory.indexOf(item);
                    inventory.splice(index, 1);
                }
                break;
            case "Combine Items":
                let oldItem = item.split(":")[0];
                let newItem = item.split(":")[1];
                if (inventory.includes(oldItem)) {
                    let index = inventory.indexOf(oldItem);
                    inventory.splice(index + 1, 0, newItem);
                }
                break;
            case "Renew":
                if (inventory.includes(item)) {
                    inventory = inventory.filter(x => x !== item);
                    inventory.push(item);
                }
                break;

        }
    }

    console.log(inventory.join(", "));

}

inventory([
    'Iron, Sword',
    'Drop - Bronze',
    'Combine Items - Sword:Bow',
    'Renew - Iron',
    'Craft!'
  ]
  );