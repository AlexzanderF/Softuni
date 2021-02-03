function solve(input){
    let n = Number(input.shift());
    let sum = 0;
    for (i = 1; i <= n; i++){
        let num = Number(input.shift());
        sum += num;
    }
    console.log(sum);

}

solve([3,
    10,
    20,
40]);