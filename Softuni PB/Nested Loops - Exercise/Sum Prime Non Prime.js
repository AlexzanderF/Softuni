function solve(input){
    let n = input.shift();
    let primeSum = 0;
    let compositeSum = 0;

    while (n != "stop"){
        n = Number(n);
        let isPrime = true;
        if (n < 0){
            console.log("Number is negative.");
            n = input.shift()
            continue;
        }
        //if (n === 1){
        //    isPrime = true;
        //    //primeSum += 1;
        //}
        for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++){
            if(n % i === 0){
                isPrime = false;
                
            } 
        }    
        if (isPrime === true){
            primeSum += n;
        } else{
            compositeSum += n;
        }
        n = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${compositeSum}`);

}

solve([
    '3',    '9',
    '0',    '7',
    '19',   '4',
    'stop', ''
  ]
  );