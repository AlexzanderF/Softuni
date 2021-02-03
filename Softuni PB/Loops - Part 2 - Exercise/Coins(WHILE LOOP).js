function solve(input){
    let money = Number(input.shift());
    let coins = 0;

    while (money > 0){
        if(money / 2 >= 1){
            money -= 2;
            coins++;
        } else if (money / 1 >= 1 ){
            money -= 1;
            coins++;
        } else if (money / 0.50 >= 1 ){
            money -= 0.50;
            coins++;
        } else if (money / 0.20 >= 1 ){
            money -= 0.20;
            coins++;
        } else if (money / 0.10 >= 1 ){
            money -= 0.10;
            coins++;
        } else if (money / 0.05 >= 1 ){
            money -= 0.05;
            coins++;
        } else if (money / 0.02 >= 1 ){
            money -= 0.02;
            coins++;
        } else {
            money -= 0.01;
            coins++;
        }

        money = money.toFixed(2);
    }

    console.log(coins);
    console.log(money);

}

solve([0.56]);