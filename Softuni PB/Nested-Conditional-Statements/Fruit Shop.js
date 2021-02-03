function solve(input){
    let fruit = input.shift();
    let day = input.shift();
    let amount = Number(input.shift());
    let bill = 0;

    if ((["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].includes(day))){
        switch (fruit){
            case "banana": bill = amount * 2.50;break;
            case "apple": bill = amount * 1.20;break;
            case "orange": bill = amount * 0.85;break;
            case "grapefruit": bill = amount * 1.45;break;
            case "kiwi": bill = amount * 2.70;break;
            case "pineapple": bill = amount * 5.50;break;
            case "grapes": bill = amount * 3.85;break;
            default:console.log("error");break;
        }
    } else if (day == "Saturday" || day == "Sunday") {
        switch (fruit){
            case "banana": bill = amount * 2.70;break;
            case "apple": bill = amount * 1.25;break;
            case "orange": bill = amount * 0.90;break;
            case "grapefruit": bill = amount * 1.60;break;
            case "kiwi": bill = amount * 3.00;break;
            case "pineapple": bill = amount * 5.60;break;
            case "grapes": bill = amount * 4.20;break;
            default:console.log("error");break;
        }

    } else {
        console.log("error");
    }

    if(bill != 0){
        console.log(bill.toFixed(2));
    }

}   

solve(["apple",
    "Tuesday",
    "2"
    ]);

   