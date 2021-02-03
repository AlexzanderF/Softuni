// # 1
function sumFirstLast(arr) {
    console.log(Number(arr[0]) + Number(arr.pop()));

}

// # 2
function evenPosition(arr) {
    let result = '';
    for (let i = 0; i < arr.length; i += 2) {
        result += ` ${arr[i]}`;
    }
    console.log(result);
}

// # 3
function negPosNumbers(arr) {
    let result = [];
    for (let num of arr) {
        if (num >= 0) {
            result.push(num);
        } else {
            result.unshift(num);
        }
    }
    result.forEach((x) => console.log(x));
}

// # 4
function lastKNumbers(n, k) {
    let arr = [1];
    for (let i = 1; i < n; i++) {
        let lastK = arr.slice(Math.max(0, i - k), i);
        let sum = 0;
        lastK.forEach(x => {
            sum += x;
        });
        arr[i] = sum;
    }
    console.log(arr.join(" "));
}

// # 5
function processOddNum(arr) {
    let result = [];
    for (let i = 1; i < arr.length; i += 2) {
        result.unshift(arr[i] * 2);
    }
    console.log(result.join(" "));
}

// # 6
function smallestTwo(arr) {
    arr = arr.sort((a, b) => a - b);
    console.log(arr[0], arr[1]);

}

// # 7 
function biggestElement(matrix) {
    let biggest = Number.MIN_SAFE_INTEGER;
    for (let row of matrix) {
        row = row.sort((a, b) => b - a);
        if (row[0] > biggest) {
            biggest = row[0];
        }
    }
    console.log(biggest);
}

// # 8
function diagonalSums(matrix) {
    let mainDiag = 0;
    let secDiag = 0;
    for (let row = 0; row < matrix.length; row++) {
        mainDiag += matrix[row][row];
        secDiag += matrix[row][matrix.length - row - 1];
    }
    console.log(mainDiag, secDiag);
}

// # 9
function equalNeighbors(matrix) {
    let pairs = 0;
    for (let row = 0; row < matrix.length; row++) {
        for (let i = 0; i < matrix[row].length; i++) {
            if (matrix[row][i] === matrix[row][i + 1]) {
                pairs++;
            }
            if (row + 1 !== matrix.length && matrix[row][i] === matrix[row + 1][i]) {
                pairs++;
            }
        }
    }
    console.log(pairs);

}
