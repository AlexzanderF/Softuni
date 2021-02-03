function solve(input){
    let month = input.shift(); //May, June, July, August, September или October
    let nights = Number(input.shift());

    let studio  ;
    let apart ;

    switch (month){
        case "May":
        case "October":
            studio = 50; 
            apart = 65;
            if (nights > 14){
                studio = studio * 0.70;
            } else if (nights > 7){
                studio = studio * 0.95;
            }
        break;
        case "June":
        case "September":
            studio = 75.20; 
            apart = 68.70;
            if(nights > 14){
                studio = studio * 0.80;
            }
        break;
        case "July":
        case "August":
            studio = 76; 
            apart = 77;
        break;
    }

    if (nights > 14){
        apart = apart * 0.90;
    }

    console.log(`Apartment: ${(nights * apart).toFixed(2)} lv.`);
    console.log(`Studio: ${(nights * studio).toFixed(2)} lv.`);

}

solve(["May",
    15]);