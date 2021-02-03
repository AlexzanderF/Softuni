function solve(input) {
    let budget = Number(input.shift());
    let blanket = Number(input.shift());
    let discount = Number(input.shift());

    let umbrella = 2/3 * blanket;
    let sandals = 0.75 * umbrella;
    let bag = 1/3 * (blanket + sandals);
    let sum = blanket + umbrella + bag + sandals;
    sum = sum - (discount / 100) * sum;
    if(budget >= sum){
        console.log(`Annie's sum is ${sum.toFixed(2)} lv. She has ${(budget - sum).toFixed(2)} lv. left.`);
    } else {
        console.log(`Annie's sum is ${sum.toFixed(2)} lv. She needs ${(sum - budget).toFixed(2)} lv. more.`);
    }
    


}

solve([40,
    15,
    5
    ]);