// Rounding #2
function rounding(num, precision){
    if (precision > 15){
        precision = 15;
    }
    let result = parseFloat(num.toFixed(precision));
    console.log(result);
}


// Divison #3
function division(num){
    let divisibleBy = 0;
    if (num % 10 == 0){
        divisibleBy = 10;
        console.log(`The number is divisible by ${divisibleBy}`);
    }else if (num % 7 == 0){
        divisibleBy = 7;
        console.log(`The number is divisible by ${divisibleBy}`);
    }else if (num % 6 == 0){
        divisibleBy = 6;
        console.log(`The number is divisible by ${divisibleBy}`);
    }else if (num % 3 == 0){
        divisibleBy = 3;
        console.log(`The number is divisible by ${divisibleBy}`);
    }else if (num % 2 == 0){
        divisibleBy = 2;
        console.log(`The number is divisible by ${divisibleBy}`);
    } else {
        console.log("Not divisible");
    }
}

// #4
function vacation(people, type, day){
    let pricePerPerson = 0;
    switch (type) {
        case "Students":
            if (day === "Friday") {
                pricePerPerson = 8.45;
            } else if (day === "Saturday"){
                pricePerPerson = 9.80;
            } else{
                pricePerPerson = 10.46;
            }
            break;
        case "Business":
            if (day === "Friday") {
                pricePerPerson = 10.90;
            } else if (day === "Saturday"){
                pricePerPerson = 15.60;
            } else{
                pricePerPerson = 16;
            }
            break;
        case "Regular":
            if (day === "Friday") {
                pricePerPerson = 15;
            } else if (day === "Saturday"){
                pricePerPerson = 20;
            } else{
                pricePerPerson = 22.50;
            }
            break;
        default:
            break;
    }

    let totalPrice = 0;
    if (type === "Students" && people >= 30){
        totalPrice = pricePerPerson * people;
        totalPrice = totalPrice - (totalPrice * 0.15);
    }else if (type === "Business" && people >= 100){
        people -= 10;   // staying for free
        totalPrice = pricePerPerson * people;
    }else if (type === "Regular" && people >= 10 && people <= 20){
        totalPrice = pricePerPerson * people;
        totalPrice -= totalPrice * 0.05;
    } else {
        totalPrice = pricePerPerson * people;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

// # 5
function leapYear(year){
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0){
        console.log('yes');
    } else {
        console.log('no');
    }

}

// # 6
function printAndSum(start, end){
    let sum = 0; 
    let result = "";
    for (let i = start; i <= end; i++){
        result += `${i} `;
        sum += i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);
}

// $ 7
function triangleOfNumbers(n){
    let result = "";
    for (let rows = 1; rows <= n; rows++){
        for (let col = 1; col <= rows; col++){
            result += `${rows} `;
        }
        console.log(result);
        result = "";
    }


}

// # 8
function multiplicationTable(num) {
    for (let i = 1; i <= 10; i++){
        console.log(`${num} X ${i} = ${num * i}`);
    }

}

// # 9
// function reverse(pass){    --> WORKS AS WELL BUT NOT IN JUDGE
//     let reversed = "";
//     for (let s = pass.length - 1; s >= 0; s-- ){  // reversing password
//         reversed += pass[s];   
//     }
//     return reversed;
// }
function login(names){
    let user = names.shift();
    for(let i = 1; i <= 4; i++){
        let password = names.shift();
        let reversed = "";
        for (let s = password.length - 1; s >= 0; s-- ){  // reversing password
            reversed += password[s];   
        }
        if (reversed === user){
            console.log(`User ${user} logged in.`);
            break;
        } else if(reversed != user && i === 4){
            console.log(`User ${user} blocked!`);
        } else {
            console.log(`Incorrect password. Try again.`);
        }
    }
}


// # 10 The Pyramid Of King Djoser
function thePyramid(base, increment){
    let height = 0;
    let totalLapis = 0;
    let totalStone = 0;
    let totalMarble = 0;
    let gold = 0;
    for(let i = base; i >= 1; i-=2){    //steps = height
        height ++;
        let lapis = 0;
        let stone = 0;
        let marble = 0;
        if (i === 1 || i === 2){
            gold = (i * i) * increment;
            break;
        }
        if (height % 5 == 0){   // lapis
            lapis = (((4 * i) - 4) * increment);
            stone = (i * i) * increment - lapis;
            totalLapis += lapis;
            totalStone += stone;
        } else {
            stone = (i - 2)*(i - 2) * increment;      // <-- material for 1 step
            marble = ((i * i) * increment) - stone;      
            totalStone += stone;
            totalMarble += marble;
        }
        
    }
    console.log(`Stone required: ${Math.ceil(totalStone)}`);
    console.log(`Marble required: ${Math.ceil(totalMarble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(totalLapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);
}

// # 11
function bitcoinMining(minedGold){
    let boughtBitcoin = 0;
    let days = 0;
    let money = 0;
    let firstDay = 0;
    // const count = minedGold.length;
    for (let i = 0; i < minedGold.length; i++){      // <--- days
        days++;
        let gold = minedGold[i];
        if (days % 3 === 0){
            gold -= gold * 0.30;
        }
        // money += Number((gold * 67.51).toFixed(2));  <-- !!! breaks the code
        money += gold * 67.51;
        while (money >= 11949.16){
            if (firstDay === 0){
                firstDay = days;
            }
            money -= 11949.16;
            boughtBitcoin++;
        }
         
    }
    console.log(`Bought bitcoins: ${boughtBitcoin}`);
    if (boughtBitcoin >= 1){
        console.log(`Day of the first purchased bitcoin: ${firstDay}`);
    }
    console.log(`Left money: ${money.toFixed(2)} lv.`);

}

bitcoinMining([100, 200, 300]);