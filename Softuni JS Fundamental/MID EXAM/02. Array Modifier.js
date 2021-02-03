function solve(input) {
    let array = input.shift().split(" ").map(Number);

    for (let i = 0; i < input.length; i++) {
        let command = input[i];
        if (command === "end") {
            break;
        }
        command = command.split(" ");
        let action = command[0];

        if (action === "swap") {
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);

            let moved1 = array.slice(index1, index1 + 1);
            let moved2 = array.slice(index2, index2 + 1);

            array.splice(index1, 1, moved2[0]);
            array.splice(index2, 1, moved1[0]);

        } else if (action === "multiply") {
            let index1 = Number(command[1]);
            let index2 = Number(command[2]);
            let multiplicator = array[index2];

            array[index1] = array[index1] * multiplicator;
        } else {
            array = array.map(x => x - 1);
        }
    }

    console.log(array.join(", "));

}

solve([
    '1 2 3 4',
    'swap 0 1',
    'swap 1 2',
    'swap 2 3',
    'multiply 1 2',
    'decrease',
    'end'
]
);