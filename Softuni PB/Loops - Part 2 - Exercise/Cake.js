function solve(input){
    let w = Number(input.shift());
    let l = Number(input.shift());
    let cakeSize = w * l;
    let pieces = 0;

    while (cakeSize > 0){
        let eaten = input.shift();
        if (eaten === "STOP"){
            console.log(`${cakeSize} pieces are left.`);
            break;            
        }
        eaten = Number(eaten);

        cakeSize -= eaten;


    }

    if (cakeSize <= 0 ){
        console.log(`No more cake left! You need ${cakeSize * -1} pieces more.`);
    }

}

solve([
    '10', '10',
    '20', '20',
    '20', '20',
    '21'
  ]
  );