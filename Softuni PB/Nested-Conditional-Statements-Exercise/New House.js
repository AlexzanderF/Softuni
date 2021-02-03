function solve(input){
    let flower = input.shift();
    let amount = Number(input.shift());
    let budget = Number(input.shift());

    let bill = 0;

    switch (flower){
        case "Roses":
            bill = amount * 5;
            if (amount > 80){
                bill = bill * 0.90;
            }
        break;
        case "Dahlias":
            bill = amount * 3.80;
            if(amount > 90){
                bill = bill * 0.85;
            }
        break;
        case "Tulips":
            bill = amount * 2.80;
            if(amount > 80){
                bill = bill * 0.85;
            }
        break;
        case "Narcissus":
            bill = amount * 3.00;
            if(amount < 120){
                bill = bill * 1.15;
            }
        break;
        case "Gladiolus":
            bill = amount * 2.50;
            if(amount < 80){
                bill = bill * 1.20;
            }
        break;
    }

    if (budget >= bill){
        console.log(`Hey, you have a great garden with ${amount} ${flower} and ${(Math.abs(budget-bill).toFixed(2))} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(Math.abs(budget-bill).toFixed(2))} leva more.`);
    }

    
}


solve(["Narcissus",
    119,
    360            ]);

