function solve(input) {
    let month = input.shift();
    let hours = Number(input.shift());
    let people = Number(input.shift());
    let time = input.shift();
    let price = 0;
    let bill = 0;

    if(time === "day"){
        if(month === "march" || month === "may" || month === "april"){
            price = 10.50;
        }else {
            price = 12.60;
        }
    } else {
        if(month === "march" || month === "may" || month === "april"){
            price = 8.40;
        }else{
            price = 10.20;
        }
    }

    if(people >= 4){
        price = price - (price * 0.10)
    }
    if(hours >= 5){
        price = price - (price * 0.50)
    }

    console.log(`Price per person for one hour: ${price.toFixed(2)}`);
    console.log(`Total cost of the visit: ${(price * hours * people).toFixed(2)}`);
}