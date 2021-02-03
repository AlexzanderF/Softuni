// # 7
function magicMatrices(matrix) {
    let magic = true;
    let sum = matrix[0][0] + matrix[0][1] + matrix[0][2];
    for (row = 0; row < matrix.length; row++) {
        let rowSum = 0;
        let colSum = matrix[0][row] + matrix[1][row] + matrix[2][row];
        matrix[row].forEach(x => rowSum += x);
        if (rowSum !== sum || colSum !== sum) {
            magic = false;
            break;
        }
    }
    console.log(magic);
}

magicMatrices([[1, 0, 0],
    [0, 0, 1],
    [0, 1, 0]]   
);

// # 8
function ticTacToe(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];
    let freeSpaces = 9;
    let winner = [false, ''];
    let tracker = 0;

    for (let i = 0; i < input.length; i++) {
        let [r, col] = input[i].split(" ").map(Number);
        let player;
        if (tracker % 2 === 0) {
            player = 'X';
        } else if (tracker % 2 !== 0) {
            player = 'O';
        }

        if (dashboard[r][col] === false) {
            dashboard[r][col] = player;
            tracker++;
            if (dashboard[r].join("") === [player, player, player].join("")) {
                winner[0] = true;
                winner[1] = player;
                break;
            } else if (dashboard[0][col] + dashboard[1][col] + dashboard[2][col] === player.repeat(3)) {
                winner[0] = true;
                winner[1] = player;
                break;
            } else if (dashboard[0][0] + dashboard[1][1] + dashboard[2][2] === player.repeat(3) || dashboard[0][2] + dashboard[1][1] + dashboard[2][0] === player.repeat(3)) {
                winner[0] = true;
                winner[1] = player;
                break;
            }
            freeSpaces--;
        } else {
            console.log("This place is already taken. Please choose another!");
            continue;
        }

        if (freeSpaces === 0 && winner[0] === false) {
            console.log("The game ended! Nobody wins :(");
            break;
        }
    }
    if (winner[0] === true) {
        console.log(`Player ${winner[1]} wins!`);
    }
    for (let row of dashboard) {
        console.log(row.join('\t'));
    }
}
