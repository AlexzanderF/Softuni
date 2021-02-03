function solve(input){
    let vacation = Number(input.shift());
    let money = Number(input.shift());
    let action = input.shift();
    let transaction = Number(input.shift());
    let days = 0;
    let spendCounter = 0;


    while(money < vacation){
        if(action == "spend"){
            money = money - transaction;
            spendCounter++;
            if(money < 0){   //Math.max(0,(money - transaction));
                money = 0;
            }
        }
        if (action == "save"){
            money = money + transaction;
            spendCounter = 0;
        }
        days++;
        if(spendCounter >= 5){
            console.log(`You can't save the money.`);
            console.log(days);
            break;
        }
        
        action = input.shift();
        transaction = Number(input.shift());    

    }

    if (money >= vacation){
        console.log(`You saved the money for ${days} days.`);
    }

}

solve([ '2000', '1000', 'spend', '1200', 'save', '2000' ]);