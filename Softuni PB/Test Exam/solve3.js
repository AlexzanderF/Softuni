function solve(input) {
    let type = input.shift();
    let restaurant = input.shift();
    let count = input.shift();
    let order = input.shift();
    let totalPrice = 0;
    let stop = false;

    //"Sushi Zone", "Sushi Time", "Sushi Bar", "Asian Pub"
    //"sashimi", "maki", "uramaki", "temaki"

    switch (restaurant){
        case "Sushi Zone":
           switch(type){
                case "sashimi":
                    totalPrice = count * 4.99;
                    break;
                case "maki":
                    totalPrice = count * 5.29;
                    break;
                case "uramaki":
                    totalPrice = count * 5.99;
                    break;
                case "temaki":
                    totalPrice = count * 4.29;
                    break;
           }
        break;

        case "Sushi Time":
            switch(type){
                case "sashimi":
                    totalPrice = count * 5.49;
                    break;
                case "maki":
                    totalPrice = count * 4.69;
                    break;
                case "uramaki":
                    totalPrice = count * 4.49;
                    break;
                case "temaki":
                    totalPrice = count * 5.19;
                    break;
           }
        break;

        case "Sushi Bar":
            switch(type){
                case "sashimi":
                    totalPrice = count * 5.25;
                    break;
                case "maki":
                    totalPrice = count * 5.55;
                    break;
                case "uramaki":
                    totalPrice = count * 6.25;
                    break;
                case "temaki":
                    totalPrice = count * 4.75;
                    break;
           }
        break;

        case "Asian Pub":
            switch(type){
                case "sashimi":
                    totalPrice = count * 4.50;
                    break;
                case "maki":
                    totalPrice = count * 4.80;
                    break;
                case "uramaki":
                    totalPrice = count * 5.50;
                    break;
                case "temaki":
                    totalPrice = count * 5.50;
                    break;
           }
        break;
        default: 
        stop = true;
        console.log(`${restaurant} is invalid restaurant!`);
    }
    let uber = 0;
    if(!stop){
        if (order === "Y"){
            uber = 0.20 * totalPrice;
            totalPrice += uber;
        }
        console.log(`Total price: ${Math.ceil(totalPrice)} lv.`);
    
    }
    
}