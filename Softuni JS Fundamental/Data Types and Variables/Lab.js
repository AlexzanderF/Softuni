// # 1
function concatenate(first, second, del) {
    console.log(`${first}${del}${second}`);
}
// # 2
function rightPlace(string, char, secondString) {
    let result = string.replace("_", char);
    if (result === secondString) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
}

// # 3
function integerAndFloat(num1, num2, num3) {
    let sum = num1 + num2 + num3;
    if (sum % 1 === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }
}

// # 4
function amazingNumber(num) {
    let string = num.toString();
    let sum = 0;
    for (let i = 0; i < string.length; i++) {
        sum += Number(string[i]);
    }
    let result = sum.toString().includes("9");    // check if the sum includes "9", doesn't have to be 9
    if (result) {
        console.log(`${num} Amazing? True`);
    } else {
        console.log(`${num} Amazing? False`);
    }
}

// # 5
function gramophone(distance, passengers, price){
    let fuel = (distance / 100) * 7;
    fuel += passengers * 0.1;
    let money = fuel * price;
    console.log(`Needed money for that trip is ${money}lv.`);

}

// # 6
function centuriesToMinutes(centuries){
    let years = centuries * 100;
    let days = Math.floor(years * 365.2422);
    let hours = Math.floor(days * 24);
    let minutes = Math.floor(hours * 60);
    console.log(`${centuries} centuries = ${years} years = ${days} days = ${hours} hours = ${minutes} minutes`);

}

// # 7
function specialNumbers(num){
    for (let i = 1; i <= num; i++){
        let str = i.toString();
        let sum = 0;
        for (let a = 0; a < str.length; a++){
            sum += Number(str[a]);
        }
        if (sum === 5 || sum === 7 || sum === 11){
            console.log(`${i} -> True`);
        } else{
            console.log(`${i} -> False`);
        }
    }
}

// # 9
function latinLetters(number){
    for (let a = 0; a < number; a++){
        let letter1 = String.fromCharCode(97 + a);
        for (let b = 0; b < number; b++){
            let letter2 = String.fromCharCode(97 + b);
            for (let c = 0; c < number; c++){
                let letter3 = String.fromCharCode(97 + c);
                console.log(`${letter1}${letter2}${letter3}`);
            }
        }
    }

}


