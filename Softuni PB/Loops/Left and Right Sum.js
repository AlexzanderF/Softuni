function solve(input){
    let n = Number(input.shift());
    let leftSum = 0;
    let rightSum = 0;
    for(i = 1; i <= n*2;i++){
        let num = Number(input.shift());
        if (i <= n){
            leftSum += num;
        }
        if (i > n){
            rightSum += num;
        }
    }
    if (leftSum == rightSum){
        console.log(`Yes, sum = ${leftSum}`);
    } else {
        console.log(`No, diff = ${Math.abs(leftSum - rightSum)}`);
    }

}
solve([2,
    90,
    9,
    50,
    50]);