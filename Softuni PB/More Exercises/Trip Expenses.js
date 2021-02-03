function solve(input) {
    let n = Number(input.shift());
    let budget = 0;
    let remainings = 0;

    for (let i = 0; i < n; i++){    // new days
        let price = input.shift();
        budget = 60 + remainings;
        remainings = 0;
        let productCounter = 0;
        while (price !== "Day over"){   // 1 day
            price = Number(price);
            if (price > budget){
                price = input.shift();
                continue;
            }
            productCounter++;
            budget -= price;
            if (budget <= 0){
                break;
            }

            price = input.shift();
        }
        if (budget <= 0){
            console.log(`Daily limit exceeded! You've bought ${productCounter} products.`);

        } else if(price === "Day over"){
            remainings = budget;
            console.log(`Money left from today: ${budget.toFixed(2)}. You've bought ${productCounter} products.`);
        }

    }

    
}

solve([ '2', 'Day over', '130', '100', '40', '20' ]
  );