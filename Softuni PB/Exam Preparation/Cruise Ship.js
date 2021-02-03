function solve(input) {
    let cruise = input.shift();
    let room = input.shift();
    let nights = input.shift();
    let money = 0;

    switch (cruise){
        case "Mediterranean":
            switch(room){
                case "standard cabin":
                    money = 27.50 * 4 * nights;
                    break;
                case "cabin with balcony":
                    money = 30.20 * 4 *nights;
                    break;
                case "apartment":
                    money = 40.50 * 4 *nights;
                    break;
                
            }
        break;
        case "Adriatic":
            switch(room){
                case "standard cabin":
                    money = 22.99 * 4 * nights;
                    break;
                case "cabin with balcony":
                    money = 25.00 * 4 *nights;
                    break;
                case "apartment":
                    money = 34.99 * 4 *nights;
                    break;
                
            }
        break;
        case "Aegean":
            switch(room){
                case "standard cabin":
                    money = 23.00 * 4 * nights;
                    break;
                case "cabin with balcony":
                    money = 26.60 * 4 *nights;
                    break;
                case "apartment":
                    money = 39.80 * 4 *nights;
                    break;
                
            }
        break;
    }
    if(nights > 7){
        money -= 0.25 * money;
    }

    console.log(`Annie's holiday in the ${cruise} sea costs ${money.toFixed(2)} lv.`);


}