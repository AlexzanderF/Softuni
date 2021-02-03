function solve(input){
    let n = Number(input.shift());
    let sum = 0;
    let maxNum = Number.MIN_SAFE_INTEGER;

    for (i = 1; i <= n; i++){
        let num = Number(input.shift());
        sum += num;

        if (num > maxNum){
            maxNum = num;
        }

    }
    if(maxNum == (sum - maxNum)){
        console.log(`Yes`);
        console.log(`Sum = ${maxNum}`);

    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(maxNum - (sum - maxNum))}`);
    }
    
}

solve([3,
    1,
    1,
    10
    ]);