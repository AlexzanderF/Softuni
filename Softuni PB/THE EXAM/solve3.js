function solve(input) {
    let month = input.shift();
    let hours = Number(input.shift());
    let people = Number(input.shift());
    let time = input.shift();
    let price = 0;
    let bill = 0;

    switch(time){
        case "day":
        switch(month){
            case "march":
            case "april":
            case "may":
                price = 10.50; 
            break;

            case "june":
            case "july":
            case "august":
                price = 12.60;
                break;
        }
            break;

        case "night":
        switch(month){
            case "march":
            case "april":
            case "may":
                price = 8.40;
            break;

            case "june":
            case "july":
            case "august":
                price = 10.20;
                break;
        }
            break;
    }

    if (people >= 4){
        price = price - (0.1 * price); 
    }
    if (hours >= 5){
        price = price - (price * 0.5);
    }

    bill = (price * hours) * people;
    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${bill.toFixed(2)}`);


}