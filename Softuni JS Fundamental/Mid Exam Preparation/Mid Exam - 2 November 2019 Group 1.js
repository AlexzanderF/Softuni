// # 1
function biscuitsFactory(input) {
    let dailyWorkerCapacity = input.shift();
    let workers = input.shift();
    let competionProduction = input.shift();

    let dailyProduction = Math.floor(dailyWorkerCapacity * workers);
    let monthlyProduction = (dailyProduction * 20) + (Math.floor(0.75 * dailyProduction) * 10);

    console.log(`You have produced ${monthlyProduction} biscuits for the past month.`);

    if (monthlyProduction > competionProduction) {
        let differencePercentage = (monthlyProduction - competionProduction) / competionProduction * 100;
        console.log(`You produce ${differencePercentage.toFixed(2)} percent more biscuits.`);
    } else {
        let differencePercentage = (competionProduction - monthlyProduction) / competionProduction * 100;
        console.log(`You produce ${differencePercentage.toFixed(2)} percent less biscuits.`);
    }

}

// # 2 
function weaponsmith(input) {
    let array = input.shift().split("|");

    for (let i = 0; i < input.length; i++) {
        let command = input[i].split(" ")[0];
        if (command === "Done") {
            break;
        }

        if (command === "Move") {
            let direction = input[i].split(" ")[1];
            let number = Number(input[i].split(" ")[2]);
            if (number > array.length - 1) {
                continue;
            }
            if (direction === "Right") {
                if (number + 1 > array.length - 1) {
                    continue;
                }
                let moved = array.splice(number, 1);
                array.splice(number + 1, 0, moved[0]);
            } else {
                if (number - 1 < 0) {
                    continue;
                }
                let moved = array.splice(number, 1);
                array.splice(number - 1, 0, moved[0]);
            }
        } else if (command === "Check") {
            let type = input[i].split(" ")[1];
            if (type === "Odd") {
                let oddEl = [];
                for (let i = 0; i < array.length; i++) {
                    if (i % 2 !== 0) {
                        oddEl.push(array[i]);
                    }
                }
                console.log(oddEl.join(" "));
            } else {
                let evenEl = [];
                for (let i = 0; i < array.length; i++) {
                    if (i % 2 === 0) {
                        evenEl.push(array[i]);
                    }
                }
                console.log(evenEl.join(" "));

            }
        }
    }

    console.log(`You crafted ${array.join("")}!`);

}

// # 3
function wizardPoker(input) {
    let availableCards = input.shift().split(":");
    let newDeck = [];

    for (let i = 0; i < input.length - 1; i++) {
        let command = input[i].split(" ")[0];

        if (command === "Ready") {
            break;
        }

        if (command === "Add") {
            let card = input[i].split(" ")[1];
            if (availableCards.includes(card)) {
                newDeck.push(card);
            } else {
                console.log("Card not found.");
            }
        } else if (command === "Insert") {
            let card = input[i].split(" ")[1];
            let index = input[i].split(" ")[2];

            if (availableCards.includes(card) && (index >= 0 && index < newDeck.length)) {
                newDeck.splice(index, 0, card);
            } else {
                console.log("Error!");
            }
        } else if (command === "Remove") {
            let card = input[i].split(" ")[1];
            if (newDeck.includes(card)) {
                newDeck = newDeck.filter(x => x !== card);
            } else {
                console.log("Card not found.");
            }
        } else if (command === "Swap") {
            let card1 = input[i].split(" ")[1];
            let card2 = input[i].split(" ")[2];
            let indexCard1 = newDeck.indexOf(card1);
            let indexCard2 = newDeck.indexOf(card2);

            newDeck.splice(indexCard1, 1, card2);
            newDeck.splice(indexCard2, 1, card1);
        } else {
            let reversed = [];
            newDeck.forEach(x => {
                reversed.unshift(x);
            });
            newDeck = reversed.slice(0);
        }
    }

    console.log(newDeck.join(" "));
}

