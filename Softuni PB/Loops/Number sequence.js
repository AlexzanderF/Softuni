function solve(input){
    let n = Number(input.shift());
    let minNum = Number.MAX_SAFE_INTEGER;
    let maxNum = Number.MIN_SAFE_INTEGER;
    for (i = 1; i <= n; i++) {
        let num = Number(input.shift());
        if (num < minNum){
            minNum = num;
        }
        if (num > maxNum){
            maxNum = num;
        }

    }
    console.log(`Max number: ${maxNum}`);
    console.log(`Min number: ${minNum}`);
}
solve([5,
    10,
    20,
    304,
    0,
    50]);

    
