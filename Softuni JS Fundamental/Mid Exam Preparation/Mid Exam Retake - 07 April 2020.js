// # 1
function counterStrike(input) {
    let energy = Number(input.shift());
    let battles = 0;
    let ended = false;

    for (let i = 0; i < input.length; i++) {
        let distance = input[i];
        if (distance === "End of battle") {
            ended = true;
            break;
        }
        distance = Number(distance);
        if (energy - distance >= 0) {
            energy -= distance;
            battles++
        } else {
            console.log(`Not enough energy! Game ends with ${battles} won battles and ${energy} energy`);
            break;
        }
        if (battles % 3 === 0) {
            energy += battles;
        }
    }

    if (ended) {
        console.log(`Won battles: ${battles}. Energy left: ${energy}`);
    }

}

// # 2
function shootForTheWin(input) {
    let targets = input.shift().split(" ").map(Number);
    let count = 0;

    let command = input.shift();
    while (command !== "End") {
        let index = Number(command);
        if (targets[index] !== -1 && index >= 0 && index < targets.length) {         //shooting
            let target = targets[index];
            targets[index] = -1;
            count++;
            targets.forEach((x, i) => {             // x - element and his value, i - index of the element
                if (x !== -1 && x > target) {
                    targets[i] = x - target;
                } else if (x !== - 1 && x <= target) {
                    targets[i] = x + target;
                }
            });
        }
        command = input.shift();
    }

    console.log(`Shot targets: ${count} -> ${targets.join(" ")}`);


}

// # 3
function movingTarget(input) {
    let targets = input.shift().split(" ").map(Number);

    let command = input.shift();
    while (command !== "End") {
        command = command.split(" ");
        let action = command[0];

        if (action === "Shoot") {
            let index = Number(command[1]);
            let power = Number(command[2]);
            if (index >= 0 && index < targets.length) {
                targets[index] = targets[index] - power;
                if (targets[index] <= 0) {
                    targets.splice(index, 1);
                }
            }
        } else if (action === "Add") {
            let index = Number(command[1]);
            let value = Number(command[2]);
            if (index >= 0 && index < targets.length) {
                targets.splice(index, 0, value);
            } else {
                console.log("Invalid placement!");
            }
        } else {
            let index = Number(command[1]);
            let radius = Number(command[2]);
            if (index >= 0 && index < targets.length) {
                let isValidRadius = false;
                if (index + radius < targets.length && index - radius >= 0) {
                    isValidRadius = true;
                } else {
                    console.log("Strike missed!");
                }
                if (isValidRadius) {
                    targets.splice(index - radius, 2 * radius + 1);
                }
            } else {
                console.log("Strike missed!");
            }
        }

        command = input.shift();
    }


    console.log(targets.join("|"));

}

movingTarget([
    '47 55 85 78 99 20',
    'Shoot 1 55',
    'Shoot 8 15',
    'Strike 2 3',
    'Add 0 22',
    'Add 2 40',
    'Add 2 50',
    'End'
]
);