function solve(input){
    let budget = Number(input.shift());
    let season = input.shift();
    let people = input.shift();

    let price = 0;

    if (season == "Spring"){
        price = 3000;
    } else if ((season == "Summer") || (season == "Autumn")){
        price = 4200;
    } else if (season == "Winter"){
        price = 2600;
    }

    if (people <= 6){
        price = price * 0.90;
    } else if (people > 6 && people <=11){
        price = price * 0.85;
    } else if (people >= 12){
        price = price * 0.75;
    }

    // bonus discount
    if (season == "Autumn"){
        price = price;
    } else if ((people % 2) == 0){
        price = price * 0.95;
    }

    if (budget >= price){
        console.log(`Yes! You have ${(budget-price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(budget-price).toFixed(2)} leva.`);
    }
    
}

solve([2000,
    "Winter",
    13
    ]);