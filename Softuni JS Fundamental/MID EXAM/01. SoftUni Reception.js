function solve(input) {
    input = input.map(Number);
    let firstEmployeeRate = input.shift();
    let secEmployeeRate = input.shift();
    let thirdEmployeeRate = input.shift();

    let allStudents = input.shift();
    let hours = 0;

    while (allStudents > 0) {
        hours++;
        if (hours % 4 === 0) {
            continue;
        }
        allStudents -= firstEmployeeRate + secEmployeeRate + thirdEmployeeRate;

    }

    console.log(`Time needed: ${hours}h.`);
}

solve(['3','2','5','40']);