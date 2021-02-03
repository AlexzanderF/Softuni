function solve(input){
    let n = Number(input.shift());
    let income = Number(input.shift());
    let money = 0;
    let counter = 0;
    while(n > counter){
        counter++;
        if (income <= 0){
            console.log(`Invalid operation!`);
            break;
        }
        console.log(`Increase: ${income.toFixed(2)}`);
        money += income;
        income = Number(input.shift());
        
    }
    console.log(`Total: ${money.toFixed(2)}`);
}

solve([ '3', '5.51', '69.42', '100' ]);