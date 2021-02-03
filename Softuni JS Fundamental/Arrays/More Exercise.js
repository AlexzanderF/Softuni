// # 1
function printElement(array) {
    let n = Number(array.pop());
    let print = "";
    for (let i = 0; i < array.length; i += n) {
        print += `${array[i]} `;
    }
    console.log(print);
}

// # 2
function addAndRemove(input) {
    let arr = [];
    let num = 0;
    for (let command of input) {
        if (command === "add") {
            num++;
            arr.push(num);
        } else {
            num++;
            arr.pop(num);
        }
    }
    if (arr.length > 0) {
        console.log(arr.join(" "));
    } else {
        console.log("Empty");
    }
}

// # 3
function rotateArray(array) {
    let rotations = Number(array.pop());
    for (let i = 1; i <= rotations; i++) {
        let toMove = array.pop();
        array.unshift(toMove);
    }
    console.log(array.join(" "));
}

// # 4
function nonDecreasingSubsequence(array) {
    let subseq = [];
    let biggest = 0;
    for (let i = 0; i < array.length; i++) {
        let curr = array[i];
        if (curr >= biggest) {
            biggest = curr;
            subseq.push(curr);
        } else {
            continue;
        }
    }
    console.log(subseq.join(" "));
}

// # 5
function tseamAccount(input) {
    let account = input.shift().split(" ");
    for (let line of input) {
        if (line === "Play!") {
            break;
        }
        line = line.split(' ');
        if (line[0] === "Install") {
            let game = line[1];
            if (!account.includes(game)) {
                account.push(game);
            }
        } else if (line[0] === "Uninstall") {
            let game = line[1];
            if (account.includes(game)) {
                account.splice(account.indexOf(game), 1);
            }
        } else if (line[0] === "Update") {
            let game = line[1];
            if (account.includes(game)) {
                let index = account.indexOf(game);
                account.splice(index, 1);
                account.push(game);
            }
        } else {
            let game = line[1].split("-")[0];
            let expansion = line[1].split("-")[1];
            if (account.includes(game)) {
                let insert = `${game}:${expansion}`;
                account.splice(account.indexOf(game) + 1, 0, insert);
            }
        }
    }
    console.log(account.join(" "));
}

// # 6
function magicMatrices(matrix) {
    let magic = 0;
    for (let num of matrix[0]) {
        magic += num;
    }
    let isMagic = false;
    for (let row = 0; row < matrix.length; row++) {
        let toCheck = 0;
        for (let num of matrix[row]) {
            toCheck += num;
        }
        if (toCheck === magic) {
            isMagic = true;
        } else {
            isMagic = false;
            break;
        }
    }
    if (isMagic) {
        for (let col = 0; col < matrix[0].length; col++) {
            let toCheck = 0;
            for (let row = 0; row < matrix.length; row++) {
                toCheck += matrix[row][col];
            }
            if (toCheck === magic) {
                isMagic = true;
            } else {
                isMagic = false;
                break;
            }
        }

    }
    console.log(isMagic);
}

// # 7
function spiralMatrix(x, y) {
    let maxNumber = x * y;   // center of the matrix
    let matrix = [];
    for (let i = 0; i < x; i++) {
        let toPush = [];
        toPush.length = y;
        matrix.push(toPush);
    }
    let num = 0;
    for (let s = 0; s < Math.floor(x / 2); s++) {        // circles / spiral movements !!!
        for (let fr = 0 + s; fr < matrix[s].length - s; fr++) { // current first row
            num++;
            matrix[s][fr] = num; // s is the row in the matrix
        }
        for (let row = 1 + s; row < matrix.length - s; row++) {
            num++;
            matrix[row][y - 1 - s] = num
        }
        for (let lr = y - 2 - s; lr >= 0 + s; lr--) {     //lr - current last row
            num++;
            matrix[x - 1 - s][lr] = num;
        }
        for (let row = y - 2 - s; row >= 1 + s; row--) {
            num++;
            matrix[row][s] = num;
        }
    }
    if (x % 2 !== 0 && y % 2 !== 0) {
        matrix[Math.floor(x / 2)][Math.floor(y / 2)] = num + 1;
    }
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}

// # 4
function diagonalAttack(matrix) {
    for (let row in matrix) {      // row - index      
        matrix[row] = matrix[row].split(" ").map(Number);
    }
    let leftDiagSum = 0;
    let rightDiagSum = 0;
    for (let row = 0; row < matrix.length; row++) {
        leftDiagSum += matrix[row][row];
        rightDiagSum += matrix[row][matrix.length - 1 - row];
        matrix[row][row] = matrix[row][row].toString();
        matrix[row][matrix.length - 1 - row] = matrix[row][matrix.length - 1 - row].toString();
    }
    if (leftDiagSum === rightDiagSum) {
        for (let row in matrix) {      // row - index      
            matrix[row].forEach((element, i) => {
                if (typeof (element) === 'number') {
                    matrix[row][i] = leftDiagSum;
                }
            });;
        }
        for (let row of matrix) {
            console.log(row.join(" "));
        }
    } else {
        for (let row of matrix) {
            console.log(row.join(" "));
        }
    }
}

// # 9
function orbit(input) {
    let width = input.shift();
    let height = input.shift();
    let x = input.shift();
    let y = input.shift();
    let matrix = [];
    for (let i = 0; i < height; i++) {
        let toPush = [];
        toPush.length = width;
        matrix.push(toPush);
    }
    let num = 1;
    matrix[x][y] = num;    // center of orbit
    let moves;
    if (y > Math.floor(width / 2)) {
        moves = Math.max(0 + x, 0 + y)
    } else {
        moves = Math.max(height - 1 - x, width - 1 - y);
    }
    for (let cir = 1; cir <= moves; cir++) {
        num++;
        if (x + cir <= height - 1) {
            for (let down = Math.max(0, y - cir); down <= Math.min(width - 1, y + cir); down++) {
                matrix[x + cir][down] = num;
            }
        }
        if (y + cir <= width - 1) {
            for (let right = Math.min(height - 1, x + cir); right >= Math.max(0, x - cir); right--) {
                matrix[right][y + cir] = num;
            }
        }
        if (x - cir >= 0) {
            for (let up = Math.min(width - 1, y + cir); up >= Math.max(0, y - cir); up--) {
                matrix[x - cir][up] = num;
            }
        }
        if (y - cir >= 0) {
            for (let left = Math.max(0, x - cir); left <= Math.min(height - 1, x + cir); left++) {
                matrix[left][y - cir] = num;
            }
        }
    }
    for (let row of matrix) {
        console.log(row.join(" "));
    }
}

orbit([5, 5, 2, 3]);