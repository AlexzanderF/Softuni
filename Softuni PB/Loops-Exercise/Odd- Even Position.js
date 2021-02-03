function solve(input){
    let n = Number(input.shift());
    let OddSum = 0;
    let EvenSum = 0;
    let minOdd = (Number.MAX_SAFE_INTEGER).toFixed(2);
    let maxOdd = (Number.MIN_SAFE_INTEGER).toFixed(2);
    let minEven = (Number.MAX_SAFE_INTEGER).toFixed(2);
    let maxEven = (Number.MIN_SAFE_INTEGER).toFixed(2);

    for(let i = 1; i <= n; i++){
        let num = Number(input.shift());
        if (i % 2 == 0){
            EvenSum += num;
            if (num < minEven){
                (minEven) = num;
            }
            if (num > maxEven){
                (maxEven) = num;
            }
        } else if(i % 2 != 0){
            OddSum += num;
            if (num < minOdd){
                (minOdd) = num;
            }
            if (num > maxOdd){
                (maxOdd) = num;
            }
        }
       
    }
    

    if(minOdd == Number.MAX_SAFE_INTEGER){
        minOdd = "No";
    } else{
        minOdd = minOdd.toFixed(2);
    }
    if(maxOdd == Number.MIN_SAFE_INTEGER ){
        maxOdd = "No";
    }else{
        maxOdd = maxOdd.toFixed(2);
    }
    if(minEven == Number.MAX_SAFE_INTEGER ){
        minEven = "No";
    }else{
        minEven = minEven.toFixed(2);
    }
    if(maxEven == Number.MIN_SAFE_INTEGER ){
        maxEven = "No";
    }else{
        maxEven = maxEven.toFixed(2);
    }
    
    console.log(`OddSum=${OddSum.toFixed(2)},`);
    console.log(`OddMin=${minOdd},`);
    console.log(`OddMax=${maxOdd},`);
    console.log(`EvenSum=${EvenSum.toFixed(2)},`);
    console.log(`EvenMin=${minEven},`);
    console.log(`EvenMax=${maxEven}`);
    
    

}

solve([1,1]);

//solve([6,
//    2,
//    3,
//    5,
//    4,
//    2,
//   1]);



