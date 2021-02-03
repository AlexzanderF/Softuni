function solve(input){
    let n = Number(input.shift());
    let oddSum = 0;
    let evenSum = 0;
    for(i = 1; i <= n;i++){        // goes through all numbers
        let num = Number(input.shift());
        if (i % 2 == 0){    //tests if it is Even
            evenSum += num;
        }
        if (i % 2 > 0){     //tests if it is Odd
            oddSum  += num; 
        }
        
    }
    if (evenSum == oddSum){
        console.log(`Yes`);
        console.log(`Sum = ${evenSum}`);
    } else {
        console.log(`No`);
        console.log(`Diff = ${Math.abs(evenSum - oddSum)}`);
    }

}
solve([4,
    10,
    50,
    60,
    20]);