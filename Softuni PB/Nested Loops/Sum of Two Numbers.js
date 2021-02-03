function solve(input) {
    let start = Number(input.shift());
    let end = Number(input.shift());
    let num = Number(input.shift());
    let counter = 0;
    let found = false;
    let x;
    let y;

    for (x = start; x <= end; x++){
        for(y = start; y <= end; y++){
            //result = x + y;
            counter++;
            if((x + y) === num){
                found = true;
                break;
            }
        }
        if(found){
            break;
        }
    }
    if(found){
        console.log(`Combination N:${counter} (${x} + ${y} = ${num})`);
    }else{
        console.log(`${counter} combinations - neither equals ${num}`);
    }
  
    
}

solve([1,
    10,
    5]);