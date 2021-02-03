function solve(input){
    let money = Number(input.shift());

    let coins = 0;

        if ((Math.floor(money / 2)) >= 1 ){  // 2 leva
            coins += Math.floor(money / 2);
            money = Number((money - Math.floor(money / 2) * 2).toFixed(2));
        }
        if ((Math.floor(money / 1)) >= 1 ){  // 1 lev
            coins += Math.floor(money / 1);
            money = Number((money - Math.floor(money / 1)).toFixed(2));
        }
        if ((Math.floor(money / 0.50)) >= 1 ){  // 50 st
            coins += Math.floor(money / 0.50);
            money = Number((money - Math.floor(money / 0.50) * 0.50).toFixed(2));
        }
        if ((Math.floor(money / 0.20)) >= 1 ){  // 20 st
            coins += Math.floor(money / 0.20);
            money = Number((money - Math.floor(money / 0.20) * 0.20).toFixed(2));
        }
        if ((Math.floor(money / 0.10)) >= 1 ){  // 10 st
            coins += Math.floor(money / 0.10);
            money = Number((money - Math.floor(money / 0.10) * 0.10).toFixed(2));
        }
        if ((Math.floor(money / 0.05)) >= 1 ){  // 5 st 
            coins += Math.floor(money / 0.05);
            money = Number((money - Math.floor(money / 0.05) * 0.05).toFixed(2));
        }
        if ((Math.floor(money / 0.02)) >= 1 ){  // 2 st
            coins += Math.floor(money / 0.02);
            money = Number((money - Math.floor(money / 0.02) * 0.02).toFixed(2));
        }
        if ((Math.floor(money / 0.01)) >= 1 ){  // 1 st
            coins += Math.floor(money / 0.01);
            money = Number((money - Math.floor(money / 0.01) * 0.01).toFixed(2));
        }


    console.log(coins);
    

}

solve([1.23]);